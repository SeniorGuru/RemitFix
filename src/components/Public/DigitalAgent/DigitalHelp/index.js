import React from "react";

import DIGITAL_IMAGE from '../../../../assets/digital.png';


import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#1B3764',
        color : 'white',
        paddingTop : '210px',
        paddingBottom : '100px',
        position : 'relative',
    },
    content : {
        marginLeft : '30%',
        marginRight : '30%',
    },
    title : {
        fontSize : '24px',
        fontWeight : 'bold',
        marginBottom : '25px',
        textAlign : 'center',
    },
    text : {
        marginBottom : '25px',
    },
    image : {
        width : '1088px',
        height : '300px',
        position : 'absolute',
        top : -150,
        marginLeft : '200px',
        marginRight : '200px',
    }
}))

const DigitalHelp= () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box sx={{display:'flex',justifyContent:'center'}}>
                <Box component={"img"} src={DIGITAL_IMAGE} className={classes.image}/>
            </Box>
            <Box className={classes.content}>
                <Box className={classes.title}>
                    Join this Revolution
                </Box>
                <Box className={classes.text}>
                    Many hard-working people pay a ridiculous commissions plus additional hidden fees on exchange mark-ups on their cross-border money transfer. We feel this is unfair and we are meant to do something about it.
                </Box>
                <Box>
                    If you want to be part of this revolution and you are interested in becoming a RemitFix Digital Agent, please fill out the form.
                </Box>
            </Box>
        </Box>
    );
}

export default DigitalHelp;