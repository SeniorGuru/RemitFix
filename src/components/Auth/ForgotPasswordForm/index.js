import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Box,
    Form,
    Button,
    Checkbox,
    InputLabel,
    FormControl,
    FormControlLabel,
    TextField,
    Divider,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        
        "& .MuiInputLabel-root" : {
            fontSize : '15px',
            color : '#818181',
            marginBottom : '8px',
        },
        "& .MuiFormControlLabel-root" : {
            height : '50px',
            width : '48%',
            marginRight : 0,
            marginLeft : 0,
            border : '1px solid grey',
        },
        "& a" : {
            fontSize : '13px',
            fontWeight : 'bold',
            color : '#1B262C',
            textDecoration : 'none',
        },
        "& .MuiDivider-root" : {
            marginTop : '15px',
        },
        "& .MuiButton-root" : {
            width : '80%',
        }
    },
    submit : {
        display : 'flex',
        justifyContent : 'center',
        marginTop : '32px',
    }
}))

const ForgotPasswordForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/resetpassword')
    }

    return (
        <Box className={classes.root}>
                <InputLabel >Enter your email</InputLabel>
                <FormControl fullWidth variant="standard">
                    <TextField id="outlined-basic" variant="outlined" />
                </FormControl>


                <Divider/>
                <Box className={classes.submit}>
                    <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                        Send email
                    </Button>
                </Box>
        </Box>
    );
}

export default ForgotPasswordForm;