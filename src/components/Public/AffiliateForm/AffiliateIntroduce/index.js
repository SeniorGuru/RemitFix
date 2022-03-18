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

const AffiliateIntroduce = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const navigateDigitalAgent = () => {
        navigate('/digitalagentform');
    }
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box className={classes.title}>
                    Affiliate
                </Box>
                <Box className={classes.mediumTitle}>
                    RemitFix revolution is real. We are on a mission to save the World $50 billion
                </Box>
                That is how much we currently pay every year, when transferring funds overseas. But we are more than a remittance company, we are building a financial services platform that is primarily designed to cater the needs of migrants and their families
                <Box className={classes.smallTitle}>
                    Our affiliate program lets everyone, who have social capital monetize his or her network by referring new customers to our platform.
                </Box>
            </Box>
        </Box>
    );
}

export default AffiliateIntroduce;