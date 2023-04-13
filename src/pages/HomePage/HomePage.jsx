import { observer } from 'mobx-react-lite';
import { MapComponent } from '@/components/MapComponent';
import RestaurantList from '@/components/RestaurantList/RestaurantList';
import { useStore } from '@/stores/useStore';
import TopNavigation from '@/components/TopNavigation/TopNavigation';
import RestaurantDetailsPage from '../RestaurantDetailsPage/RestaurantDetailsPage';
import './HomePage.css';

const HomePage = observer(() => {
  const restaurantStore = useStore();

  return (
    <div data-testid="home-page">
      <TopNavigation />
      <div className="home-container">
        <MapComponent
          defaultZoom={18}
          defaultCenter={restaurantStore.officeLocation}
          markers={restaurantStore.restaurants}
          selectRestaurant={(v) => restaurantStore.selectRestaurant(v)}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
          loadingElement={<div className="map-element" />}
          containerElement={<div className="map-container" />}
          mapElement={<div className="map-element" />}
        />
        <RestaurantList restaurants={restaurantStore.restaurants} />
      </div>
      {!restaurantStore.isLoading && restaurantStore.restaurantPhotos && <RestaurantDetailsPage />}
    </div>
  );
});

export default HomePage;
