import { Fragment, useState } from 'react';
import { Button, Rating, Typography, Stack, Divider } from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Check,
  Clear,
  Favorite,
  LocationOn,
  NearMe,
  Public,
  RestaurantMenu,
} from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/useStore';
import Modal from '@/components/Modal';
import DropHoursTable from '@/components/DropHoursTable/DropHoursTable';
import { TypographyWithIcon } from '@/components/TypographyWithIcon/TypographyWithIcon';
import './RestaurantDetailsPage.css';

const PAGE_NAME = 'RestuarantDetailModal';

const RestaurantDetailsPage = observer(() => {
  const restaurantStore = useStore();
  const [favorite, setFavorite] = useState(restaurantStore.getSelectedRestaurant?.favorite);
  const {
    id,
    name,
    categoryText,
    location,
    rating,
    price,
    menu,
    website,
    stats,
    hours,
    features,
    tips,
    distance,
  } = restaurantStore.getSelectedRestaurant;
  const handleClose = () => restaurantStore.selectRestaurant(null);

  return (
    <>
      <Modal
        open
        onClose={handleClose}
        containerClassName="restaurantContainer"
        contentClassName="restaurantContent"
        id={`${PAGE_NAME}_container`}
        actions={
          <>
            <Button
              size="medium"
              variant="tertiary"
              className="backButton"
              startIcon={<ArrowBackIcon />}
              onClick={handleClose}
              data-testid="back-button"
            >
              Back
            </Button>
            <Button
              size="medium"
              variant="tertiary"
              className="backButton"
              startIcon={<Favorite color={favorite ? 'primary' : ''} />}
              onClick={() => {
                restaurantStore.setFavoriteRestaurant(id, !favorite);
                setFavorite(!favorite);
              }}
              id={`favourite`}
            >
              Favorite
            </Button>
          </>
        }
      >
        <div className="detailList">
          <Typography variant="h5" style={{ marginTop: '16px' }}>
            {name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <div>{rating}</div>
            <Rating
              name="rating-read"
              defaultValue={rating}
              size="small"
              precision={0.5}
              readOnly
            />
            {stats?.totalRatings && <div>{`(${stats?.totalRatings})`}</div>}
            {price && <div>{'$'.repeat(price)}</div>}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {location?.addressExtended}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {categoryText}
          </Typography>
          <Divider />

          <TypographyWithIcon startIcon={<LocationOn />} text={location?.address} />
          <TypographyWithIcon
            startIcon={features?.deliveryService ? <Check /> : <Clear />}
            text="Delivery"
          />
          <DropHoursTable hours={hours} />
          <TypographyWithIcon startIcon={<NearMe />} text={`${distance} m`} />
          {(!!website || !!menu) && (
            <Stack direction="row" spacing={1}>
              {!!menu && (
                <Button
                  href={menu}
                  startIcon={<RestaurantMenu />}
                  target="_blank"
                  size="small"
                  color="primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  Menu
                </Button>
              )}
              {!!website && (
                <Button
                  startIcon={<Public />}
                  href={website}
                  target="_blank"
                  size="small"
                  color="primary"
                  onClick={(e) => e.stopPropagation()}
                >
                  {new URL(website).hostname}
                </Button>
              )}
            </Stack>
          )}
          <Divider />
          {!!tips.length &&
            tips.map((tip) => (
              <Fragment key={tip.text}>
                <Typography variant="body2" color="text.secondary">
                  {tip.text}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {new Date(tip.createdAt).toLocaleDateString('ja-JP', {
                    weekday: 'long',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                </Typography>
                <Divider />
              </Fragment>
            ))}
        </div>
        <ul className={'photoList'}>
          {restaurantStore.restaurantPhotos.map((photo) => (
            <li key={photo.id} className="photoItem">
              <img key={photo.id} src={`${photo.prefix}original${photo.suffix}`} alt="" />
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
});

export default RestaurantDetailsPage;
