import { useState } from "react";
import styles from "../styles/Button.module.css";
import DonationsPopUp from "../components/donationsComponents/DonationsPopUp";

const Donations = ({isAdmin}) => {
    const [isClicked, setIsClicked] = useState(false);

    return(
        <div>
            <button onClick={() => setIsClicked(true)} className={styles.click}>Add donation</button>
            {isClicked ? <DonationsPopUp isAdmin={isAdmin} toggle={setIsClicked}/> : null}
        </div>
    );
};

export default Donations;