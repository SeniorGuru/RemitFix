import React from 'react' ;

import {
    Box,
} from '@mui/material' ;

import { Routes, Route } from 'react-router-dom' ;

import VerificationInfo from '../../../../components/Private/Customer/Verifications/VerificationInfo';
import VerificationUSDTier1 from '../../../../components/Private/Customer/Verifications/VerificationUSDTier1';
import VerificationNOKTier1 from '../../../../components/Private/Customer/Verifications/VerificationNOKTier1';
import VerificationTier2 from '../../../../components/Private/Customer/Verifications/VerificationTier2';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
    }
}))

const AgentVerification = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Routes>
                <Route path={'*'} element={<VerificationInfo />} />
                <Route path={'/information/'} element={<VerificationInfo />} />
                <Route path={'/usdtier1/'} element={<VerificationUSDTier1 />} />
                <Route path={'/noktier1'} element={<VerificationNOKTier1 />} />
                <Route path={'/tier2'} element={<VerificationTier2 />} />
            </Routes>
        </Box>
    )
}

export default AgentVerification ;