import React from "react";

import PARTNER_IMAGE from "../../../../assets/partner.png";


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

const BusinessPartnerHelp = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box sx={{display:'flex',justifyContent:'center'}}>
                <Box component={"img"} src={PARTNER_IMAGE} className={classes.image}/>
            </Box>
            <Box className={classes.content}>
                <Box className={classes.title}>
                    Robust Revenue
                </Box>
                <Box className={classes.text}>
                    Unlike our competitors who take a big bite out of the transfer costs, we offer a robust revenue split arrangement on fees generated in our platform with our partners on both sides of the aisle.
                </Box>
                <Box>
                    If this sounds great and you are interested in becoming a RemitFix Business Partner, Please fill out the form below.
                </Box>
            </Box>
        </Box>
    );
}

export default BusinessPartnerHelp;