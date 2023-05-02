import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';
import styles from "../../styles/Map.module.css";

const LocationPin = ({ text }) => {
    return(
        <div className={styles.pin}>
            <Icon icon={locationIcon} className={styles.pinIcon} />
            <p className={styles.pinText}>{text}</p>
        </div>
    );
};

export default LocationPin;