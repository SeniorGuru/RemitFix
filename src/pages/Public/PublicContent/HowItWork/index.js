import React from "react";

import WORK_IMAGE from '../../../../assets/howtowork.png';
import Comment from '../../../../components/Common/Comment';
import HowItWork from '../../../../components/Public/HowItWorkForm';

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        position : 'relative',
    },
    body : {
        height : '550px',
        paddingLeft: '130px',
        paddingRight: '130px',
    },
    image : {
        position : 'absolute',
        top : '70px',
    }
}))

const HowItWorks = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            
            <Box className={classes.body}>
                <Grid container>
                    <Grid item xs={6}>
                        <Comment
                            title = {"How it Works"}
                            subTitle1 = {"Banks and high-street money transfer services charge you gobs of money by adding ridiculous mark-ups to the exchange rate plus unfair commissions."}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box component={"img"} src={WORK_IMAGE} className={classes.image}/>
                    </Grid>
                </Grid>
            </Box>
            <HowItWork/>
        </Box>
    );
}

export default HowItWorks;