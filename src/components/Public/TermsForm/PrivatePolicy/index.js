import React from "react";

import {
    Box,
    List,
    ListItem,
} from '@mui/material';

import { FiberManualRecord } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingLeft : '92px',
        paddingRight : '139px',
        paddingTop : '80px',
        paddingBottom : '129px',
        "& .MuiSvgIcon-root" : {
            width : '6px',
            height : '6px',
            color : '#818181',
            marginRight : '9px',
        }
    },
    title : {
        fontSize : '30px',
        fontWeight : '1000',
        width : '300px',
        marginBottom : '15px',
    },
    field : {
        background : '#F5F7F9',
        marginTop : '15px',
        padding : '25px',
    },
    subTitle1 : {
        marginTop : '49px',
        fontSize : '20px',
        fontWeight : 'bold',
    },
    subTitle2 : {
        marginTop : '25px',
        fontSize : '20px',
        fontWeight : 'bold',
    },
    text : {
        marginTop : '25px',
    },
    listItem : {
        marginTop : '25px',
    },
    item : {
        display : 'flex',
        alignItems : 'center',
        color : '#1B3764',
        padding : '2px',
    }

}))

const PrivatePolicy = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box className={classes.title}>
                Global Privacy Policy Worldwide
            </Box>
            Last updated: April 28, 2020
            <Box className={classes.field}>
                RemitFix has updated its Privacy Policy and Cookie Policy effective April 28, 2020. In the Privacy Policy, we have clarified our use of data, including that RemitFix does not use, share, rent, or sell the personal data of our users’ customers for interest-based advertising. We’ve also made it clear that in the event of any sale of RemitFix or its assets, the buyer will continue to be bound by the terms of the Privacy Policy. We’ve also added more information about the cookies we use in our Cookie Policy.
            </Box>
            <Box className={classes.subTitle1}>
                Welcome to RemitFix!
            </Box>
            <Box className={classes.text}>
                Remitfix Inc. and its affiliates (collectively “RemitFix”, “we” and “us”) respect your privacy. We offer services that enable platforms and merchants to run businesses, and to safely conduct online payment transactions.
            </Box>
            <Box className={classes.text}>
                This Global Privacy Policy describes the types of Personal Data we collect through our payments products and services (“Services”) and via our online presence, which include our main website at stripe.com, as well as services and websites that we enable Internet users to access, such as Stripe Checkout and the Stripe Shop (collectively, our “Sites”). This policy also describes how we use Personal Data, with whom we share it, your rights and choices, and how you can contact us about our privacy practices. This policy does not apply to third-party websites, products, or services, even if they link to our Services or Sites, and you should consider the privacy practices of those third-parties carefully.
            </Box>
            <Box className={classes.text}>
            This Privacy Policy is provided in a layered format. Click through to jump to a specific section.
            </Box>
            <Box className={classes.subTitle2}>
                Overview
            </Box>
            <Box className={classes.listItem}>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Personal Data We Collect
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    How We Use Personal Data
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    How We Disclose Personal Data
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Your Rights and Choices
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Security and Retention
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    International Data Transfers
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Use by Minors
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Updates To this Privacy Policy
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Links To Other Websites
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Jurisdiction-specific Provisions
                </Box>
                <Box className={classes.item}>
                    <FiberManualRecord/>
                    Contact Us
                </Box>
            </Box>
            <Box className={classes.subTitle1}>
                1.Overview
            </Box>
            <Box className={classes.text}>
                RemitFix obtains Personal Data about you from various sources to provide our Services and to manage our Sites. “You” may be a visitor to one of our websites, a user of one or more of our Services (“User” or “Stripe User”), or a customer of a User (“Customer”). If you are a Customer, Stripe will generally not collect your Personal Data directly from you. Your agreement with the relevant Stripe User should explain how the Stripe User shares your Personal Data with Stripe, and if you have questions about this sharing, then you should direct those questions to the Stripe User.
            </Box>
        </Box>
    );
}

export default PrivatePolicy;