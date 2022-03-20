import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Header from '../../../../components/Layouts/Header/Private/Sendmoney';
import AddRecipient from "../../../../components/Private/SendMoney/SendRecipientForm/AddRecipient";
import SelectRecipient from "../../../../components/Private/SendMoney/SendRecipientForm/SelectRecipient";

import {
    Box,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
    },
}))

const SendRecipient = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box sx={{width : '100%'}}>
                <Grid container>
                    <Grid item xs={12} >
                        <Header index={1}/>
                        <Routes>
                            <Route path="*" element={<AddRecipient />} />
                            <Route path="/add" element={<AddRecipient />} />
                            <Route path="/select" element={<SelectRecipient />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default SendRecipient;