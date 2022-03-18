import React from "react";

import BusinessPartnerIntroduce from "../../../../components/Public/BusinessPartner/BusinessPartnerIntroduce";
import BusinessPartnerHelp from "../../../../components/Public/BusinessPartner/BusinessPartnerHelp";
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

const BusinessPartner = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <BusinessPartnerIntroduce/>
            <BusinessPartnerHelp/>
            <JamalBennouna/>
            <GetStarted
                title = {"Become a business partner"}
                btnText = {"Start today"}
            />
        </Box>
    );
}

export default BusinessPartner;