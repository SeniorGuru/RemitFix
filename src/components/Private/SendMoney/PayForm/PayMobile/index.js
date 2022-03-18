import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    FormControl,
    TextField,
    InputLabel,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";
import { Stack } from "react-bootstrap";


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

const PayMobile = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/private/sendmoney/confirmation')
    }

    return (
        <Box className={classes.root}>
            
            <Box className={classes.text}>
                You can choose to pay with Vipps, a mobile payment app. 

            </Box>
                It is  safe, fast and with no cost. You can make your payment without leaving the site.
            <Box className={classes.button}>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleClick()}>
                    Pay with Vipps
                </Button>
            </Box>
        </Box>
    );
}

export default PayMobile;