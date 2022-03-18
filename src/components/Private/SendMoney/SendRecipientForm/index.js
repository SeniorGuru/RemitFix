import React from "react";
import { useNavigate } from "react-router-dom";

import CountrySelect from "../../../Common/CountrySelect";

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
            height : '50px',
            width : '48%',
            marginRight : 0,
            marginLeft : 0,
            border : '1px solid grey',
        },
        "& .MuiSelect-select" : {
            border : '1px solid lightgrey',
            height : '50px !important',
            display : 'flex',
            alignItems : 'center !important',
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
    main : {
        color : '#818181',
    },
    radio1 : {
        display : 'flex',
    },
    help : {
        height : '160px',
        width : '100%',
    },
    button : {
        marginTop : '20px',
        display : 'flex',
        justifyContent : 'center',
    },
    subTitle : {
        fontSize : '20px',
        color : '#1B262C',
        marginTop : '30px',
        marginBottom : '10px',
    }
}))

const SendRecipientForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const mockList = [
            'Family or friends support',
            'Property Payment',
            'Salary Transfer',
            'Trade transactions',
            'Other',
    ]
    const handleSaveClick = () => {
        navigate('/private/SendMoney/delivery');
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
                        <Button variant="contained" className={classes.greenBtn}>
                            Select from your list
                        </Button>
                    </Box>
                    
                        <InputLabel >Full Name</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Email</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" placeholder="Optional"/>
                        </FormControl>
                        <InputLabel >Street address</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" placeholder="Optional" />
                        </FormControl>
                        <InputLabel >City/Town</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Country of residence</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <CountrySelect/>
                        </FormControl>
                    
                        <InputLabel >Phone Number</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                
                    <InputLabel >Gender</InputLabel>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box className={classes.radio1}>
                                
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="Female"
                                    name="row-radio-buttons-group"
                                    sx={{width:'100%'}}
                                >
                                    <FormControlLabel value="Female" control={<Radio/>} label="Yes"/>
                                    <FormControlLabel value="Male" control={<Radio/>} sx={{marginLeft:'4% !important'}} label="No"/>
                                </RadioGroup>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box className={classes.subTitle}>
                        Bank details (optional)
                    </Box>
                    <Divider/>
                    <InputLabel >Bank Name</InputLabel>
                    
                    <FormControl fullWidth>
                        <Select id="demo-simple-select" variant="standard" disableUnderline>
                            <MenuItem value={10}>USDT</MenuItem>
                            <MenuItem value={20}>NOK</MenuItem>
                            <MenuItem value={30}>POUND</MenuItem>
                        </Select>
                    </FormControl>

                    <InputLabel >Account Number</InputLabel>
                    <FormControl fullWidth variant="standard">
                        <TextField id="outlined-basic" variant="outlined" />
                    </FormControl>

                    <InputLabel >SWIFT Code</InputLabel>
                    <FormControl fullWidth variant="standard">
                        <TextField id="outlined-basic" variant="outlined" />
                    </FormControl>

                    <InputLabel >Account type</InputLabel>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box className={classes.radio1}>
                                
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    sx={{width:'100%'}}
                                >
                                    <FormControlLabel value="Savings" control={<Radio/>} label="Yes"/>
                                    <FormControlLabel value="Checkings" control={<Radio/>} sx={{marginLeft:'4% !important'}} label="No"/>
                                </RadioGroup>
                            </Box>
                        </Grid>
                    </Grid>

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
                        <Button variant="contained" color="primary" onClick={() => {handleSaveClick()}}>
                            Save and continue
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default SendRecipientForm;