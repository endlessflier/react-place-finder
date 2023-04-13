import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

export const MapComponent = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap defaultZoom={12} data-testid="map-component" {...props}>
        <Marker
          icon={
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          }
          position={props.defaultCenter}
        />
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={60}>
          {props.markers.map((marker) => (
            <Marker
              key={marker.id}
              position={marker.location}
              onClick={() => props.selectRestaurant(marker)}
            />
          ))}
        </MarkerClusterer>
      </GoogleMap>
    );
  }),
);
