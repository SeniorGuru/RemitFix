import React from "react";


import FACEBOOK_IMG from '../../../assets/Social/facebook.jpg';
import GOOGLE_IMAGE from '../../../assets/Social/google.png';
import APPLE_IMAGE from '../../../assets/Social/apple.png';
 

import {
    Box,
    Divider,
    Stack,
    Button,
    
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

    root : {
        marginTop : '30px',
        marginBottom : '20px',
        "& .MuiSvgIcon-root" : {
        },
    },
    text : {
        textAlign : 'center',
        marginTop : '20px'
    }
}))

const AuthSocial = () => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Divider/>
            <Box className={classes.text}>
                Or continue using
            </Box>
            <Stack direction="row" spacing={2} sx = {{ mt:2, mb:1  }}>
                <Button fullWidth size="large" color="inherit" variant="outlined">
                    <Box component={'img'} src={FACEBOOK_IMG} />
                </Button>
                <Button fullWidth size="large" color="inherit" variant="outlined">
                    <Box component={'img'} src={GOOGLE_IMAGE} />
                </Button>
                <Button fullWidth size="large" color="inherit" variant="outlined">
                    <Box component={'img'} src={APPLE_IMAGE} />
                </Button>
            </Stack>
        </Box>
    );
}

export default AuthSocial;