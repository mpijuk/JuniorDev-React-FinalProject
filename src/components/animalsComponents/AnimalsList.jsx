import axios from "axios";

const AnimalsList = ({animals, refreshList}) => {
    
    console.log(animals);
    return(
        <div>
            {animals?.map((animal) => (
                <img key={animal.id} src={`${animal.picturePath}`} alt={animal.picturePath} width="200px" height="200px" style={{ objectFit: "cover"}}></img>
            ))}
        </div>
    );
};

export default AnimalsList;