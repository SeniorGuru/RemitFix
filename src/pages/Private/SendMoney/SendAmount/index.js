import React, { useState } from "react";

import Header from '../../../../components/Layouts/Header/Private/Sendmoney';
import SendAmountForm from "../../../../components/Private/SendMoney/SendAmountForm";

import {
    Box,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
        display : 'flex',
        justifyContent : 'center',
    },
}))

const SendAmount = () => {

    const classes = useStyles();

    return (
        <>
            <Header index={0}/>
            <Box className={classes.root}>
                <SendAmountForm/>            
            </Box>
        </>
    );
}

export default SendAmount;