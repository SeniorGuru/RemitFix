import React from "react";

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        
    },
    title : {
        fontWeight : 600,
        marginBottom : 20
    }
}))

const RateComment = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <Box className={classes.title}>
                        Fair mark-ups
                    </Box>
                    <Box className={classes.descrition}>
                        Banks and high-street money transfer services charge you gobs of money by adding ridiculous mark-ups to the exchange rate plus unfair commissions.
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.title}>
                        Fair mark-ups
                    </Box>
                    <Box className={classes.descrition}>
                        At RemitFix, you get the real exchange rate known as mid-market rate an our fees, which are shown upfront is 7x cheaper than using banks and most money transfer providers.
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default RateComment;