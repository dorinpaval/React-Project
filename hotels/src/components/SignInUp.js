import React, { useState } from 'react'
import Hero from './Hero';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from './SignInOut/Login'
import SignUp from './SignInOut/SignUp'


const SignInOut=()=>{
  
  const [value,setValue]=useState(0)
  const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  const paperStyle={width:"30%",margin:"20px auto"}
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
    return (
        <Hero>
        <Paper elevation={20} style={paperStyle}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
         
          <Tab label="Sign Up" />
        </Tabs>
        <TabPanel value={value} index={0}>
       <Login handleCh={handleChange}/>
       <br/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <SignUp/>
      <br/>
      </TabPanel>
      </Paper>
      </Hero>
    )
}

export default SignInOut;