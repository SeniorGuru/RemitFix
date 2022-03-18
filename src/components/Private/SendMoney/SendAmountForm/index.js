import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CountrySelect from '../../../Common/CountrySelect';

import {
    Box,
    Button,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Grid,
    InputAdornment,
} from '@mui/material';

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        width : '720px',
        height : '768px',
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingTop : '30px',
        paddingBottom : '87px',

        "& button" : {
          border : 'none !important',
          padding : '0px !important',
          height : '20px !important',
          "& span" : {
              fontSize : '15px',
          }
        },
        "& .MuiFormControl-root" : {
          border : '1px solid lightgrey',
          padding : '8px',
          paddingBottom : '0px',
          marginBottom : '20px',
        },
        "& .MuiTextField-root" : 
        {
            border : 'none',
            height : '20px',
            padding : '0px',
            marginLeft : '8px',
            marginBottom : '0px',
            "& fieldset" : {
                border : 'none',
            }
        },
        "& .MuiOutlinedInput-root" : {
            "& input" : {
                padding : '0px',
            }
        },
        "& .MuiInput-root" : {
            width : '100%',
            height : '48px',
            textAlign : 'center',
        },
        "& .MuiButton-root" : {
            height : '42px !important',
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
    feeText1 : {
        color : '#AFAFAF',
        textDecoration : 'line-through'
    },
    feeText2 : {
        color : theme.palette.common.green,
        fontSize : '13px',
        fontWeight : 'bold',
        marginLeft : '10px',
    },
    greenText : {
        color : theme.palette.common.green,
        fontSize : '15px',
        fontWeight : 'bold',
    },
}))

const SendAmountForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/private/sendmoney/recipient')
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                Choose country and enter an amount to send
            </Box>
            
            <FormControl fullWidth variant="standard" sx={{height:60}}>
                <Box className={classes.labelText}> Send to </Box>
                <CountrySelect/>
            </FormControl>

            <FormControl fullWidth sx={{display:'flex',flexDirection:'row'}}>
                <Grid container>
                    <Grid item xs={10}>
                        <Box>
                            <Box className={classes.labelText}> You Send </Box>
                            <TextField/>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sx={{borderLeft : '1px solid lightgrey',}}>
                        <Select id="demo-simple-select" variant="standard" disableUnderline>
                            <MenuItem value={10}>USDT</MenuItem>
                            <MenuItem value={20}>NOK</MenuItem>
                            <MenuItem value={30}>POUND</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </FormControl>
            
            <Box >
                Fee: &nbsp;
                <Box component={"span"} className={classes.feeText1}>
                    60 NOK 
                </Box>
                <Box component={"span"} className={classes.feeText2}>
                    First three transfers are fee-free!
                </Box>
            </Box>
            <Box sx={{mt:2}}>
                Total amount: 2.000 NOK
            </Box>
            <Box sx={{mt:2, mb:2}}>
                Real exchange rate: 1 NOK - 0.109976 USD
            </Box>
            
            <FormControl fullWidth sx={{display:'flex',flexDirection:'row'}}>
                <Grid container>
                    <Grid item xs={10}>
                        <Box>
                            <Box className={classes.labelText}> Recipient gets </Box>
                            <TextField/>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sx={{borderLeft : '1px solid lightgrey',}}>
                        <Select id="demo-simple-select" variant="standard" disableUnderline>
                            <MenuItem value={10}>USDT</MenuItem>
                            <MenuItem value={20}>NOK</MenuItem>
                            <MenuItem value={30}>POUND</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </FormControl>

            <Box sx={{mb:3}}>
                <Box component={"span"} className={classes.greenText}>
                    You are saving 150 NOK&nbsp;
                </Box>
                in this transfer.
            </Box>
            <Box className={classes.submit}>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleClick()}>
                    Send now
                </Button>
            </Box>
            
        </Box>
    );
}

export default SendAmountForm;