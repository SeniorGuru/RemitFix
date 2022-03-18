import React from 'react' ;

import {
    Box,
} from '@mui/material' ;

import { Routes, Route } from 'react-router-dom' ;

import VerificationInfo from '../../../../components/Private/Business/Verifications/VerificationInfo';
import VerificationProfile from '../../../../components/Private/Business/Verifications/VerificationProfile';
import VerificationTier from '../../../../components/Private/Business/Verifications/VerificationTier';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
    }
}))

const Verification = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Routes>
                <Route path={'*'} element={<VerificationInfo />} />
                <Route path={'/information/'} element={<VerificationInfo />} />
                 <Route path={'/profile/'} element={<VerificationProfile />} />
                <Route path={'/tier'} element={<VerificationTier />} />
            </Routes>
        </Box>
    )
}

export default Verification ;