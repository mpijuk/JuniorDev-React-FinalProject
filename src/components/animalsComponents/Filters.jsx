import axios from "axios";
import { useRef } from "react";
import styles from "../../styles/Filters.module.css";
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    Divider,
} from "@mui/material";

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
        <div className={styles.divContainer}>
            <p>Adoption status:</p>
            <RadioGroup
              onChange={handleAdoptionFilterChange}
              name = "adoption"
            >
                <FormControlLabel value="allAdoption" label="All" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                <FormControlLabel value="true" label="Adopted" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                <FormControlLabel value="false" label="Not adopted" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
            </RadioGroup>
            <Divider sx={{ borderBottomWidth: 3, mt: "0.8rem"}} color="azure"/>
            <p>Species:</p>
            <RadioGroup
              onChange={handleSpeciesFilterChange}
              name = "species"
            >
                <FormControlLabel value="allSpecies" label="All" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                <FormControlLabel value="Dog" label="Dog" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                <FormControlLabel value="Cat" label="Cat" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                <FormControlLabel value="Bird" label="Bird" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                <FormControlLabel value="Other" label="Other" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
            </RadioGroup>
        </div>
    );
};

export default Filters;