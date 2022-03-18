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

const DigitalIntroduce = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const navigateDigitalAgent = () => {
        navigate('/digitalagentform');
    }
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box className={classes.title}>
                    Digital Agent
                </Box>
                <Box className={classes.mediumTitle}>
                    As part of our mission to democratise the remittance business
                </Box>
                We are letting everyone who has an extensive social network to become a ‘digital’ agent to earn extra money and make a difference in the lives of so many people. 

                <Box className={classes.smallTitle}>
                    You don’t have to own a brick-and-mortar store or corner shop, nor do we require a reserve fund. All you need is legally registered business and to take basic AML/KYC training and we will take care of the rest.
                </Box>
                <Box onClick={() => navigateDigitalAgent()} className={classes.link}>
                    Become a digital agent
                    <ArrowForwardIcon sx={{width:12,height:12,ml:2}}/>
                </Box>
            </Box>
        </Box>
    );
}

export default DigitalIntroduce;