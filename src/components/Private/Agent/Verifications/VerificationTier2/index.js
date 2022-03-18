import React from 'react' ;

import ReactFlagsSelect from 'react-flags-select';

import CountrySelect from '../../../../../components/Common/CountrySelect' ;

import {
    Box,
    Alert,
    TextField, 
    Grid,
    Button,
    InputLabel,
    Input
} from '@mui/material' ;


import { makeStyles }  from '@mui/styles' ;

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const useStyles = makeStyles((theme) => ({
    root : {
        height : 1500,
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
    },
    upload : {
        border : "1px solid " + theme.palette.common.purple,
        borderRadius : 5,
        background : "#F1EFFD",
        padding : 10,
        marginTop : 10,

        "& .MuiBox-root" : {
            textAlign : 'center',
            color : theme.palette.common.purple,
            marginTop : 20,
            marginBottom : 20
        }
    }
})) ;

const VerificationTier2 = () => {
    const classes = useStyles() ;

    const UploadPanel = (props) => {

        const {
            description 
        } = props ;

        return (
            <Box className={classes.upload}>
                <Box>
                    <CloudUploadIcon />
                </Box>
                <Box sx={{fontSize : 18, fontWeight : 600}}>
                    {description}
                </Box>
                <Box sx={{color : 'black !important', fontSize : 15}}>
                    Drag or click here to upload your document
                </Box>
            </Box>
        )
    }
    return (
        <Box className={classes.root}>
            <Box className={classes.gradient}>
                <Box className={classes.label}>
                    Verification level
                </Box>
                <Box className={classes.description}>
                    Tier 2
                </Box>
                <Box className={classes.label}>
                    As a licensed payment institution, wenneet to comply with regulatory obligations and that's why we might ask for additional information to keep your money and data safe.
                </Box>
                <Box className={classes.infoForm}>
                    <Alert className={classes.alert}>
                        You are able to transfer 3,000 NOK monthly by completing your profile.
                    </Alert>

                    <Box className={classes.information}>
                        Proof of identify
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Youer registration letter.
                        </Box>
                        <InputLabel htmlFor="upload-registration"  >
                            {
                                // paper.preview ? (
                                //     <Box className={classes.pdfPreview}>
                                //         {paper.preview}
                                //     </Box>
                                // ) : (
                                    <UploadPanel 
                                        description="Upload registration letter"
                                    />
                                // )
                            }
                        </InputLabel>
                        <Input
                            type="file"
                            id="upload-registration"
                            name='register'
                            style={{ display: "none" }}
                            // onChange={handleChangePaper}
                        />
                    </Box>

                    <Box className={classes.information}>
                        Proof of funds
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Upload your last bank statement as proof of funds.
                        </Box>
                        <InputLabel htmlFor="upload-bank"  >
                            {
                                // paper.preview ? (
                                //     <Box className={classes.pdfPreview}>
                                //         {paper.preview}
                                //     </Box>
                                // ) : (
                                    <UploadPanel 
                                        description='Upload bank statement'
                                    />
                                // )
                            }
                        </InputLabel>
                        <Input
                            type="file"
                            id="upload-bank"
                            name='bank'
                            style={{ display: "none" }}
                            // onChange={handleChangePaper}
                        />
                    </Box>

                    <Box className={classes.information}>
                        Proof of address
                    </Box>
                    <Box className={classes.control}>
                        <Box className={classes.gray}>
                            Please upload an utility bill to verify our address
                        </Box>
                        <InputLabel htmlFor="upload-utility"  >
                            {
                                // paper.preview ? (
                                //     <Box className={classes.pdfPreview}>
                                //         {paper.preview}
                                //     </Box>
                                // ) : (
                                    <UploadPanel 
                                        description='Upload utility bill'
                                    />
                                // )
                            }
                        </InputLabel>
                        <Input
                            type="file"
                            id="upload-utility"
                            name='util'
                            style={{ display: "none" }}
                            // onChange={handleChangePaper}
                        />
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

export default VerificationTier2 ;