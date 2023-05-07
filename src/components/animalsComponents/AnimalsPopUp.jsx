import { useState } from "react";
import { Divider } from "@mui/material";
import axios from "axios";
import styles from "../../styles/AnimalsPopUp.module.css";
import { requestFormat } from "../../utils";

const AnimalsPopUp = ({animal, isAdmin, refreshList, toggle}) => {

    const [shownAnimal, setShownAnimal] = useState(animal);
    const [isEditing, setIsEditing] = useState(false);

    console.log(isEditing);
    const handleAdoption = async() => {
        const requestBody = requestFormat(shownAnimal);
        requestBody.adopted = true;
        
        await axios.put(`http://localhost:3001/animals/${shownAnimal.id}`, requestBody);
        const result = await axios.get("http://localhost:3001/animals");
        refreshList(result.data);
        toggle(false);
      };

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                <span className={styles.close} onClick={() => toggle(false)}>
                    &times;
                </span>
                <div className={styles.firstRow}>
                    <img
                        src={shownAnimal.picturePath} 
                        alt={shownAnimal.picturePath}
                        width="170px" 
                        height="170px"
                        style={{objectFit: "cover", borderRadius: "20px", boxShadow: "5px 5px 10px"}}
                    >
                    </img>
                    <div className={styles.dataDiv}>
                        <p className={styles.dataP}>NAME: {shownAnimal.name}</p>
                        <p className={styles.dataP}>SPECIES: {shownAnimal.species}</p>
                        <p className={styles.dataP}>STATUS: {shownAnimal.adopted ? "Adopted" : "Not adopted"}</p>
                    </div>
                </div>
                <p className={styles.dataP}>Description:</p>
                <p className={styles.descriptionDataP}>{shownAnimal.description}</p>
                <Divider />
                <div className={styles.additionalDataDiv}>
                    <p className={styles.dataP}>Last examination: {shownAnimal.lastExamination}</p>
                    <p className={styles.dataP}>Chipped: {shownAnimal.chipped ? "YES" : "NO"}</p>
                </div>
                <div className={styles.buttonDiv}>
                    {isAdmin ?
                        <button onClick={() => setIsEditing(true)} className={styles.click}>Edit</button> :
                        animal.adopted ? null :
                        <button onClick={handleAdoption} className={styles.click}>Adopt</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default AnimalsPopUp;