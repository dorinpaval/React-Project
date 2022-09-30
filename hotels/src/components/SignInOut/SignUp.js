import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@mui/material'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const navigate= useNavigate();
    const paperStyle = { padding: 20, width: '90%', margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#e28743' }
    const marginTop = { marginTop: 5, marginBottom: 5 }
    

    const [values, setValues] = useState({
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    })

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Name is required"),
        email: Yup.string().email("Enter valid email").required("Enter a valid email"),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Enter a valid phone number'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Password is required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (values, props) => {

        console.log(document.getElementById("myname").value)

        axios({
            method: 'post',
            url: '/signup',
            data: {
                name: document.getElementById("myname").value,
                gender: document.getElementById("mygender").value,
                phone: document.getElementById("myphone").value,
                email: document.getElementById("myemail").value,
                password: document.getElementById("mypassword").value
            }
        })

        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 3000);
        navigate('/');
    }


const handleChange = (event) => {
    const { name, value } = event.target
    console.log("dasda", name, value)
    setValues(
        {
            ...values,
            [name]: event.target.value
        }
    );
    console.log("rororororo ", values)
};


return (
    <Grid>
        <Paper style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <AddCircleOutlineOutlinedIcon />
                </Avatar>
                <h2 style={headerStyle}>Sign Up</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
            </Grid>
            <Formik initialValues={values} validationSchema={validationSchema} >
                {(props) => (
                    <Form onSubmit={(e) => { onSubmit(e) }} >

                        <Field as={TextField} id="myname" onFieldChange={handleChange} fullWidth name="name" label='Name'
                            placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                        <Field as={TextField} id="myemail" onFieldChange={handleChange} fullWidth name="email" label='Email'
                            placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            < Field as={RadioGroup} id='mygender' onFieldChange={handleChange} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </ Field>
                        </FormControl>
                        <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                        <Field as={TextField} id="myphone" onFieldChange={handleChange} fullWidth name="phoneNumber" label='Phone Number'
                            placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                        <Field as={TextField} id='mypassword' onFieldChange={handleChange} fullWidth name='password' type="password"
                            label='Password' placeholder="Enter your password"
                            helperText={<ErrorMessage name="password" />} />
                        <Field as={TextField} onFieldChange={handleChange} fullWidth name="confirmPassword" type="password"
                            label='Confirm Password' placeholder="Confirm your password"
                            helperText={<ErrorMessage name="confirmPassword" />} />
                        <FormControlLabel
                            control={<Field as={Checkbox} name="termsAndConditions" />}
                            label="I accept the terms and conditions."
                        />
                        <FormHelperText><ErrorMessage name="termsAndConditions" /></FormHelperText>
                        <Button type='submit' variant='contained' disabled={props.isSubmitting}
                            color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>

                    </Form>
                )}
            </Formik>
        </Paper>
    </Grid>
)
}

export default Signup;