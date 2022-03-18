import React, { useState } from "react";

import { Link } from "react-router-dom";

import SignUpForm from '../../../components/Auth/SignUpForm';
import AuthSocial from '../../../components/Auth/AuthSocial';
import clsx from "clsx";

import {
    Box,
    Stack
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
    },
    form : {
        marginLeft : '20%',
        width : '60%',
        background: 'white',
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingTop : '30px',
        paddingBottom : '57px',
    },
    title : {
        fontSize: "30px",
        textAlign : 'center',
    },
    loginText : {
        display : 'flex',
        justifyContent : 'center',
        marginBottom : '20px',
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

const SignUp = () => {

    const classes = useStyles();
    const [authType, setAuthType] = useState(0);

    const handleAuthTypeChange = (index) => {
        setAuthType(index);
    }

    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box className={classes.title} >
                    Create an new account!
                </Box>
                <Box className={classes.loginText}>
                    <Box className={classes.ft15}>
                        Already have an account?
                    </Box>
                    <Link variant="subtitle2" align="center" to="/signin" className={classes.linkText}>
                        Login now
                    </Link>
                </Box>
                <Stack flexDirection={'row'} className={classes.stack}>
                    <Box className={ clsx(classes.tab , authType === 0 && classes.active) } onClick={() => handleAuthTypeChange(0)}>
                        Personal
                    </Box>
                    <Box  className={ clsx(classes.tab , authType === 1 && classes.active) } onClick={() => handleAuthTypeChange(1)}>
                        Business
                    </Box>
                </Stack>

                <SignUpForm authType={authType}/>

                <AuthSocial />
                <Box className={classes.footerText}>
                By continueing you agree to our <b>Terms and conditions</b> as well as our <b>Privacy Policy  </b>
                </Box>
            </Box>
        </Box>
    );
}

export default SignUp;