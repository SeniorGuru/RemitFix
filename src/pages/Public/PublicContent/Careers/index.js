import React from "react";

import CareersForm from "../../../../components/Public/CareersForm";

import {
    Box,

} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const Careers = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <CareersForm/>
        </Box>
    );
}

export default Careers;