import React, { useState } from "react";
import { Link } from "react-router-dom";

import ForgotPasswordForm from "../../../components/Auth/ForgotPasswordForm";
import AuthSocial from "../../../components/Auth/AuthSocial";

import {
    Box,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
    },
    form : {
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingTop : '30px',
        paddingBottom : '57px',
        marginLeft : '20%',
        width : '60%',
        background: 'white',
    },
    title : {
        fontSize: "30px",
        textAlign : 'center',
    },
    loginText : {
        display : 'flex',
        justifyContent : 'center',
        fontSize : '15px',
        marginTop : '20px',
        marginBottom : '20px',
    },
    linkText : {
        display : 'flex',
        justifyContent : 'center',
        fontSize: '15px !important',
        color : '#00CC00 !important',
        marginTop : '10px',
    },
    footerText : {
        fontSize:'13px',
        textAlign:'center',
    },
    tab : {
        width : '50%',
        textAlign : 'center',
        fontWeight : "bold" ,
        cursor : "grab",
        ['@media (max-width : 500px)'] : {
            paddingBottom : 10,
        }
    },
    active : {
        borderBottom : "2px solid #1B262C"
    } ,
}))

const ForgotPassword = () => {

    const classes = useStyles();
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box className={classes.title} >
                    Forgot your password?
                </Box>
                <Box className={classes.loginText}>
                    No problem. Just fill in your email and we’ll send you a link to reset you password.
                </Box>
                
                <ForgotPasswordForm/>

                <Link variant="subtitle2" align="center" to="/signin" className={classes.linkText}>
                    Log in with your account
                </Link>
            </Box>
        </Box>
    );
}

export default ForgotPassword;