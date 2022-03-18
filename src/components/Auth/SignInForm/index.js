import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
    Box,
    Stack,
    Button,
    Checkbox,
    InputLabel,
    FormControl,
    FormControlLabel,
    TextField,
    Divider,
} from '@mui/material';

import { makeStyles } from "@mui/styles";
import { Link, Navigate } from "react-router-dom";


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
    forget : {
        marginTop : '-12',
    },
    remember : {
        marginTop : '15px',
        display : 'flex',
        alignItems : 'center',
    },
    submit : {
        display : 'flex',
        justifyContent : 'center',
        marginTop : '32px',
    }
}))

const SignInForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/private/agent');
    }
    return (
        <Box className={classes.root}>
            <InputLabel >Enter your email</InputLabel>
            <FormControl fullWidth variant="standard">
                <TextField id="outlined-basic" variant="outlined" />
            </FormControl>

            <InputLabel >Enter your password</InputLabel>
            <FormControl fullWidth variant="standard">
                <TextField id="outlined-basic" variant="outlined" />
            </FormControl>

            <Link to='/forgotpassword' className={classes.forget}>
                Forget password?
            </Link>

            <Divider/>
            <Box className={classes.remember}>
                <Checkbox/>
                <Box component={"span"}>
                    Remember me on this device
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.submit}>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleClick()}>
                    Login
                </Button>
            </Box>
            
        </Box>
    );
}

export default SignInForm;