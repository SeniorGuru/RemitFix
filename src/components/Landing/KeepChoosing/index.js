import React from "react";

import WALLET_IMG from '../../../assets/wallet.png';
import TIMER_IMG from '../../../assets/timer.png';
import TRANSPARENT_IMG from '../../../assets/transparent.png';
import SIMPLE_IMG from '../../../assets/simple.png';
import SECURE_IMG from '../../../assets/secure.png';
import FLEXIBLE_IMG from '../../../assets/flexible.png';

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '894px',
        border : '1px solid red',
        padding: '130px',
    },
    image : {
        marginTop : '10px',
        width : '90px',
        height : '90px',
        // zIndex : 2,
    },
    content : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        padding: '100px',
        paddingTop : '40px',
        paddingBottom : '40px',
    },
    title : {
        marginTop: '25px', 
        fontWeight: '700', 
        fontSize: '20px'
    },
    text : {
        textAlign: 'center',
        marginTop: '15px',
        fontSize: '16px'
    }
}))

const KeepChoosing = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box className={classes.content}>
                                <Box component={"img"} src={WALLET_IMG} className = {classes.image}/>
                                <Box className={classes.title}>
                                    Much Cheaper
                                </Box>
                                <Box className={classes.text}>
                                    We charge the bare minimum fee that is 6-8x cheaper than using a high street money transfer operator.
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={classes.content}>
                                <Box component={"img"} src={TIMER_IMG} className = {classes.image}/>
                                <Box className={classes.title}>
                                    Much Faster
                                </Box>
                                <Box className={classes.text}>
                                    We process and authorize transactions at a speed of 60 seconds.
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={classes.content}>
                                <Box component={"img"} src={TRANSPARENT_IMG} className = {classes.image}/>
                                <Box className={classes.title}>
                                    More Transparent
                                </Box>
                                <Box className={classes.text}>
                                    You always get the real mid-market exchange rate as you would find on Reuters and Yahoo.
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={4}>
                            <Box className={classes.content}>
                                <Box component={"img"} src={SIMPLE_IMG} className = {classes.image}/>
                                <Box className={classes.title}>
                                    Simple and Smooth
                                </Box>
                                <Box className={classes.text}>
                                    We built a slick platform that is a user friendly with the best possible experience.
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={classes.content}>
                                <Box component={"img"} src={SECURE_IMG} className = {classes.image}/>
                                <Box className={classes.title}>
                                    Flexible and Convenient
                                </Box>
                                <Box className={classes.text}>
                                    You can send money the way that suits you the most, whether that is online or offline.
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box className={classes.content}>
                                <Box component={"img"} src={FLEXIBLE_IMG} className = {classes.image}/>
                                <Box className={classes.title}>
                                    Secure and Safe
                                </Box>
                                <Box className={classes.text}>
                                    We are fully regulated in every country we operate like a bank, we protect your data and money.
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default KeepChoosing;