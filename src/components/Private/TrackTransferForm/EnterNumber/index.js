import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    Box,
    FormControl,
    Grid,
    TextField,
    Button
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '100vh',
        "& a" : {
            marginTop : '10px',
            color : theme.palette.common.green,
        },
        "& .MuiButton-root" : {
            width : '80%'
        }
    },
    title : {
        fontSize : '30px',
        fontWeight : 'bold',
        paddingTop : '30px',
        paddingBottom : '30px',
    },
    content : {
        width : '100%',
        display:'flex',
        flexDirection : 'column !important',
        alignItems : 'center',
    },
    smallText : {
        fontSize : '13px',
        color : '#818181',
        marginTop : '10px',
        marginBottom : '20px'
    }
}))

const Enternumber = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/private/TrackTransfer');
    }
    
    return(
        <Box className = {classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} className={classes.content}>
                        <Box className={classes.title}>
                            Track a transfer
                        </Box>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Enter your tracking number"
                            />
                        </FormControl>
                        <Box className={classes.smallText}>
                        Tracking number is 6 digit code of your transaction number. It can be found in your transfer history and in your receipt that we sent via SMS and email.
                        </Box>

                        <Button variant="contained" color="primary" onClick={() => handleClick()}>
                            Continue
                        </Button>
                        <Link to='/private/tracktransfer/nonumber'>
                            Don't know the tracking number?
                        </Link>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Box>
    );
}

export default Enternumber;