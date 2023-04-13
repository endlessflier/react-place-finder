import { memo } from 'react';
import { Favorite } from '@mui/icons-material';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/useStore';

const RestaurantCard = observer(({ restaurant }) => {
  const {
    id,
    name,
    categoryText,
    location,
    rating,
    price,
    photos,
    menu,
    website,
    stats,
    hours,
    favorite,
  } = restaurant;

  const restaurantStore = useStore();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    restaurantStore.setFavoriteRestaurant(id, !favorite);
  };
  return (
    <Card
      sx={{
        maxWidth: '100%',
        marginBottom: '0.5rem',
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '5',
          backgroundColor: '#F0F2F7',
        },
      }}
      onClick={() => restaurantStore.selectRestaurant(restaurant)}
    >
      <CardHeader
        title={name}
        titleTypographyProps={{ variant: 'h6' }}
        action={
          <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
            <Favorite color={favorite ? 'primary' : ''} />
          </IconButton>
        }
        sx={{ padding: '8px' }}
      />
      <CardContent sx={{ padding: '8px' }}>
        <Stack direction="row" spacing={1}>
          <Stack sx={{ flex: '1 0' }}>
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
              {location.addressExtended}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${hours?.openNow ? 'Open' : 'Closed'}·now`}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {categoryText}
            </Typography>
          </Stack>
          {photos.length > 0 && (
            <CardMedia
              component="img"
              image={`${photos[0].prefix}original${photos[0].suffix}`}
              sx={{ width: 84, height: 84, borderRadius: '8px' }}
              alt=""
            />
          )}
        </Stack>
        <Typography gutterTop variant="body2" color="text.secondary">
          {`${restaurant.features?.deliveryService ? '' : 'No'} Delivery`}
        </Typography>
      </CardContent>
      {(!!website || !!menu) && (
        <CardActions>
          {!!menu && (
            <Button
              href={menu}
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
              href={website}
              target="_blank"
              size="small"
              color="primary"
              onClick={(e) => e.stopPropagation()}
            >
              Order
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
});

export default memo(RestaurantCard);
