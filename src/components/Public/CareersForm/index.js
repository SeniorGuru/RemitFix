import React from "react";

import CheckOpening from "./CheckOpening";
import CurrentOpening from "./CurrentOpening";

import {
    Box,

} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const CareersForm = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <CheckOpening/>
            <CurrentOpening/>
        </Box>
    );
}

export default CareersForm;