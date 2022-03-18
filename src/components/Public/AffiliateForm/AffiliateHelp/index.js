import React from "react";

import AFFILIATE_IMAGE from "../../../../assets/affiliate.png";

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

const AffiliateHelp = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box sx={{display:'flex',justifyContent:'center'}}>
                <Box component={"img"} src={AFFILIATE_IMAGE} className={classes.image}/>
            </Box>
            <Box className={classes.content}>
                <Box className={classes.title}>
                    Be an ambassador
                </Box>
                <Box className={classes.text}>
                    If you are influential member of a community, who is passionately talking about his experience at RemitFix or making videos or writing posts on social media about our service, we are happy to onboard you as our ambassador
                </Box>
                <Box>
                    In this role, you are expected to help us expand our customer-base and create an enthusiastic RemitFix community. Besides, we think it is only fair you get rewarded for your work and time
                </Box>
            </Box>
        </Box>
    );
}

export default AffiliateHelp;