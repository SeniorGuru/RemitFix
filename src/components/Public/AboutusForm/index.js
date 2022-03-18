import React from "react";

import HelpText1 from "./HelpText1";
import HelpText2 from "./HelpText2";
import GetStarted from "../../Common/GetStarted";

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const AboutusForm = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <HelpText1/>
            <HelpText2/>
            <GetStarted
                title = {"Send money the smart way"}
                btnText = {"Get started"}
                text = {"Or see"}
                linkText = {"how it works"}
            />
        </Box>
    );
}

export default AboutusForm;