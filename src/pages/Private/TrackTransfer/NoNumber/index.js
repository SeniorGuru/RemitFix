import React from 'react' ;

import NoNumberForm from '../../../../components/Private/TrackTransferForm/NoNumber';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const NoNumber = () => {
    const classes = useStyles() ;

    return (
        <Box>
            <NoNumberForm/>
        </Box>
    )
}

export default NoNumber;