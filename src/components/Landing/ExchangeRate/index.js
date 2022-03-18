import React from "react";

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

import RateChart from "./RateChart";
import RateComment from "./RateComment";

const useStyles = makeStyles((theme) => ({
    root : {
        height : 800,
        marginTop : 300,

        paddingLeft : '20%',
        paddingRight : '20%'
    }
}))

const ExchangeRate = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <RateChart/>
            <RateComment/>
        </Box>
    );
}

export default ExchangeRate;