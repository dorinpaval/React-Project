import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';


export default function ContactUs() {

  function onSubmit(){
    window.open('mailto:pavstel@dispostable.com?subject="dadada"&body=nununu');
  }

  return (
    <>
      <Hero>
        <div style={{width:"35%"}}><Banner title='Contact form' subtitle='At PavStel Hotel, we promise to serve you better. We want to be attentive and sensitive to your needs. We also seek to be innovative in meeting and also exceeding your expectations.'> </Banner></div>
          <Grid>
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Contact Us
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                  Fill up the form and our team will get back to you within 24 hours.
                </Typography>
                <form onSubmit={onSubmit}>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField id="firstname"placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField id="lastname" placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" id="message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid>

                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
       
      </Hero>
    </>
  )
}