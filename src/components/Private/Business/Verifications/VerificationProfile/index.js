import React from 'react' ;
import ReactFlagsSelect from 'react-flags-select';

import { useNavigate } from 'react-router-dom';

import CountrySelect from '../../../../../components/Common/CountrySelect' ;

import {
    Box,
    Alert,
    TextField, 
    Grid,
    FormGroup,
    Radio,
    FormControlLabel,
    Button
} from '@mui/material' ;


import { makeStyles }  from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        height : 1500,

        "& .MuiFormGroup-root" : {
            border : '1px solid lightgray',
            borderRadius : 5,
            paddingLeft : 15
        }
    },
    gradient : {
        background : 'linear-gradient(to right, #5F42F0 3%, #8F5FDD 90%)',

        height : 300,

        position : 'relative',

        padding : 30
    },
    logo : {
        paddingLeft : '15%'
    },
    description : {
        paddingLeft : '30%',
        paddingRight : '30%',

        color : 'white',

        fontSize : 30,
        fontWeight : 600,

        textAlign : 'center'
    },
    label : {
        paddingLeft : '35%',
        paddingRight : '35%',

        textAlign : 'center',
        color : 'white'
    },
    infoForm : {
        position : 'absolute',

        background : 'white',
        padding : 40,

        width : '50%',

        marginLeft : '25%',

        top : "80%",

        border : '1px solid lightgray'
    },
    alert : {
        border : '1px solid ' + theme.palette.common.purple ,
        background : "#F1EFFD !important",
        color : theme.palette.common.purple,
        "& .MuiSvgIcon-root" : {
            color : "#F1EFFD"
        }
    },
    information : {
        marginTop : 15,
        marginBottom : 15,
        borderBottom : '1px solid lightgray',
        fontSize : 20,
        fontWeight : 600,
        color : 'gray'
    },
    gray : {
        fontWeight : 600,
        color : 'gray'
    },
    control : {
        marginTop : 15,
        marginBottom : 15,
    },
    footer : {
        padding : 30,
        color : 'gray'
    }
})) ;

const VerificationProfile = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    return (
        <Box className={classes.root}>
            <Box className={classes.gradient}>
                <Box className={classes.label}>
                    Attention needed
                </Box>
                <Box className={classes.description}>
                    Complete your business profile
                </Box>
                <Box className={classes.label}>
                    We won't be able to process your transfer until you complete your profile and your ID verified.
                </Box>
                <Box className={classes.infoForm}>
                    <Alert className={classes.alert}>
                        You are able to transfer 3,000 NOK monthly by completing your profile.
                    </Alert>
                    <Box className={classes.information}>
                        Business Information
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Company name
                        </Box>
                        <TextField
                            fullWidth
                            size={'small'}
                        />
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Registration number
                        </Box>
                        <TextField
                            fullWidth
                            size={'small'}
                        />
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Company type
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Radio />
                                        }
                                        label={
                                            <Box component={'span'}>Sole proprietorship</Box>
                                        }
                                    />
                                </FormGroup>
                            </Grid> 
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Radio />
                                        }
                                        label={
                                            <Box component={'span'}>Partnership</Box>
                                        }
                                    />
                                </FormGroup>
                            </Grid> 
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Radio />
                                        }
                                        label={
                                            <Box component={'span'}>Limited Company</Box>
                                        }
                                    />
                                </FormGroup>
                            </Grid> 
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Radio />
                                        }
                                        label={
                                            <Box component={'span'}>None-profit</Box>
                                        }
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Radio />
                                        }
                                        label={
                                            <Box component={'span'}>Trust</Box>
                                        }
                                    />
                                </FormGroup>
                            </Grid> 
                            <Grid item xs={6}>
                                <FormGroup row>
                                    <FormControlLabel
                                        control={
                                            <Radio />
                                        }
                                        label={
                                            <Box component={'span'}>Other</Box>
                                        }
                                    />
                                </FormGroup>
                            </Grid>   
                        </Grid>
                    </Box>

                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Brief description of your company
                        </Box>
                        <TextField
                            fullWidth
                            multiline
                            size={'small'}
                            rows={4}
                        />
                    </Box>

                    <Box className={classes.information} >
                        Business address
                    </Box>

                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Street address
                        </Box>
                        <TextField
                            fullWidth
                            size={'small'}
                        />
                    </Box>

                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            City/Town
                        </Box>
                        <TextField
                            fullWidth
                            size={'small'}
                        />
                    </Box>

                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Postal Code
                        </Box>
                        <TextField
                            fullWidth
                            size={'small'}
                        />
                    </Box>

                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Country of registration
                        </Box>
                        <CountrySelect />
                    </Box>

                    <Box sx={{textAlign : 'center'}}>
                        <Button variant={'contained'}>
                            Save and submit
                        </Button>
                    </Box>

                    <Box className={classes.footer}>
                        By confirming, you affirm that the information you provided above is completely accurate and you are authorize representative of the business who have authorization to send money or get paid on be half of the business 
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default VerificationProfile ;