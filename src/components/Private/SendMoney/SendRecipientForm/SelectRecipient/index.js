import React from "react";
import { useNavigate } from "react-router-dom";

import CountrySelect from "../../../../Common/CountrySelect";

import {
    Box,
    Button,
    FormControl,
    TextField,
    InputLabel,
    Divider,
    MenuItem,
    Select,
    FormControlLabel,
    Radio,
    Grid,
    RadioGroup,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F4F6F8',
        display : 'flex',
        paddingLeft : '25%',
        paddingRight : '25%',
        flexDirection : 'column',
        "& .MuiOutlinedInput-input" : {
        },
        "& .MuiInputLabel-root" : {
            marginTop : '22px',
            marginBottom : '10px',
        },
        "& .MuiFormControlLabel-root" : {
            height : '80px',
            width : '100%',
            marginRight : 0,
            marginLeft : 0,
            padding : '10px',
            border : '1px solid grey',
            marginBottom : '20px',
        },
        "& .MuiTypography-root" : {
            width : '100%',
        },
        "& .MuiSelect-select" : {
            border : '1px solid lightgrey',
            height : '50px !important',
            display : 'flex',
            alignItems : 'center !important',
            background : 'white'
        },
        '& .MuiButton-root' : {
            color : 'white',
            width : '60%',
            height : '47px',
        }
    },
    formContent : {
        background : 'white',
        paddingLeft : '92px',
        paddingRight : '92px',
        paddingBottom : '130px',
    },
    title : {
        color : '#1B262C',
        fontSize : '36px',
        fontWeight : '1000',
        textAlign : 'center',
        marginTop : '30px',
        marginBottom : '29px',
    },
    header : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        marginBottom: '30px'
    },
    form : {
        marginTop : '29px',
    },
    text : {
        fontSize : '13px',
    },
    greenBtn : {
        background : '#00cc00 !important'
    },
    button : {
        marginTop : '20px',
        display : 'flex',
        justifyContent : 'center',
    },
    radioContent : {
        display : 'flex',
        justifyContent : 'space-between',
        width : '100%'
    },
    radioTitle : {
        width : '100%'
    },
    radioText : {
        fontSize : '13px',
        color : '#818181',
    },
    countryText : {
        display : 'flex',
        alignItems : 'center',
    }
}))

const SelectRecipient = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const mockList = [
            'Family or friends support',
            'Property Payment',
            'Salary Transfer',
            'Trade transactions',
            'Other',
    ]

    const handleContinueClick = () => {
        navigate('/private/SendMoney/delivery');
    }
    
    const handleAddClick = () => {
        navigate('/private/SendMoney/recipient/add');
    }

    return(
        <Box className = {classes.root}>
            <Box className={classes.formContent}>
                <Box className={classes.title}>
                    Add recipient details
                </Box>
                <Box>
                    <Box className={classes.header}>
                        <Box className={classes.text}>
                            Already have a recipient?
                        </Box>
                        <Button variant="contained" className={classes.greenBtn} onClick={() => handleAddClick()}>
                            Add a new recipient
                        </Button>
                    </Box>
                    
                        
                    <InputLabel >Recipient name or phone number</InputLabel>
                    <FormControl fullWidth variant="standard">
                        <TextField id="outlined-basic" variant="outlined" />
                    </FormControl>


                    <InputLabel >Or select from recent recipients</InputLabel>
                    <FormControl fullWidth variant="standard">
                        <RadioGroup defaultValue="mobile">
                            <FormControlLabel 
                                value="mobile"
                                control={<Radio/>}
                                label={
                                    <Box className={classes.radioContent}>
                                        <Box className={classes.radioTitle}>
                                            Mohammed Jade
                                            <Box className={classes.radioText}>
                                                Mobile Money
                                            </Box>
                                        </Box>
                                        <Box className={classes.countryText}>
                                            Somalia
                                        </Box>
                                    </Box>
                                }
                            />
                            <FormControlLabel 
                                value="bank"
                                control={<Radio/>}
                                label={
                                    <Box className={classes.radioContent}>
                                        <Box className={classes.radioTitle}>
                                            Nami Lasim
                                            <Box className={classes.radioText}>
                                                Bank Transfer
                                            </Box>
                                        </Box>
                                        <Box className={classes.countryText}>
                                            Somalia
                                        </Box>
                                    </Box>
                                }
                            />
                            <FormControlLabel 
                                value="cash"
                                control={<Radio/>}
                                label={
                                    <Box className={classes.radioContent}>
                                        <Box className={classes.radioTitle}>
                                            Diego Cardenas
                                            <Box className={classes.radioText}>
                                                Cash Pick-Up
                                            </Box>
                                        </Box>
                                        <Box className={classes.countryText}>
                                            Somalia
                                        </Box>
                                    </Box>
                                }
                            />
                        </RadioGroup>
                    </FormControl>

                    <InputLabel >Reason for the transfer</InputLabel>
                    <FormControl fullWidth>
                        <Select label="Family or friends support" variant="standard" disableUnderline>
                            {
                                mockList.map((element, index) => {
                                    return(
                                    <MenuItem value={element} key={index}> {element} </MenuItem>);
                                })
                            }
                        </Select>
                    </FormControl>

                    <Box className = {classes.button}>
                        <Button variant="contained" color="primary" onClick={() => {handleContinueClick()}}>
                            Continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SelectRecipient;