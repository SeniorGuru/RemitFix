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
        paddingLeft : '20%',
        paddingRight : '20%',

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

const VerificationUSDTier1 = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/private/customer/verification/noktier1');
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.gradient}>
                <Box className={classes.label}>
                    Verification level
                </Box>
                <Box className={classes.description}>
                    Tier 1
                </Box>
                <Box className={classes.label}>
                    As a licensed payment institution, we need to comply with regulatory obligations and that’s why we might ask for additional information to keep your money and data safe.
                </Box>
                <Box className={classes.infoForm}>
                    <Alert className={classes.alert}>
                        You are able to transfer 3,000 USD monthly by completing your profile.
                    </Alert>
                    <Box className={classes.information}>
                        Business Information
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Business name
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
                            Phone number
                        </Box>
                        <TextField
                            fullWidth
                            size={'small'}
                        />
                    </Box>
                    

                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Business address
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
                        <Button variant={'contained'} onClick={() => handleClick()}>
                            Save and submit
                        </Button>
                    </Box>

                    <Box className={classes.footer}>
                        As a licensed payment institution, we need to comply with regulatory obligations, and that is why we might ask for additional information to keep your money and data safe. Make sure the information in your documents matches with that of RemitFix account.
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default VerificationUSDTier1 ;