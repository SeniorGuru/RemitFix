import React from "react";

import Comment from '../../Common/Comment';
import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '884px',
        background : '#F5F7F9',
        padding: '130px',
    },
    cardList : {
        display : 'flex',
    },
    card1 : {
        width : '250px',
        height : '300px',
        marginRight : '200px',
        background: '#C72127',
    },
    number : {
        width : '50px',
        height : '50px',
        marginTop : '30px',
        marginLeft : '30px',
        fontSize: '30px',
        fontWeight : 'bold',
        color: '#C72127',
        background: '#FFFFFF',
        textAlign : 'center',
        borderRadius : '50%',
    },
    largeText : {
        fontSize: '20px',
        marginLeft: '25px',
        marginTop: '25px',
        fontWeight: '700',
        color: '#FFFFFF',
    },
    smallText : {
        fontSize: '16px',
        marginLeft: '25px',
        marginTop: '25px',
        color: '#FFFFFF'
    },
    card2 : {
        marginTop : '70px',
        width : '250px',
        height : '300px',
        background: '#1B3764',
    },
    card3 : {
        width : '250px',
        height : '300px',
        marginRight : '200px',
        background: '#6B2FF9',
    },
    card4 : {
        marginTop : '70px',
        width : '250px',
        height : '300px',
        background: '#3FD93F',
    }
}))

const ChooseCards = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Comment
                        title = {"How It Works"}
                        subTitle1 = {"RemitFix is the cheaper, faster and safer way to send money to family and friends, pay bills and tuition fees."}
                        subTitle2 = {"At RemitFix, you get the real exchange rate known as mid-market rate and our fees, which are shown upfront is 7x cheaper than using banks and most money transfer providers"}
                        btnTitle = {"View the process"}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Box className = {classes.cardList}>
                        <Box className = {classes.card1}>
                            <Box className = {classes.number}> 1 </Box>
                            <Box className = {classes.largeText}>Choose Country and Enter Amount</Box>
                            <Box className = {classes.smallText}>In our currency calculator, you will see the real exchange rate</Box>
                        </Box>
                        <Box className = {classes.card2}>
                            <Box className = {classes.number}> 2 </Box>
                            <Box className = {classes.largeText}>Choose or Add New Recipient</Box>
                            <Box className = {classes.smallText}>And tell us the reason for<br /> the transfer</Box>
                        </Box>
                    </Box>
                    <Box className = {classes.cardList}>
                        <Box className = {classes.card3}>
                            <Box className = {classes.number}> 3 </Box>
                            <Box className = {classes.largeText}>Choose Delivery <br />Option</Box>
                            <Box className = {classes.smallText}>You have flexible options<br /> to choose</Box>
                        </Box>
                        <Box className = {classes.card4}>
                            <Box className = {classes.number}> 4 </Box>
                            <Box className = {classes.largeText}>Review Transfer<br /> Details and Pay</Box>
                            <Box className = {classes.smallText}>You can either pay via<br /> debit/credit card</Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ChooseCards;