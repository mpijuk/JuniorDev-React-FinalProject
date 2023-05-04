import axios from "axios";
import { useRef } from "react";

const Filters = ({ refreshList }) => {

    const adoptionFilter = useRef("allAdoption");
    const speciesFilter = useRef("allSpecies");

    const handleAdoptionFilterChange = async(event) => {
        const newAdoptionFilter = event.target.value;
        
        if (speciesFilter.current == "allSpecies")
        {
            if (newAdoptionFilter == "allAdoption") {
                const result = await axios.get(`http://localhost:3001/animals`);
                refreshList(result.data);
            } else { 
                const result = await axios.get(`http://localhost:3001/animals?adopted=${newAdoptionFilter}`);
                refreshList(result.data);
            }
        } else if (newAdoptionFilter == "allAdoption"){
            const result = await axios.get(`http://localhost:3001/animals?species=${speciesFilter.current}`);
            refreshList(result.data);
        } else {
            const result = await axios.get(`http://localhost:3001/animals?adopted=${newAdoptionFilter}&species=${speciesFilter.current}`);
            refreshList(result.data);
        }
        adoptionFilter.current = newAdoptionFilter;
    }

    const handleSpeciesFilterChange = async(event) => {
        const newSpeciesFilter = event.target.value;
        
        if (adoptionFilter.current == "allAdoption")
        {
            if (newSpeciesFilter == "allSpecies") {
                const result = await axios.get(`http://localhost:3001/animals`);
                refreshList(result.data);
            } else { 
                const result = await axios.get(`http://localhost:3001/animals?species=${newSpeciesFilter}`);
                refreshList(result.data);
            }
        } else if (newSpeciesFilter == "allSpecies"){
            const result = await axios.get(`http://localhost:3001/animals?adopted=${adoptionFilter.current}`);
            refreshList(result.data);
        } else {
            const result = await axios.get(`http://localhost:3001/animals?adopted=${adoptionFilter.current}&species=${newSpeciesFilter}`);
            refreshList(result.data);
        }
        speciesFilter.current = newSpeciesFilter;
    }


    return(
        <div>
            <div>
                <p>Filter by adoption status: </p>
                <label><input type="radio" id="allAdoption" value="allAdoption" name="adoption" onChange={handleAdoptionFilterChange} />All</label>
                <label><input type="radio" id="adopted" value="true" name="adoption" onChange={handleAdoptionFilterChange} />Adopted</label>
                <label><input type="radio" id="notAdopted" value="false" name="adoption" onChange={handleAdoptionFilterChange} />Not adopted</label>
            </div>
            <div>
                <p>Filter by species: </p>
                <label><input type="radio" id="allSpecies" value="allSpecies" name="species" onChange={handleSpeciesFilterChange} />All</label>
                <label><input type="radio" id="dog" value="Dog" name="species" onChange={handleSpeciesFilterChange} />Dog</label>
                <label><input type="radio" id="cat" value="Cat" name="species" onChange={handleSpeciesFilterChange} />Cat</label>
                <label><input type="radio" id="bird" value="Bird" name="species" onChange={handleSpeciesFilterChange} />Bird</label>
                <label><input type="radio" id="other" value="Other" name="species" onChange={handleSpeciesFilterChange} />Other</label>
            </div>
        </div>
    );
};

export default Filters;