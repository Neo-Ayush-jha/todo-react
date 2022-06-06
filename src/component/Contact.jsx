import { Container } from "@mui/system"
import {Grid, Typography } from '@mui/material';
import ContactList from "./ContactList";
import Side from "./Side";



const Contact = ()=>{
    return(
            <Grid container spacing={2}  >
                <Grid item lg={3}>
                    <Side/>
                </Grid>
                <Grid item lg={9}>
                    <Typography variant="h5">All Contact</Typography>
                    <ContactList/>

                </Grid>
            </Grid>
    )
}
export default Contact;