import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/animalsComponents/Filters";
import AnimalsList from "../components/animalsComponents/AnimalsList";
import styles from "../styles/Animals.module.css";

const Animals = ({isAdmin}) => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/animals").
            then((result) => {
                setAnimals(result.data);
            });
    }, []);

    return(
        <div className={styles.divAnimals}>
            <Filters refreshList={setAnimals} />
            <AnimalsList animals={animals} refreshList={setAnimals} isAdmin={isAdmin}/>
        </div>
    );
};

export default Animals;