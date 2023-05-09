import styles from "../../styles/PopUp.module.css";
import DonationsForm from "./DonationsForm";

const DonationsPopUp = ({isAdmin, toggle}) => {
    return(
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={() => toggle(false)}>
                    &times;
                </span>
                <DonationsForm isAdmin={isAdmin} toggle={toggle} />
            </div>
        </div>
    );
};

export default DonationsPopUp;