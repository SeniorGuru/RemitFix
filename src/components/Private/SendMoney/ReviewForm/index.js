import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import clsx from "clsx";

import {
    Box,
    Grid,
    FormControl,
    Divider,
    TextField,
    Button,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        paddingLeft : '90px',
        paddingRight : '90px',
        paddingTop : '30px',
        paddingBottom : '50px',
        "& .MuiFormControlLabel-root" : {
            border : '1px solid lightgrey',
            marginBottom : '10px',
            marginRight : '0px'
        },
        "& a" : {
            color : theme.palette.common.green,
        },
        "& .MuiButton-root" : {
            width : '80%',
        }
    },
    title : {
        fontSize : '30px',
        fontWeight : 'bold',
        textAlign : 'center',
        marginBottom : '30px',
    },
    content : {
        border : '1px solid lightgrey',
        padding : '22px',
        fontSize : '13px',
    },
    subTitle : {
        fontWeight : 'bold',
    },
    value : {
        display : 'flex',
        justifyContent : "flex-end",
    },
    textField : {
        marginTop : '20px',
        marginBottom : '30px'
    },
    btn : {
        display : 'flex',
        justifyContent : 'center',
    }
}))

const ReviewForm = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/private/sendmoney/pay');
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Review details
            </Box>

            <Box className={classes.content}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box className={classes.subTitle}>
                            Transfer detilas
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            <Link to='/'>
                                Edit
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        You Send
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={clsx(classes.value, classes.subTitle)}>
                            2,000 NOK
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        Transfer fee
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            First three are fee-free!
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        Total amount to pay
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            2,000 NOK
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        Real Exchange Rate
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            1 NOK - 0.109976 USD
                        </Box>
                    </Grid>

                    
                    <Grid item xs={6}>
                        Recipient gets exactly
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={clsx(classes.value, classes.subTitle)}>
                            219.46 USD
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        Transfer time
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            By July 24th
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>

                    <Grid item xs={6}>
                        <Box className={classes.subTitle}>
                            Recipient details
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            <Link to='/'>
                                Edit
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        Name
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            Company Limited RemitFix
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        Phone
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            97469080000
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        Email
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            remitfix@gmail.com
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        Country
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            Somalia.
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Box className={classes.subTitle}>
                            Delivery options
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            <Link to='/'>
                                Edit
                            </Link>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        Method
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            Bank transfer
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6}>
                        Partner
                    </Grid>
                    <Grid item xs={6}>
                        <Box className={classes.value}>
                            Premier Bank
                        </Box>
                    </Grid>

                </Grid>
            </Box>
            
            <Box className={classes.textField}>
                <FormControl fullWidth>
                    <TextField
                        placeholder="Enter a description or reference for this transfer (optional)"
                    />
                </FormControl>
            </Box>

            <Box className={classes.btn}>
                <Button variant="contained" color="primary" onClick={() => {handleClick()}}>
                    Continue
                </Button>
            </Box>
        </Box>
    );
}

export default ReviewForm;