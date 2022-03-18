import React from "react";

import AboutusForm from "../../../../components/Public/AboutusForm";

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const Aboutus = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <AboutusForm/>
        </Box>
    );
}

export default Aboutus;