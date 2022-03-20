import React, { useState } from "react";

import Header from '../../../../components/Layouts/Header/Private/Sendmoney';
import DeliveryForm from '../../../../components/Private/SendMoney/DeliveryForm';

import {
    Box,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
    },
}))

const Delivery = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Header index={2}/>
            <DeliveryForm/>            
        </Box>
    );
}

export default Delivery;