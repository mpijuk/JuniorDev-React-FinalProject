import { useState, useEffect } from "react";
import axios from "axios";
import Filters from "../components/animalsComponents/Filters";
import AnimalsList from "../components/animalsComponents/AnimalsList";

const Animals = () => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/animals").
            then((result) => {
                setAnimals(result.data);
            });
    }, []);

    return(
        <div>
            <Filters refreshList={setAnimals} />
            <AnimalsList animals={animals} refreshList={setAnimals} />
        </div>
    );
};

export default Animals;