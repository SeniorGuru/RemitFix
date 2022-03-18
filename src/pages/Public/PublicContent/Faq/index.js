import React from "react";

import FaqForm from "../../../../components/Public/FaqForm";

import {
    Box,

} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const Faq = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <FaqForm/>
        </Box>
    );
}

export default Faq;