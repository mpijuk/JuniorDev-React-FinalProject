import Map from "../components/aboutUsComponents/Map";
import chinchilla from '../assets/chinchilla.png';
import PersonalData from "../components/aboutUsComponents/PersonalData";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
    return(
        <div className={styles.divContainer}>
            <div className={styles.divLogo}>
                <img 
                    style={{ objectFit: "fill"}}
                    width="100px"
                    height="100px"
                    alt="chinchilla"
                    src={chinchilla}
                />
            </div>
            <div className={styles.divData}>
                <Map />
                <PersonalData />
            </div>
        </div>
    );
};

export default AboutUs;