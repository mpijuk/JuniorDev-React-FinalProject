import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import styles from "../../styles/PersonalData.module.css";
import { blue } from '@mui/material/colors';
import { Padding } from '@mui/icons-material';

const PersonalData = () => {
    return(
        <div className={styles.divContainer}>
            <div>
                <p className={styles.pTitles}>CONTACT US</p>
                <p className={styles.pData}>azilion@gmail.com</p>
            </div>
            <div>
                <p className={styles.pTitles}>&copy; 2023</p>
                <p className={styles.pData}>Made with love for animals</p>
            </div>
            <div>
                <p className={styles.pTitles}>LET'S CONNECT</p>
                <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2", pr: "20px"}}/>
                <InstagramIcon fontSize="large" sx={{ color: "#C13584", pr: "20px" }}/>
                <FacebookOutlinedIcon fontSize="large" sx={{ color: "#4267B2" }}/>
            </div>
        </div>
    );
};

export default PersonalData;