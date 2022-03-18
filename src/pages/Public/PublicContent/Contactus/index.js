import React from "react";

import ContactForm from "../../../../components/Public/ContactForm";
import GetStarted from "../../../../components/Common/GetStarted";

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const Contactus = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <ContactForm/>
            <GetStarted
                title = {"Send money the smart way"}
                btnText = {"Get started"}
                text = {"Or see"}
                linkText = {"how it works"}
            />
        </Box>
    );
}

export default Contactus;