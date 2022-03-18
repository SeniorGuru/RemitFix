import React, { useEffect } from "react";

import COUNTRY_IMAGE from '../../../assets/country.png';
import RECIPIENT_IMAGE from '../../../assets/recipient.png';
import DELIVERY_IMAGE from '../../../assets/delivery.png';
import REVIEW_IMAGE from '../../../assets/review.png';

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        height : '927px',
        background : '#F5F7F9',
        paddingTop : '183px',
        paddingLeft: '130px',
        paddingRight: '130px',
    },
    card1 : {
        width : '70%',
        marginRight : '150px',
    },
    card2 : {
        width : '70%',
        marginLeft : '150px',
    },
    title : {
        fontSize : '24px',
        fontWeight : 'bold',
    },
    text : {
    },
}))
const HowItWork = (props) => {
    
    const classes = useStyles();

    const {
    } = props;

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Box className={classes.card1}>
                    <Box component={"img"} src={COUNTRY_IMAGE}/>
                    <Box className={classes.title}> Choose Country and Enter Amount</Box>
                    <Box className={classes.text}> Choose Country you want to send money to and enter amount you are sending. In our currency calculator, you will see the real exchange rate known as mid-maket rate.</Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.card2}>
                    <Box component={"img"} src={RECIPIENT_IMAGE}/>
                    <Box className={classes.title}> Choose or Add New Recipient</Box>
                    <Box className={classes.text}> Simply choose from a list of recipients you have sent to before or add a new recipient and tell us the reason for the transfer.  </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{mt:5}}>
                    <Box className={classes.card1}>
                    <Box component={"img"} src={DELIVERY_IMAGE}/>
                    <Box className={classes.title}> Choose Delivery Option</Box>
                    <Box className={classes.text}> Choose how you want your recipient to receive the money. Depending on the country you sending to, you have flexible options to choose from: mobile money, bank transfer and cash pickup.</Box>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{mt:5}}>
                    <Box className={classes.card2}>
                    <Box component={"img"} src={REVIEW_IMAGE}/>
                    <Box className={classes.title}> Review Transfer Details and Pay </Box>
                    <Box className={classes.text}> Review the details of your transfer and then choose how would you like to pay for the transfer. You can either pay via debit/credit card, bank transfer or mobile wallet.</Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HowItWork;