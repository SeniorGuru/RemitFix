import React, { useState } from "react";
import { Link } from "react-router-dom";

import SignInForm from "../../../components/Auth/SignInForm";
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
    },
    linkText : {
        fontSize: '15px !important',
        color : '#00CC00 !important',
    },
    footerText : {
        fontSize:'13px',
        textAlign:'center',
    },
    ft15 : {
        fontSize : '15px',
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

const SignIn = () => {

    const classes = useStyles();
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box className={classes.title} >
                    Welcome back!
                </Box>
                <Box align="center" className={classes.loginText}>
                    <Box className={classes.ft15}>
                        New to RemitFix?
                    </Box>
                    <Link to="/signin" className={classes.linkText}>
                        SignUp now
                    </Link>
                </Box>
                
                <SignInForm/>

                <AuthSocial/>
                <Box className={classes.footerText}>
                By continueing you agree to our <b>Terms and conditions</b> as well as our <b>Privacy Policy  </b>
                </Box>
            </Box>
        </Box>
    );
}

export default SignIn;