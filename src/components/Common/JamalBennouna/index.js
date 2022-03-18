import React from "react";

import AGENT_IMAGE from '../../../assets/agent.png';

import {
    Box,
    Grid,
    IconButton,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : '100px',
        paddingBottom : '100px',
        position : 'relative',
    },
    content : {
        paddingLeft : '30%',
        paddingRight : '30%',
        textAlign : 'center',
    },
    image : {
        marginBottom : '25px',
    }
}))

const BusinessPartnerBanner = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box className={classes.content}>
                <Box component={"img"} src={AGENT_IMAGE} className={classes.image}/>
                <Box>
                    I have been working with them since the beginning and I trust them. They pay very well, the exchange rate is good and they are also quick. They pay in an easy way. They give me a lot of confidence and my clients are very happy
                </Box>
                <Box sx={{fontSize:'18px',fontWeight:'bold', marginTop:'25px'}}>
                    Jamal Bennouna
                </Box>
                <Box sx={{fontSize:'14px'}}>
                    Moneytrans Agent
                </Box>
            </Box>
            <IconButton>
                {/* <ArrowBackIcon className={classes.backBtn}/> */}
                {/* <ArrowForwardIcon className={classes.forwradBtn}/> */}
            </IconButton>
        </Box>
    );
}

export default BusinessPartnerBanner;