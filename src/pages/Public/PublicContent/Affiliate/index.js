import React from "react";

import AffiliateIntroduce from "../../../../components/Public/AffiliateForm/AffiliateIntroduce";
import AffiliateHelp from "../../../../components/Public/AffiliateForm/AffiliateHelp";
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

const Affiliate = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <AffiliateIntroduce/>
            <AffiliateHelp/>
            <JamalBennouna/>
            <GetStarted
                title = {"Become an affiliate"}
                text = {"If you are interested any of the above affiliate roles, or have any questions, email us at"}
                linkText = {"affiliates@remitfix.com"}
            />
        </Box>
    );
}

export default Affiliate;