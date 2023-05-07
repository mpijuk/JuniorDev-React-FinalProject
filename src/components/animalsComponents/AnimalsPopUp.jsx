import { useState } from "react";
import { Divider } from "@mui/material";
import axios from "axios";
import styles from "../../styles/AnimalsPopUp.module.css";
import { requestFormatAnimal } from "../../utils";
import AnimalsUpdateForm from "./AnimalsUpdateForm";

const AnimalsPopUp = ({animal, isAdmin, refreshList, toggle}) => {

    const [isEditing, setIsEditing] = useState(false);

    const updateAdoption = async() => {
        const requestBody = requestFormatAnimal(animal);
        requestBody.adopted = true;
        
        await axios.put(`http://localhost:3001/animals/${animal.id}`, requestBody);
        const result = await axios.get("http://localhost:3001/animals");
        refreshList(result.data);
        toggle(false);
    };

    const deleteAnimal = async() => {
    
        await axios.delete(`http://localhost:3001/animals/${animal.id}`);
        const result = await axios.get("http://localhost:3001/animals");
        refreshList(result.data);
        toggle(false);
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modal_content}>
                { isEditing ? 
                <>
                    <span className={styles.close} onClick={() => toggle(false)}>
                        &times;
                    </span>
                    <AnimalsUpdateForm initialValues={animal} refreshList={refreshList} toggle={toggle}/>
                </>
                : <>
                    <span className={styles.close} onClick={() => toggle(false)}>
                        &times;
                    </span>
                    <div className={styles.firstRow}>
                        <img
                            src={animal.picturePath} 
                            alt={animal.picturePath}
                            width="170px" 
                            height="170px"
                            style={{objectFit: "cover", borderRadius: "20px", boxShadow: "5px 5px 10px"}}
                        >
                        </img>
                        <div className={styles.dataDiv}>
                            <p className={styles.dataP}>NAME: {animal.name}</p>
                            <p className={styles.dataP}>SPECIES: {animal.species}</p>
                            <p className={styles.dataP}>STATUS: {animal.adopted ? "Adopted" : "Not adopted"}</p>
                        </div>
                    </div>
                    <p className={styles.dataP}>Description:</p>
                    <p className={styles.descriptionDataP}>{animal.description}</p>
                    <Divider />
                    <div className={styles.additionalDataDiv}>
                        <p className={styles.dataP}>Last examination: {animal.lastExamination}</p>
                        <p className={styles.dataP}>Chipped: {animal.chipped ? "YES" : "NO"}</p>
                    </div>
                    <div className={styles.buttonDiv}>
                        {isAdmin ?
                            <>
                                <button onClick={() => setIsEditing(true)} className={styles.clickG}>Edit</button>
                                <button onClick={deleteAnimal} className={styles.clickR}>Delete</button>
                            </> :
                            animal.adopted ? null :
                            <button onClick={updateAdoption} className={styles.clickG}>Adopt</button>
                        }
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default AnimalsPopUp;