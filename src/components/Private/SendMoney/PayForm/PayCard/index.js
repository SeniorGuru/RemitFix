import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
    FormControl,
    TextField,
    InputLabel,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        height : '768px',
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingTop : '30px',
        paddingBottom : '87px',

        "& .MuiButton-root" : {
            width : '80%',
        },
        "& .MuiGrid-container" : {
            height : '48px',
            "& .MuiGrid-item" : {
                display : 'flex',
                alignItems : 'center',
            }
        },
    },
    title : {
        fontSize : '30px',
        fontWeight : 'bold',
        textAlign : 'center'
    },
    labelText : {
        fontSize : '13px !important',
        marginLeft : '8px',
        color : '#818181',
        marginBottom : '5px',
    },
    card : {
        background : '#F3F5F7',
        height : '230px',
        padding : '20px'
    },
    right : {
        display : 'flex !important',
        justifyContent : 'flex-end',
    },
    bold : {
        display : 'flex !important',
        justifyContent : 'flex-end',
        fontWeight : 'bold',
    },
    bold1 : {
        fontWeight : 'bold',
    },
    button : {
        display : 'flex !important',
        justifyContent : 'center',
    },
    footerText : {
        display : 'flex !important',
        justifyContent : 'center',
        color : '#818181',
        fontSize : '13px'
    }
}))

const PayCard = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/private/sendmoney/confirmation')
    }

    return (
        <Box className={classes.root}>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{width:'100%'}}>
                        <InputLabel >Name on card</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box sx={{width:'100%'}}>
                        <InputLabel >Card number</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </Box>
                </Grid>
                
                <Grid item xs={6}>
                    <Box>
                        <InputLabel >Expiration number</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </Box>
                </Grid>
                
                <Grid item xs={6}>
                    <Box>
                        <InputLabel >cvv</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className={classes.card}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                You send
                            </Grid>
                            <Grid item xs={6} className={classes.bold}>
                                2,000 Nok
                            </Grid>
                            <Grid item xs={6}>
                                They get exactly
                            </Grid>
                            <Grid item xs={6} className={classes.right}>
                                219.46 USD
                            </Grid>
                            <Grid item xs={6}>
                                Exchange rate
                            </Grid>
                            <Grid item xs={6} className={classes.right}>
                                1 NOK = 0.109976 USD
                            </Grid>
                            <Grid item xs={6}>
                                Our fee
                            </Grid>
                            <Grid item xs={6} className={classes.bold1}>
                                +$0
                            </Grid>
                            <Grid item xs={6} className={classes.bold1}>
                                Total to pay
                            </Grid>
                            <Grid item xs={6} className={classes.bold}>
                                2,000 NOK
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
                <Grid item xs={12} className={classes.button}>
                    <Button variant="contained" color="primary" fullWidth onClick={() => handleClick()}>
                        Pay
                    </Button>
                </Grid>
                <Grid item xs={12} className={classes.footerText}>
                    All payments are encrypted by our SSL 256 bits-encryption
                </Grid>
            </Grid>
            
        </Box>
    );
}

export default PayCard;