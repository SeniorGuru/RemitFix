import React from "react";



import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#1B3764',
        height : '584px',
        color : 'white',
    },
    title : {
        // marginLeft : '400px',
        // marginRight : '400px',
        width : '60%',
        textAlign : 'center',
        fontSize : '36px',
        fontWeight : 'bold',
        marginTop : '100px',
    },
    cardList : {
        marginTop : '70px',
        paddingLeft : '20%',
        paddingRight : '20%',
    },
    subTitle : {
        fontSize : '20px',
        fontWeight : 'bold',
        marginBottom : '15px',
    },
}))

const HelpText2 = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box sx={{display:'flex',justifyContent:'center'}}>
                <Box className={classes.title}>
                    We want to make sending money cheaper, faster and more transparent 
                </Box>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box className={classes.cardList}>
                        <Box className={classes.subTitle}>
                            Sending easy
                        </Box>
                        <Box>
                            Gone are the days of sending money to family and friends back home mean a long journey to a corner remittance branch or high street bank, who charge a gob of fees to process a transaction. It is outdated, opaque and expensive. RemitFix is here to change that once and for all. We want to bring the remittance business into the digital future to make it convenient to send and receive money in near instant.
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.cardList}>
                        <Box className={classes.subTitle}>
                            More fair
                        </Box>
                        <Box>
                            Money transfer services and banks charge a high commission plus an exchange rate markup – a hidden fees levied on transaction. As a result, people end up paying up to 10 percent of their hard-earned money. We believe, it is unfair, and that is one of the pain points we want to fix it so people are not being ripped off in the middle. 
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HelpText2;