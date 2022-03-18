import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        // display : 'flex',
        // flexDirection : 'column',
        // alignItems : 'center',
    },
    columnGrid : {
        display : 'flex',
        justifyContent : 'center',
    },
    title : {
        fontSize : '30px',
        textAlign : 'center',
    },
    normal : {
        textAlign : 'center',
    },
    linkText : {
        fontSize: '15px !important',
        color : '#00CC00 !important',
    },
    submit : {
        display : 'flex',
        justifyContent : 'center',
        marginTop : '32px',
    },
    login : {
        marginTop : '10px',
        textAlign : 'center',
    }
}))

const ResetPasswordForm = () => {

    const classes = useStyles();

    const handleSubmit = () => {

    }
    
    return(
        <Box className = {classes.root}>
            <Grid container>
                <Grid item xs={12} className= {classes.columnGrid}>
                    <CheckCircleOutline sx={{ width: '130px', height: '130px', color: '#00cc00' }} />
                </Grid>
            </Grid>
            <Stack sx={{ mt: 0 }}>
            <Box className={classes.title}>
                Password reset email sent
            </Box>
            </Stack>
            <Stack sx = {{mt:'5px'}}>
                <Box className={classes.normal}>
                    We have sent you a reset password link to your registered email address. If you don’t see the email, check your spam folder.
                </Box>
            </Stack>
            <Stack className={classes.submit}>
                <Button variant="contained" color="primary" onClick={() => handleSubmit()}>
                    Log In
                </Button>
                <Box className = {classes.login}>
                    Didn't receive our email?
                    <Link className={classes.linkText} to="/forgotpassword">
                        Resend
                    </Link>
                </Box>
            </Stack>
        </Box>
    );
}

export default ResetPasswordForm;