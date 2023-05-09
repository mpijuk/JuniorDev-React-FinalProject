import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Button.module.css";
import DonationsPopUp from "../components/donationsComponents/DonationsPopUp";
import DonationsListWanted from "../components/donationsComponents/DonationsListWanted";
import DonationsListOffered from "../components/donationsComponents/DonationsListOffered";
import DonationsListDonated from "../components/donationsComponents/DonationsListDonated";

const Donations = ({isAdmin}) => {

    const [donations, setDonations] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/donations").
            then((result) => {
                setDonations(result.data);
            });
    }, []);

    return(
        <div>
            <button onClick={() => setIsClicked(true)} className={styles.click}>Add donation</button>
            {isClicked ? <DonationsPopUp isAdmin={isAdmin} refreshList={setDonations} toggle={setIsClicked}/> : null}
            <DonationsListWanted isAdmin={isAdmin} donations={donations.filter((don) => don.category === "wanted")} refreshList={setDonations}/>
            <DonationsListOffered isAdmin={isAdmin} donations={donations.filter((don) => don.category === "offered")} refreshList={setDonations}/>
            <DonationsListDonated isAdmin={isAdmin} donations={donations.filter((don) => don.category === "donated")} refreshList={setDonations}/>
        </div>
    );
};

export default Donations;