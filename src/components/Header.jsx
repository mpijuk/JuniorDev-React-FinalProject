import Navbar from "./Navbar";
import styles from "../styles/Header.module.css";


const Header = ({isAdmin, setAdmin}) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.firstRow}>
                <p className={styles.name}>AZILION</p>
                <div className={styles.sliderButton}>
                    <p className={styles.pHeader}>Admin</p>
                    <div>
                        <label className={styles.switch}>
                            <input 
                                type="checkbox" 
                                id="checkbox" 
                                checked={isAdmin}
                                onChange={() => setAdmin((prev) => { return !prev;})}
                                
                            />
                            <div className={`${styles.slider} ${styles.round}`}></div>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
    );
};

export default Header;