import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingTop : '30px',
        paddingBottom : '87px',
        textAlign : 'center',

        "& .MuiButton-root" : {
            width : '80%',
        },
        "& .MuiGrid-container" : {
            height : '48px',
            "& .MuiGrid-item" : {
                display : 'flex',
                alignItems : 'center',
            }
        },
    },
    text : {
        marginBottom  : '20px',
    },
    button : {
        marginTop : '50px',
        display : 'flex !important',
        justifyContent : 'center',
    },
}))

const PayBank = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/private/sendmoney/confirmation')
    }

    return (
        <Box className={classes.root}>
            
            <Box className={classes.text}>
            We will process your payment through Trustly. 

            </Box>
            You will select your bank and log in with your regular access codes over a secure encrypted connection and make your payment.
            
            <Box className={classes.button}>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleClick()}>
                    Pay with Trusly
                </Button>
            </Box>
        </Box>
    );
}

export default PayBank;