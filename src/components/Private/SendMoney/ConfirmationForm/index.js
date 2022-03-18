import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import clsx from "clsx";

import {
    Box,
    Stack,
    Grid,
    Button,
    Divider
} from '@mui/material';

import { CheckCircleOutline } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        marginLeft : '25%',
        marginRight : '25%',
        paddingTop : '30px',
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingBottom : '70px',
        display : 'flex',
        flexDirection : 'column',
        alignItems: 'center',
        "& .MuiBox-root" : {
            marginTop : '20px',
        },
        "& a" : {
            color : theme.palette.common.green,
        },
    },
    title : {
        fontSize : '30px',
        fontWeight : 'bold',
    },
    content : {
        border : '1px solid lightgrey',
        padding : '20px'
    },
    button : {
        color : '#00cc00 !important'
    },
    right : {
        display : 'flex',
        justifyContent : 'flex-end',
    },
    bold : {
        fontWeight : 'bold',
    },
    smallText : {
        fontSize : '13px',
        fontWeight : 'bold',
        marginBottom : '20px !important',
    },
    submit1 : {
        width : '100%',
    },
    submit2 : {
        width : '100%',
        color : '#F52C71 !important',

    }
}))

const ConfirmationForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/private/TrackTransfer');
    }
    
    return(
        <Box className = {classes.root}>

            <CheckCircleOutline sx={{ width: '130px', height: '130px', color: '#00cc00' }} />

            <Box className={classes.title}>
                Thank you for using RemitFix!
            </Box>
            <Box>
                Your transfer is on its way and we will update you via SMS and email on the progress of your transfer.
            </Box>

            <Box>
                <Button variant="outlined" className={classes.button}>
                    Download receipt
                </Button>
            </Box>

            <Box className={classes.content}>
                <Grid container>
                    <Grid item xs={6} className={classes.smallText}>
                        Sender details
                    </Grid>
                    <Grid item xs={6} className={classes.smallText}>
                        Recipient details
                    </Grid>
                    
                    <Grid item xs={6} className={classes.bold}>
                        Mohammed Abdulrahhman
                    </Grid>
                    <Grid item xs={6} className={classes.bold}>
                        Diego Fernando Valencia Palacios
                    </Grid>

                    <Grid item xs={6}>
                        Oscars gate 44
                    </Grid>
                    <Grid item xs={6}>
                        Calle 152A #14A - 36 int 605
                    </Grid>

                    <Grid item xs={6}>
                        Oslo
                    </Grid>
                    <Grid item xs={6}>
                        Bogotá, Cundinamarca
                    </Grid>
                    

                    <Grid item xs={6}>
                        0258
                    </Grid>
                    <Grid item xs={6}>
                        3057921980
                    </Grid>
                    
                    <Grid item xs={12}>
                        984 94 235
                    </Grid>
                </Grid>
                
                <Divider sx={{mt:2,mb:2}}/>
                
                <Grid container spacing={2}>
                    <Grid item xs={12} className={classes.bold}>
                        Transfer details
                    </Grid>

                    <Grid item xs={6}>
                        Sent
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        07/07/20 - 3:00PM
                    </Grid>
                    
                    <Grid item xs={6}>
                        Transaction No.
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        094829023
                    </Grid>
                    
                    <Grid item xs={6}>
                        Delivery
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        Cash Pickup
                    </Grid>
                    
                    <Grid item xs={6}>
                        Partner
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        Premier Bank
                    </Grid>
                    
                    <Grid item xs={6}>
                        Currency
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        USD
                    </Grid>
                    
                    <Grid item xs={6}>
                        Transfer time
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        Within minutes
                    </Grid>
                    
                    <Grid item xs={6}>
                        Payment method
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        Visa *9231
                    </Grid>
                    
                    <Grid item xs={6}>
                        Amount sent
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        2,000 NOK
                    </Grid>
                    
                    <Grid item xs={6}>
                        Transfer fee
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        0 NOK
                    </Grid>
                    
                    <Grid item xs={6} className={classes.bold}>
                        Total amount paid
                    </Grid>
                    <Grid item xs={6} className={clsx(classes.right, classes.bold)}>
                        2,000 NOK
                    </Grid>
                    
                    <Grid item xs={6} className={classes.bold}>
                        Recipient gets
                    </Grid>
                    <Grid item xs={6} className={clsx(classes.right, classes.bold)}>
                        219.46 USD
                    </Grid>
                    
                    <Grid item xs={6}>
                        Real Exchange Rate
                    </Grid>
                    <Grid item xs={6} className={classes.right}>
                        1 NOK = 0.109976 USD
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{fontSize:13}}>
                RemitFix will never charge you a hidden fees and your recipient gets exactly the amount specified above. No surprise at all.
            </Box>

            <Box component={"hr"} sx={{width:"100%"}}/>

            <Box>
                You might review &nbsp;
                <Link to='/'>
                        all your transfers &nbsp;
                </Link>
                or
            </Box>

            <Box sx={{width:'80%'}}>
                <Button variant="contained" color="primary" className={classes.submit1} onClick={() => handleClick()}>
                    Make a new transfer
                </Button>
            </Box>

            <Box component={"hr"} sx={{width:"100%"}}/>

            <Box>
                Please review our &nbsp;
                <Link to='/'>
                        refund policy &nbsp;
                </Link>
                if you wish to
            </Box>

            <Box sx={{width:'80%'}}>
                <Button variant="outlined" color="primary" className={classes.submit2}>
                    Cancel your transfer
                </Button>
            </Box>
        </Box>
    );
}

export default ConfirmationForm;