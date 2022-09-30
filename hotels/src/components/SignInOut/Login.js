import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../context/userContext';


const Login = ({ handleCh }) => {

    const context= React.useContext(UserContext);
  const {login} = context;  
  console.log("UserContext:", context)

    const paperStyle = { padding: 20, width: '90%', margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#e28743' }
    const btnstyle = { margin: '8px 0' }
    const initialValues= {
        email: '',
        password: '',
        remember:false
    }

    const validationSchema=Yup.object().shape({
        email:Yup.string().email('Please enter a valid email!').required("Required"),
        password:Yup.string().required("Required")
    })



    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={login} validationSchema={validationSchema}>
                    {(props) => <Form>
                        {/* {console.log(props)} */}
                        <Field as={TextField} label='Email' name='email' placeholder='Enter email' fullWidth required 
                                helperText={<ErrorMessage name='email'/>} />
                        <Field as={TextField} label='Password' name='password'  placeholder='Enter password' type='password' fullWidth required 
                                helperText={<ErrorMessage name='password'/>} />
                        <Field as={FormControlLabel} name='remember'
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                         <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth disabled={props.isSubmitting}>
                            {props.isSubmitting? "Loading" : 'Sign in'}
                            </Button>
                    </Form>


                    }
                </Formik>
               
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" onClick={() => handleCh("event", 1)} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login