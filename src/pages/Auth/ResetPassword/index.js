import React, { useState } from "react";
import { Link } from "react-router-dom";

import ResetPasswordForm from "../../../components/Auth/ResetPasswordForm";

import {
    Box,
    Grid,
    Stack,
    Button
} from '@mui/material';

import { CheckCircleOutline } from "@mui/icons-material";
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
}))

const ResetPassword = () => {

    const classes = useStyles();

    const handleSubmit = () => {

    }
    
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <ResetPasswordForm/>
            </Box>
        </Box>
    );
}

export default ResetPassword;