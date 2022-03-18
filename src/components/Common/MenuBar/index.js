import React from 'react' ;

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        height : 66,
        background : 'white',
    }
})) ;

const MenuBar = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>

        </Box>
    )
}

export default MenuBar ;