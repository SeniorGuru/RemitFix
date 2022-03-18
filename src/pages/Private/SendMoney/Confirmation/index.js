import React, { useState } from "react";

import ConfirmationForm from '../../../../components/Private/SendMoney/ConfirmationForm';

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
                <ConfirmationForm/>
        </Box>
    );
}

export default Delivery;