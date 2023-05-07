import {
    Box,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    FormControl,
    Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { Formik } from "formik";
import * as yup from "yup";
import { requestFormatNews } from "../../utils";
import axios from "axios";

const orderSchema = yup.object().shape({
    title: yup.string().max(20, 'Title too long').required("Title is required"),
    text: yup.string().min(10, "Text too short").max(200, "Text too long").required("Text is required"),
});

const initialValuesOrder = {
    title: "",
    text: "",
    important: false,
};

const NewsForm = ({isAdmin, refreshList, toggle}) => {


    const handleFormSubmit = async(values) => {
        const requestBody = requestFormatNews(values);
        
        await axios.post("http://localhost:3001/news", requestBody);
        const result = await axios.get("http://localhost:3001/news");
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
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                          display="grid"
                          gap = "20px"
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        >
                            <Typography color="#333" fontWeight="800" fontSize="20px" gridColumn="span 4">Enter news data</Typography>
                            <TextField
                              label="Title"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.title}
                              name="title"
                              error={Boolean(touched.title) && Boolean(errors.title)}                                
                              helperText={touched.title && errors.title}
                              sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                              label="Text"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.text}
                              name="text"
                              error={Boolean(touched.text) && Boolean(errors.text)}                                
                              helperText={touched.text && errors.text}
                              sx={{ gridColumn: "span 4" }}
                            />
                            {isAdmin ? 
                                <FormControl 
                                  sx={{ 
                                  gridColumn: "span 2",
                                }}
                                >
                                    <FormControlLabel 
                                    label="Important" 
                                    onChange={handleChange}
                                    value={values.important}
                                    name="important"
                                    control={<Checkbox style={{ color: "#66bb6a" }}/>} 
                                    />
                                </FormControl> :
                                null
                            }
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
                                SAVE
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
    );

};

export default NewsForm;