import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';

export const MapComponent = withScriptjs(
  withGoogleMap((props) => {
    return (
      <GoogleMap defaultZoom={12} {...props}>
        {/* <Marker
          position={props.defaultCenter}
          icon={{ color: 'blue', scaledSize: new window.google.maps.Size(37, 37) }}
        /> */}

        <Marker
          icon={
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          }
          position={props.defaultCenter}
        />
        {/* <Marker
          icon={{
            path: 'M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z',
            fillColor: 'yellow',
            fillOpacity: 0.9,
            scale: 2,
            strokeColor: 'gold',
            strokeWeight: 2,
          }}
          position={props.defaultCenter}
        /> */}
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
