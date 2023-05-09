import axios from "axios";
import styles from "../../styles/DonationsList.module.css";
import { Divider } from "@mui/material";
import { requestFormatDonation } from "../../utils";

const DonationsListOffered = ({isAdmin, donations, refreshList}) => {

    async function updateDonation(donation) {
      
        const requestBody = requestFormatDonation(donation);
        requestBody.category = "donated";

        await axios.put(`http://localhost:3001/donations/${donation.id}`, requestBody);
        const result = await axios.get("http://localhost:3001/donations");
        refreshList(result.data);
    };

    return (
        <div className={styles.divContainer}>
            <p className={styles.pTitle}>Offered by our followers</p>
            <div className={styles.divHeader}>
                <p>Type</p>
                <p>Amount</p>
                <p>Description</p>
            </div>
            <Divider sx={{ borderBottomWidth: 3}}/>
            {donations?.map((donation) => (
                <div key={donation.id} className={styles.divBody}>
                    <div className={styles.divBodyData}>
                        <p>{donation.type}</p>
                        <p>{donation.amount} €</p>
                        <p>{donation.description}</p>
                    </div>
                    {isAdmin ? 
                        <div>
                            <button onClick={() => updateDonation(donation)} className={styles.clickG}>Accept</button>
                        </div> :
                        null
                    }
                </div>
            ))}
        </div>
    );
};

export default DonationsListOffered;