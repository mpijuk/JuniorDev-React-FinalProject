import { useState } from "react";
import { Divider } from "@mui/material";
import axios from "axios";
import styles from "../../styles/AnimalsPopUp.module.css";
import { requestFormat } from "../../utils";

const AnimalsPopUp = ({animal, isAdmin, refreshList, toggle}) => {

    const [shownAnimal, setShownAnimal] = useState(animal);
    const [isEditing, setIsEditing] = useState(false);

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
                        width="180px" 
                        height="180px"
                        style={{objectFit: "cover"}}
                    >
                    </img>
                    <div className={styles.dataDiv}>
                        <p className={styles.dataP}>NAME: {shownAnimal.name}</p>
                        <p className={styles.dataP}>SPECIES: {shownAnimal.species}</p>
                        <p className={styles.dataP}>ADOPTION STATUS: {shownAnimal.adopted ? "Adopted" : "Not adopted"}</p>
                    </div>
                </div>
                <p>Description:</p>
                <p>{shownAnimal.description}</p>
                <Divider />
                <p>Chipped: {shownAnimal.chipped ? "YES" : "NO"}</p>
                <p>Last examination: {shownAnimal.lastExamination}</p>
                {isAdmin ?
                    <button>Edit</button> :
                    animal.adopted ? null :
                    <button onClick={handleAdoption}>Adopt</button>
                }
            </div>
        </div>
    );
};

export default AnimalsPopUp;