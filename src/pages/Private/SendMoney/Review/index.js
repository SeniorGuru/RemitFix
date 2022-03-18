import React, { useState } from "react";

import Header from '../../../../components/Layouts/Header/Private/Sendmoney';
import ReviewForm from "../../../../components/Private/SendMoney/ReviewForm";

import {
    Box,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
        paddingLeft : '20%',
        paddingRight : '20%',
    },
}))

const Review = (props) => {

    const classes = useStyles();

    return (
        <>
            <Header/>
            <Box className={classes.root}>
                <ReviewForm/>
            </Box>
        </>
    );
}

export default Review;