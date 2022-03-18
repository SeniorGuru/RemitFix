
import React, { useRef, useEffect } from 'react' ;

import { connect } from 'react-redux';

import Header from '../../components/Layouts/Header/Public/Content';
import Home from '../../components/Landing/Home';
import PayList from '../../components/Landing/PayList'; 
import ExchangeRate from '../../components/Landing/ExchangeRate';
import ChooseCards from '../../components/Landing/ChooseCards';
import KeepChoosing from '../../components/Landing/KeepChoosing';
import GetStarted from '../../components/Common/GetStarted';

import {
    Box,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import Footer from '../../components/Layouts/Footer';

const useStyles = makeStyles((theme) => ({
    root : {
    }
}));



const Landing = (props) => {

    const classes = useStyles();

    const scrollTop = useRef({                
        current : {
            innerText : "efefef"
        }
    }) ;

    return (
        <Box className={classes.root}>
            <Header scrollTop={scrollTop}/>
            <Home/>
            <PayList/>
            <ExchangeRate/>
            <ChooseCards/>
            <KeepChoosing/>
            <GetStarted
                title = {"Send money the smart way"}
                btnText = {"Get started"}
                text = {"Or see"}
                linkText = {"how it works"}
            />
            <Footer/>
        </Box>
    )
}

const mapStateToProps = state => ({
}) ;

const mapDispatchToProps = {
}

export default connect(mapStateToProps , mapDispatchToProps)(Landing) ;