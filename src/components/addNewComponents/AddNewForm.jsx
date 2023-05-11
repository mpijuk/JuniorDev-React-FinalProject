import {
    Box,
    Button,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    Typography,
    useMediaQuery,
    Divider,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from "dayjs";
import { Formik } from "formik";
import * as yup from "yup";
import { requestFormatAnimal } from "../../utils";
import axios from "axios";

const orderSchema = yup.object().shape({
    species: yup.string().required("required"),
    name: yup.string().min(2, 'name too short').required("Name is required"),
    age: yup.number().positive("Age must be positive number").integer("Age must be an integer").required("Age is required"),
    picturePath: yup.string().required("Picture path is required"),
});

const initialValuesOrder = {
    species: "Other",
    name: "",
    age: "",
    description: "",
    picturePath: "",
    lastExamination: "1/1/2022",
    chipped: false,
    adopted: false,
};

const AddNewForm = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const handleFormSubmit = async(values, onSubmitProps) => {
        const requestBody = requestFormatAnimal(values);
        await axios.post("http://localhost:3001/animals", requestBody);

        onSubmitProps.resetForm();
    };

    return (
        <Box
          width={isNonMobileScreens ? "50%" : "70%"}
          p="2rem"
          m="3rem auto"
          borderRadius="1rem"
          backgroundColor= "#E5C9D7"
        >
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValuesOrder}
              validationSchema={orderSchema}  
            >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                          display="grid"
                          gap = "25px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
                            <Typography color="#333" fontFamily="Nunito" fontWeight="bold" fontSize="30px" gridColumn="span 4">Add new animal</Typography>
                            <Divider sx={{ 
                                gridColumn: "span 4",
                              }}/>
                            
                            <Typography color="#333" fontWeight="bold" fontFamily="Nunito" fontSize="18px" gridColumn="span 4">Animal personal data</Typography>
                            <RadioGroup
                              onChange={handleChange}
                              value={values.species}
                              name = "species"
                              sx={{ 
                                gridColumn: "span 4",
                              }}
                            >
                                <FormControlLabel value="Dog" label="Dog" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                                <FormControlLabel value="Cat" label="Cat" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                                <FormControlLabel value="Bird" label="Bird" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                                <FormControlLabel value="Other" label="Other" control={<Radio style={{ color: "#66bb6a" }}/>}></FormControlLabel>
                            </RadioGroup>
                            <TextField
                              label="Name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.name}
                              name="name"
                              error={Boolean(touched.name) && Boolean(errors.name)}
                              helperText={touched.name && errors.name}
                              sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                              type="number"
                              label="Age"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.age}
                              name="age"
                              error={Boolean(touched.age) && Boolean(errors.age)}                                
                              helperText={touched.age && errors.age}
                              sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                              label="Description"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.description}
                              name="description"
                              error={Boolean(touched.description) && Boolean(errors.description)}                                
                              helperText={touched.description && errors.description}
                              sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                              label="Picture path"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.picturePath}
                              name="picturePath"
                              error={Boolean(touched.picturePath) && Boolean(errors.picturePath)}                                
                              helperText={touched.picturePath && errors.picturePath}
                              sx={{ gridColumn: "span 2" }}
                            />
                            
                            <Typography color="#333" fontWeight="bold" fontFamily="Nunito" fontSize="18px" gridColumn="span 4">Additional data</Typography>
                            <DatePicker
                              onChange={(value) => setFieldValue("lastExamination", dayjs(value).format("MM/DD/YYYY"))}
                              label="Last examination"
                              name="lastExamination"
                              sx={{ gridColumn: "span 2" }}
                            />
                            <FormControl 
                              sx={{ 
                              gridColumn: "span 2",
                            }}
                            >
                                <FormControlLabel 
                                  label="Chipped" 
                                  onChange={handleChange}
                                  value={values.chipped}
                                  name="chipped"
                                  control={<Checkbox style={{ color: "#66bb6a" }}/>} 
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <Button
                              fullWidth
                              type="submit"
                              sx={{
                                mt: "2rem",
                                p: "1rem",
                                backgroundColor: "#66bb6a",
                                fontFamily: "Nunito",
                                color: "azure",
                                "&:hover": { color: "#66bb6a" },
                              }}
                            >
                                Save
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );

};

export default AddNewForm;