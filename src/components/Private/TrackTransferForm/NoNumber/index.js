import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    Box,
    FormControl,
    Grid,
    TextField,
    Button,
    InputLabel,
    Divider,
    MenuItem
} from '@mui/material';

import { makeStyles } from "@mui/styles";
import CountrySelect from "../../../Common/CountrySelect";
import CurrencySelect from "../../../Common/CurrencySelect";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '800px ',
        "& a" : {
            marginTop : '20px',
            color : theme.palette.common.green,
        },
        "& .MuiButton-root" : {
            width : '60%'
        }
    },
    title : {
        textAlign : 'center',
        fontSize : '30px',
        fontWeight : 'bold',
        paddingTop : '30px',
        paddingBottom : '30px',
    },
    content : {
        width : '100%',
        display:'flex',
        flexDirection : 'column !important',
        alignItems : 'center',
    },
    center : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '100%',
        marginTop : '30px',
    }
}))

const NoNumber = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [month, setMonth] = useState("Jan");

    const months = [
        {
            label : 'Jan',
            value : 'Jan',
        },
        {
            label : 'Feb',
            value : 'Feb',
        },
        {
            label : 'Mar',
            value : 'Mar',
        },
        {
            label : 'Apr',
            value : 'Apr',
        },
        {
            label : 'May',
            value : 'May',
        },
        {
            label : 'Jun',
            value : 'Jun',
        },
        {
            label : 'Jul',
            value : 'Jul',
        },
        {
            label : 'Aug',
            value : 'Aug',
        },
        {
            label : 'Sep',
            value : 'Sep',
        },
        {
            label : 'Oct',
            value : 'Oct',
        },
        {
            label : 'Nov',
            value : 'Nov',
        },
        {
            label : 'Dec',
            value : 'Dec',
        },
    ];

    const handleClick = () => {
        navigate('/private/TrackTransfer/results');
    }
    
    const handelChange = (e) => {
        setMonth(e.target.value);
    }
    return(
        <Box className = {classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={6} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box className={classes.title}>
                                Track a transfer
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <InputLabel >Recipient name</InputLabel>
                                <FormControl fullWidth variant="standard">
                                    <TextField id="outlined-basic" variant="outlined" />
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <InputLabel >Recipient country</InputLabel>
                                <CountrySelect/>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <InputLabel >Amount sent</InputLabel>
                                <CurrencySelect/>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{border:'1px solid lightgrey', mt:5,mb:5}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Box className={classes.smallText}>
                            For better results, you might specify the date of the transfer
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <InputLabel >Month</InputLabel>
                            <FormControl fullWidth>
                                <TextField 
                                    select
                                    value={month}
                                    onChange={(e) => handelChange(e)}
                                    SelectProps={{
                                      native: true,
                                    }}
                                >
                                    {months.map((month, index) => (
                                        <option key={index} value={month.value}>
                                            {month.label}
                                        </option>
                                    ))}
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel >Day</InputLabel>
                            <FormControl fullWidth variant="standard">
                                <TextField id="outlined-basic" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <InputLabel >Year</InputLabel>
                            <FormControl fullWidth variant="standard">
                                <TextField id="outlined-basic" variant="outlined" />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box className={classes.center}>
                        <Button variant="contained" color="primary" onClick={() => handleClick()}>
                            Continue
                        </Button>

                        <Link to='/private/tracktransfer'>
                            I have a tracking number
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Box>
    );
}

export default NoNumber;