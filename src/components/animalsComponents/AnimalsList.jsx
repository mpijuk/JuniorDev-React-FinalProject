import axios from "axios";
import styles from "../../styles/AnimalsList.module.css";

const AnimalsList = ({animals, refreshList}) => {
    
    return(
        <div className={styles.divContainer}>
            {animals?.map((animal) => (
                <img 
                  key={animal.id} 
                  src={`${animal.picturePath}`} 
                  alt={animal.picturePath} 
                  width="250px" 
                  height="250px" 
                  style={animal.adopted ? {boxShadow: "10px 10px 10px #66bb6a"} : { boxShadow: "10px 10px 10px #bb6a66"}}
                  className={styles.zoom}
                ></img>
            ))}
        </div>
    );
};

export default AnimalsList;