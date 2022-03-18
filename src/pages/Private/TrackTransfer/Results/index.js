import React from 'react' ;

import ResultsForm from '../../../../components/Private/TrackTransferForm/Results';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const Results = () => {
    const classes = useStyles() ;

    return (
        <Box>
            <ResultsForm/>
        </Box>
    )
}

export default Results;