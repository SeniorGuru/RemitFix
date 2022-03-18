import React from "react";

import { useNavigate } from "react-router-dom";

import {
    Box,
    Grid,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '750px',
        paddingTop : '70px',
    },
    form : {
        marginLeft : '30%',
        marginRight : '30%',
        marginBottom : '100px',
    },
    title : {
        color : '#1B3764',
        fontSize : '20px',
        textAlign : 'center',
        marginBottom : '8px',
    },
    mediumTitle : {
        fontSize : '30px',
        fontWeight : '1000',
        textAlign : 'center',
    },
    smallTitle : {
        marginTop : '25px',
        marginBottom : '25px',
    },
    link : {
        color : '#C72127',
        cursor : 'pointer',
        fontWeight : 'bold !important',
    },
}))

const BusinessPartnerIntroduce = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const navigateDigitalAgent = () => {
        navigate('/digitalagentform');
    }
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box className={classes.title}>
                    Business Partner
                </Box>
                <Box className={classes.mediumTitle}>
                    As part of our mission to create a cross-network payment rail
                </Box>
                    We connect remittance providers to streamline moving money across borders, we partner with wide range of stakeholders including banks, telecom companies and money transfer operators. 

                <Box className={classes.smallTitle}>
                    With the success of digital-first fintech startups, traditional money transfer businesses are facing uphill battle to adopt technological changes or risk being left behind. Thanks to our compelling value proposition, remittance providers might now have everything at their disposal to level the playing field.
                </Box>
                <Box onClick={() => navigateDigitalAgent()} className={classes.link}>
                    Become a business partner
                    <ArrowForwardIcon sx={{width:12,height:12,ml:2}}/>
                </Box>
            </Box>
        </Box>
    );
}

export default BusinessPartnerIntroduce;