import AddNewForm from "../components/addNewComponents/addNewForm";
import UnauthorizedUser from "../components/addNewComponents/UnauthorizedUser";

const AddNew = ({isAdmin}) => {
    return(
        <>
            { isAdmin ? <AddNewForm /> : <UnauthorizedUser /> }
        </>
    );
};

export default AddNew;