import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Routes , Route } from "react-router-dom";
import { Link } from "react-router-dom";

import PayCard from "./PayCard";
import PayBank from "./PayBank";
import PayMobile from "./PayMobile";

import clsx from "clsx";

import {
    Box,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        marginLeft : '25%',
        marginRight : '25%',
        paddingTop : '30px',
        "& a" : {
            textDecoration : 'none !important',
        }
    },
    title : {
        fontSize : '30px',
        fontWeight : 'bold',
        textAlign : 'center',
        marginBottom : '30px'
    },
    cardList : {
        marginLeft : '80px',
        marginRight : '80px',
    },
    card : {
        padding : '10px',
        margin : '10px',
        cursor : 'pointer',
        border : '1px solid lightgrey',
    },
    selectBox : {
        background : theme.palette.common.green,
        color : 'white !important',
    },
    smallTitle : {
        color : '#1B262C',
        fontWeight : 'bold',
    },
    smallTitle1 : {
        color : 'white',
        fontWeight : 'bold',
    },
    text : {
        fontSize : '13px',
        color : '#818181',
    },
    text1 : {
        color : 'white',
    }
}))

const TransferForm = (props) => {

    const classes = useStyles();

    const [index, setIndex] = useState(0);

    const handleDeliveryIndex = (value) => {
        setIndex(value);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Pay the transfer
            </Box>

            <Box className={classes.cardList}>
                <Grid container>
                    <Grid item xs={4}>
                        <Link to="/private/sendmoney/pay/paycard">
                            <Box className={clsx(classes.card,(index === 0) && classes.selectBox)} onClick={() => handleDeliveryIndex(0)}>
                                <Box className={clsx(classes.smallTitle,(index === 0) && classes.smallTitle1)}>
                                    Debit / Credit Card
                                </Box>
                                <Box className={clsx(classes.text,(index === 0) && classes.text1)}>
                                    Your own card
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="/private/sendmoney/pay/paybank">
                            <Box className={clsx(classes.card,(index === 1) && classes.selectBox)} onClick={() => handleDeliveryIndex(1)}>
                                <Box className={clsx(classes.smallTitle,(index === 1) && classes.smallTitle1)}>
                                    Bank Transfer
                                </Box>
                                <Box className={clsx(classes.text,(index === 1) && classes.text1)}>
                                    Via Trusly
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="/private/sendmoney/pay/paymobile">
                            <Box className={clsx(classes.card,(index === 2) && classes.selectBox)} onClick={() => handleDeliveryIndex(2)}>
                                <Box className={clsx(classes.smallTitle,(index === 2) && classes.smallTitle1)}>
                                    Vipps
                                </Box>
                                <Box className={clsx(classes.text,(index === 2) && classes.text1)}>
                                    Mobile payment app
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.cardList}>
                <Grid container>
                    <Grid item xs={12}>
                        <Routes>
                            <Route path="*" element={<PayCard />} />
                            <Route path="/paycard" element={<PayCard />} />
                            <Route path="/paybank" element={<PayBank/>} />
                            <Route path="/paymobile" element={<PayMobile/>}/>
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default TransferForm;