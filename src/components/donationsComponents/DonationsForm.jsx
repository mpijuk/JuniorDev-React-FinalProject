import {
    Box,
    Button,
    TextField,
    Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { requestFormatDonation } from "../../utils";
import axios from "axios";

const orderSchema = yup.object().shape({
    type: yup.string().required("Type is required"),
    amount: yup.number().positive("Amount must be positive number").required("Amount is required"),
    description: yup.string().max(40, 'Description too long'),
});

const initialValuesOrder = {
    type: "",
    amount: "",
    description: "",
};

const DonationsForm = ({isAdmin, toggle}) => {

    const handleFormSubmit = async(values) => {
        const requestBody = requestFormatDonation(values);

        if(isAdmin) {
            requestBody.category = "wanted";
        } else {
            requestBody.category = "offered";
        }
        
        await axios.post("http://localhost:3001/donations", requestBody);
        const result = await axios.get("http://localhost:3001/donations");
        console.log(result.data);
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
                        <Typography color="#333" fontWeight="800" fontSize="20px" gridColumn="span 4">Enter donation data</Typography>
                        <TextField
                          label="Type"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.type}
                          name="type"
                          error={Boolean(touched.type) && Boolean(errors.type)}                                
                          helperText={touched.type && errors.type}
                          sx={{ gridColumn: "span 2" }}
                        />
                        <TextField
                          type="number"
                          label="Amount"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.amount}
                          name="amount"
                          error={Boolean(touched.amount) && Boolean(errors.amount)}                                
                          helperText={touched.amount && errors.amount}
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

export default DonationsForm;