import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import IBS_IMAGE from '../../../../../assets/ibs.png';
import PREMIER_IMAGE from '../../../../../assets/premier.png';
import SALAAM_IMAGE from '../../../../../assets/salaam.png';
import SOMBANK_IMAGE from '../../../../../assets/sombank.png';

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
    button : {
        display : 'flex',
        justifyContent : 'center'
    }
}))

const DeliveryBank = (props) => {

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
                                <Box component={'img'} src={IBS_IMAGE} height={25}/>
                                <Box >IBS Bank</Box>
                            </Box>
                        }
                        value="ibs"
                    />
                    <FormControlLabel
                        control={
                            <Radio name="partners"/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={PREMIER_IMAGE} height={25}/>
                                <Box >Premier Bank</Box>
                            </Box>
                        }
                        value="premier"
                    />   
                    <FormControlLabel
                        control={
                            <Radio name="partners"/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={SALAAM_IMAGE} height={25}/>
                                <Box >Salaam Somali Bank</Box>
                            </Box>
                        }
                        value="salaam"
                    />   
                    <FormControlLabel
                        control={
                            <Radio/>
                        }
                        label={
                            <Box className={classes.label}>
                                <Box component={'img'} src={SOMBANK_IMAGE} height={25}/>
                                <Box >SomBank</Box>
                            </Box>
                        }
                        value="sombank"
                    />   
                </RadioGroup>
            </Box>
            
            <Box className={classes.checkBox}>
                <Checkbox/>
                <Box component={"span"}>
                    Mark as favourite for this recipient
                </Box>
            </Box>

            <Box className={classes.button}>
                <Button variant="contained" color="primary" onClick={() => {handleClick()}}>
                    Continue
                </Button>
            </Box>
        </Box>
    );
}

export default DeliveryBank;