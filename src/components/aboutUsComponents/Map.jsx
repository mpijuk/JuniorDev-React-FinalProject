import React from 'react';
import GoogleMapReact from 'google-map-react';
import { location } from '../../utils';
import styles from "../../styles/Map.module.css";
import LocationPin from './LocationPin';

const Map = () => {
    return (
        <div>
    
        <div className={styles.googleMap}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyClUmUvKQfcN8CKOirzYK5Mnu01kQP_FnY' }}
              defaultCenter={location}
              defaultZoom={17}
            >
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text={location.address}
                />
            </GoogleMapReact>
        </div>
        </div>
  );
};


export default Map;