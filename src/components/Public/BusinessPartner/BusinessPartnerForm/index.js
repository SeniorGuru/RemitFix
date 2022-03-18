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
            marginTop : '8px',
        },
        "& .MuiInputLabel-root" : {
            marginTop : '22px',
        },
        "& .MuiFormControlLabel-root" : {
            height : '50px',
            width : '48%',
            marginRight : 0,
            marginLeft : 0,
            border : '1px solid grey',
        },
        '& .MuiButton-root' : {
            background : 'red',
            color : 'white',
            width : '260px',
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
        marginBottom : '54px',
    },
    form : {
        marginTop : '29px',
    },
    subTitle : {
        fontSize : '20px',
        color : '#1B262C',
        marginBottom : '9px',
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
}))

const BusinessPartnerForm = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const navigateDigitalAgent = () => {
        navigate('/businesspartnerform');
    }
    return(
        <Box className = {classes.root}>
            <Box className={classes.formContent}>
                <Box className={classes.title}>
                    Become a Business Partner
                </Box>
                <Box>
                    <Box className={classes.subTitle}>
                        Personal information
                    </Box>
                    <Divider/>
                    
                        <InputLabel >Full Name</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Email</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Mobile</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Company Name</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Job Title</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                </Box>
                <Box className={classes.form}>
                    <Box className={classes.subTitle}>
                        Address information
                    </Box>
                    <Divider/>
                    
                        <InputLabel >Country</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <CountrySelect/>
                        </FormControl>
                        <InputLabel >City / Town</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Street Address</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                        <InputLabel >Postal Code</InputLabel>
                        <FormControl fullWidth variant="standard">
                            <TextField id="outlined-basic" variant="outlined" />
                        </FormControl>
                </Box>
                <Box className={classes.form}>
                    <Box className={classes.subTitle}>
                        Business information
                    </Box>
                    <Divider/>
                    <InputLabel >What best describes your business structure?</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            name={"pair"}
                            size={"small"}
                            defaultValue={"Choose one"}
                        >

                            <MenuItem > Expert </MenuItem>
                            <MenuItem > Hard </MenuItem>
                            <MenuItem > Normal </MenuItem>
                            <MenuItem > Beginner </MenuItem>

                        </Select>
                    </FormControl>
                    <InputLabel >What services and products are you interested?</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            name={"pair"}
                            size={"small"}
                            defaultValue={"Choose one"}
                        >

                            <MenuItem > Expert </MenuItem>
                            <MenuItem > Hard </MenuItem>
                            <MenuItem > Normal </MenuItem>
                            <MenuItem > Beginner </MenuItem>

                        </Select>
                    </FormControl>
                    <InputLabel >How money cross-border transaction you process a month?</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            name={"pair"}
                            size={"small"}
                            defaultValue={"Choose one"}
                        >

                            <MenuItem > Expert </MenuItem>
                            <MenuItem > Hard </MenuItem>
                            <MenuItem > Normal </MenuItem>
                            <MenuItem > Beginner </MenuItem>

                        </Select>
                    </FormControl>
                    <InputLabel >What is the total volume of your transfer on monthly basis?</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            name={"pair"}
                            size={"small"}
                            defaultValue={"Choose one"}
                        >

                            <MenuItem > Expert </MenuItem>
                            <MenuItem > Hard </MenuItem>
                            <MenuItem > Normal </MenuItem>
                            <MenuItem > Beginner </MenuItem>

                        </Select>
                    </FormControl>
                    <InputLabel >Are you regulated in your operating country and market?</InputLabel>
                    <Grid container>
                        <Grid item xs={12}>
                            <Box className={classes.radio1}>
                                
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="yes"
                                    name="row-radio-buttons-group"
                                    sx={{width:'100%'}}
                                >
                                    <FormControlLabel value="yes" control={<Radio/>} label="Yes"/>
                                    <FormControlLabel value="no" control={<Radio/>} sx={{marginLeft:'4% !important'}} label="No"/>
                                </RadioGroup>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.form}>
                    <Box className={classes.subTitle}>
                        We will contact you
                    </Box>
                    <Divider/>
                    <Box sx={{mt:'22px'}}>
                        RemitFix will collect and use your personal information as described in its Privacy Policy. Please take a moment to read and understand it. 
                    </Box>
                    <InputLabel >How did you hear about RemitFix?</InputLabel>
                    <FormControl fullWidth>
                        <Select
                            name={"pair"}
                            size={"small"}
                            defaultValue={"Choose one"}
                        >

                            <MenuItem > Expert </MenuItem>
                            <MenuItem > Hard </MenuItem>
                            <MenuItem > Normal </MenuItem>
                            <MenuItem > Beginner </MenuItem>

                        </Select>
                    </FormControl>
                    <InputLabel >Message</InputLabel>
                    <Box component={"input"} type="text" id="name" defaultValue="Hi there..." className={classes.help}/>

                    
                    <Box className = {classes.button}>
                        <Button>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default BusinessPartnerForm;