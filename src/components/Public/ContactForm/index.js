import React from "react";

import {
    Box,
    Grid,
    Button,
    TextField,
} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : '100px',
        paddingBottom : '100px',
        color : 'black',
        "& .form-group" : {
            fontWeight : 'bold',
        },
        "& .label" : {
            marginBottom : '10px',
        },
        "& .MuiButton-root" : {
            width : '168px',
            background : '#1B3764',
            marginTop : '25px',
        }
    },
    body : {
        paddingLeft : '250px',
        paddingRight : '250px',
    },
    title : {
        fontSize : '30px',
        fontWeight : 'bold',
        marginBottom : '25px',
    },
    phone : {
        display : 'flex', 
        marginTop : '31px'
    },
    mail : {
        marginTop : '24px', 
        display : 'flex',
    },
    formControl : {
        width : '99%',
        height : "60px",
        marginBottom : '10px',
    },
    help : {
        width : '99%',
        height : '120px',
    }
}))

const ContactForm = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box className={classes.body}>
                <Grid container>
                    <Grid item xs={6} sx={{paddingRight:'200px'}}>
                        <Box className={classes.title}>
                            We'd love to hear from you
                        </Box>
                        <Box className={classes.text}>
                            Please submit your information and we will get in touch with you
                        </Box>
                        <Box className={classes.phone}>
                            <PhoneIcon></PhoneIcon>
                            <Box className={classes.link}>&nbsp; +1 312 994 1880</Box>
                        </Box>
                        <Box className={classes.mail}>
                            <MailOutlineIcon></MailOutlineIcon>
                            <Box className={classes.link}>&nbsp;INFO@REMITFIX.COM</Box>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className='form-group'>
                            <Box component={"label"} htmlFor = "name" className="label" >Full name</Box>
                            <Box component={"input"} type="text" id="name" className={classes.formControl}/>
                        </Box>
                        <Box className='form-group'>
                            <Box component={"label"} htmlFor = "name" >Email address</Box>
                            <Box component={"input"} type="text" id="name" className={classes.formControl}/>
                        </Box>
                        <Box className='form-group'>
                            <Box component={"label"} htmlFor = "name" >Let us know how we can help</Box>
                            <Box component={"input"} type="text" id="name" defaultValue="Hi there..." className={classes.help}/>
                        </Box>
                        <Button variant='contained'> Send </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default ContactForm;