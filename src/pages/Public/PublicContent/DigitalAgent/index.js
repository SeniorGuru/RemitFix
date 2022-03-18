import React from "react";

import DigitalIntroduce from "../../../../components/Public/DigitalAgent/DigitalIntroduce";
import DigitalHelp from "../../../../components/Public/DigitalAgent/DigitalHelp";
import JamalBennouna from '../../../../components/Common/JamalBennouna';
import GetStarted from "../../../../components/Common/GetStarted";

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
    },
}))

const DigitalAgent = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <DigitalIntroduce/>
            <DigitalHelp/>
            <JamalBennouna/>
            <GetStarted
                title = {"Become a digital agent"}
                btnText = {"Start today"}
            />
        </Box>
    );
}

export default DigitalAgent;