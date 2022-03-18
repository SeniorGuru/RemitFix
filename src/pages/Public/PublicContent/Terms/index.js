import React from "react";

import TermsForm from "../../../../components/Public/TermsForm";

import {
    Box,

} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const Terms = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <TermsForm/>
        </Box>
    );
}

export default Terms;