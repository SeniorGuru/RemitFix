import React, { useState } from "react";

import Header from '../../../../components/Layouts/Header/Private/Sendmoney';
import PayForm from "../../../../components/Private/SendMoney/PayForm";

import {
    Box,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
    },
}))

const Transfer = (props) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Header/>
            <PayForm/>
        </Box>
    );
}

export default Transfer;