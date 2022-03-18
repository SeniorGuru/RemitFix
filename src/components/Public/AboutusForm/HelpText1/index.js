import React from "react";



import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : '100px',
        paddingBottom : '100px',
    },
    title : {
        marginLeft : '400px',
        marginRight : '400px',
        textAlign : 'center',
        fontSize : '36px',
        fontWeight : 'bold',
    },
    cardList : {
        marginTop : '70px',
        paddingLeft : '20%',
        paddingRight : '20%',
        textAlign : 'center',
    },
    subTitle : {
        fontSize : '30px',
        fontWeight : 'bold',
        marginBottom : '15px',
    },
}))

const HelpText1 = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box className={classes.title}>
                RemitFix is the cheapest, fastest, and safest way to send money to family and friends, pay bills and tuition fees.
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Box className={classes.cardList}>
                        <Box className={classes.subTitle}>
                            Our Vision
                        </Box>
                        <Box>
                            Our expanded vision is to transform the lives of migrants and the people they care about wherever they are.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.cardList}>
                        <Box className={classes.subTitle}>
                            Our Mission 
                        </Box>
                        <Box>
                            Through technology, we are making the financial services accessible and affordable to everyone.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.cardList}>
                        <Box className={classes.subTitle}>
                            Our Goal
                        </Box>
                        <Box>
                            We are on a mission to make sending money cheaper, faster, more transparent and a lot easier.
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HelpText1;