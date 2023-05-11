import Map from "../components/aboutUsComponents/Map";
import chinchilla from '../assets/chinchilla.png';
import PersonalData from "../components/aboutUsComponents/PersonalData";
import styles from "../styles/AboutUs.module.css";
import Typical from "react-typical";

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
                    <Typical
                    steps={['Hello, my name is', 2000, 'Azilion', 2000, 'I want to save', 2000, 'all my friends', 2000, "and I need your help", 2000]}
                    loop={Infinity}
                    wrapper="b"
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