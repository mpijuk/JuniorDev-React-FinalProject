import {
    Box,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    FormControl,
    Typography,
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from "dayjs";
import { Formik } from "formik";
import * as yup from "yup";
import { requestFormatAnimal } from "../../utils";
import axios from "axios";

const orderSchema = yup.object().shape({
    name: yup.string().min(2, 'name too short').required("Name is required"),
    age: yup.string().required("Age is required"),
    picturePath: yup.string().required("Picture path is required"),
});

const AnimalsUpdateForm = ({initialValues, refreshList, toggle}) => {

    const initialValuesOrder = {...initialValues};

    const handleFormSubmit = async(values) => {
        const requestBody = requestFormatAnimal(values);
        
        await axios.put(`http://localhost:3001/animals/${values.id}`, requestBody);
        const result = await axios.get("http://localhost:3001/animals");
        refreshList(result.data);
        toggle(false); 
    };

    return (
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
                          gap = "20px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
                            <Typography color="#333" fontWeight="800"  fontFamily="Nunito" fontSize="20px" gridColumn="span 4">Update animal data</Typography>
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
                              sx={{ gridColumn: "span 4" }}
                            />
                            <DatePicker
                              onChange={(value) => setFieldValue("lastExamination", dayjs(value).format("MM/DD/YYYY"))}
                              label="Last examination"
                              name="lastExamination"
                              sx={{ gridColumn: "span 2" }}
                            />
                            <FormControl 
                              sx={{ 
                              gridColumn: "span 1",
                            }}
                            >
                                <FormControlLabel 
                                  label="Chipped" 
                                  onChange={handleChange}
                                  value={values.chipped}
                                  checked={values.chipped ? true : false}
                                  name="chipped"
                                  control={<Checkbox style={{ color: "#66bb6a" }}/>} 
                                />
                            </FormControl>
                            <FormControl 
                              sx={{ 
                              gridColumn: "span 1",
                            }}
                            >
                                <FormControlLabel 
                                  label="Adopted" 
                                  onChange={handleChange}
                                  value={values.adopted}
                                  checked={values.adopted ? true : false}
                                  name="adopted"
                                  control={<Checkbox style={{ color: "#66bb6a" }}/>} 
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <Button
                              fullWidth
                              type="submit"
                              sx={{
                                m: "2rem 0",
                                p: "1rem",
                                backgroundColor: "#66bb6a",
                                color: "azure",
                                "&:hover": { color: "#66bb6a" },
                              }}
                            >
                                Update
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
    );

};

export default AnimalsUpdateForm;