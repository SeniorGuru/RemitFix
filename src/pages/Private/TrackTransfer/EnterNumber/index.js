import React from 'react' ;

import EnterNumberForm from '../../../../components/Private/TrackTransferForm/EnterNumber';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const EnterNumber = () => {
    const classes = useStyles() ;

    return (
        <Box>
            <EnterNumberForm/>
        </Box>
    )
}

export default EnterNumber;