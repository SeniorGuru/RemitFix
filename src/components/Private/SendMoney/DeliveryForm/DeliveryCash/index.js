import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AMAL_IMAGE from '../../../../../assets/amal.png';
import BAKAAL_IMAGE from '../../../../../assets/bakaal.png';
import TAAJ_IMAGE from '../../../../../assets/taaj.png';
import TAWAKAL_IMAGE from '../../../../../assets/tawakal.png';

import {
    Box,
    FormControlLabel,
    Radio,
    RadioGroup,
    Checkbox,
    Button,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiFormControlLabel-root" : {
            border : '1px solid lightgrey',
            marginBottom : '10px',
            marginRight : '0px'
        },
        "& .MuiButton-root" : {
            width : '80%',
            height : '42px'
        }
    },
    title : {
        fontSize : '20px',
        marginBottom : '20px'
    },
    label : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center'
    },
    checkBox : {
        display : 'flex',
        alignItems : 'center',
        marginLeft : '-20px'
    },
    btn : {
        display : 'flex',
        justifyContent: 'center',
    }
}))

const DeliveryCash = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/private/sendmoney/review');
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
               Partners
            </Box>

            <Box className={classes.radioGroup}>
                <RadioGroup column>
                    <FormControlLabel
                        control={
                            <Radio/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={AMAL_IMAGE} height={25}/>
                                <Box >Amal Express</Box>
                            </Box>
                        }
                        value="amal"
                    />
                    <FormControlLabel
                        control={
                            <Radio name="partners"/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={BAKAAL_IMAGE} height={25}/>
                                <Box >Bakaal</Box>
                            </Box>
                        }
                        value="bakaal"
                    />   
                    <FormControlLabel
                        control={
                            <Radio name="partners"/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={TAAJ_IMAGE} height={25}/>
                                <Box >Taaj</Box>
                            </Box>
                        }
                        value="taaj"
                    />   
                    <FormControlLabel
                        control={
                            <Radio/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={TAWAKAL_IMAGE} height={25}/>
                                <Box >Tawakal Express</Box>
                            </Box>
                        }
                        value="tawakal"
                    />   
                </RadioGroup>
            </Box>
            
            <Box className={classes.checkBox}>
                <Checkbox/>
                <Box component={"span"}>
                    Mark as favourite for this recipient
                </Box>
            </Box>

            <Box className={classes.btn}>
                <Button variant="contained" color="primary" onClick={() => {handleClick()}}>
                    Continue
                </Button>
            </Box>
        </Box>
    );
}

export default DeliveryCash;