

import React, { useEffect , useRef, useState  } from 'react' ;

import Routing from './Routes';

import AOS from 'aos/dist/aos';
import 'aos/dist/aos.css' ;

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

AOS.init({once : true}) ;

const useStyles = makeStyles((theme) => ({
    root : {
        height: '100vh',
        overflowX: 'auto', 
        overflowY: 'scroll',
    }
}))

const Main = () => {
    const classes = useStyles() ;

    const scrollTop = useRef({                
        current : {
            innerText : "efefef"
        }
    }) ;

    
    return (
        <Box className={classes.root} ref={scrollTop}>
            <Routing />
        </Box>
    )
}
export default Main ;