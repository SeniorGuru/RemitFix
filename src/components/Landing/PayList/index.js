import React from "react";

import {
    Box,
    Grid,
} from '@mui/material';

import Payment from './Payment' ;

import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        position : 'relative'
    },
    back : {
        marginTop : '80px',
        position : 'relative',
        background: '#1B3764',
        borderRadius: '24px',
        marginRight: '231px',
        height: 800,

        padding : 100,
    },
    title : {
        color : 'white' ,

        fontSize : 30,
        fontWeight : 600
    },
    description : {
        color : 'white'
    },
    payment : {
        position : 'absolute',
        top : 250,

        paddingLeft : 100,
        width : '100%'
    }
}))
const PayList = (props) => {
    
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.back}>
                <Grid container spacing={10}>
                    <Grid item xs={6}>
                        <Box className={classes.title}>
                            Bye-bye to the hellish old way of sending money
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.description}>
                            Get the exchange rate known as mid-market rate and opur fees, which are shown upfront is 7x cheaper than using banks and most money trnasfer providers.
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.payment}>
                <Payment />
            </Box>
        </Box>
    );
}

export default PayList;