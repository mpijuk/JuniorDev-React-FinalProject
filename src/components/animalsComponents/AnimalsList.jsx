import styles from "../../styles/AnimalsList.module.css";
import AnimalsPopUp from "./AnimalsPopUp";
import { useState } from "react";
import Image from "mui-image";

const AnimalsList = ({animals, refreshList, isAdmin}) => {
    
    const [isClicked, setIsClicked] = useState(false);
    const [chosenAnimal, setChosenAnimal] = useState({});

    return(
        <>
            <div className={styles.divContainer}>
                {animals?.map((animal) => (
                        <Image 
                        key={animal.id} 
                        src={`${animal.picturePath}`} 
                        alt={animal.picturePath} 
                        width="250px" 
                        height="250px" 
                        style={animal.adopted ? {boxShadow: "10px 10px 10px #66bb6a"} : { boxShadow: "10px 10px 10px #bb6a66"}}
                        className={styles.zoom}
                        onClick={() => {
                            setChosenAnimal(animal);
                            setIsClicked(true);
                        }}
                        />
                ))}
            </div>
            {isClicked ? <AnimalsPopUp animal={chosenAnimal} refreshList={refreshList} isAdmin={isAdmin} toggle={setIsClicked}/> : null}
        </>
    );
};

export default AnimalsList;