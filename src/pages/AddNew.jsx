import AddNewForm from "../components/addNewComponents/AddNewForm";
import UnauthorizedUser from "../components/addNewComponents/UnauthorizedUser";

const AddNew = ({isAdmin}) => {
    return(
        <>
            { isAdmin ? <AddNewForm /> : <UnauthorizedUser /> }
        </>
    );
};

export default AddNew;