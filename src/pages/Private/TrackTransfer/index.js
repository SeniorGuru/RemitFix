import React from 'react' ;

import { Routes, Route } from 'react-router-dom' ;
// 
import Header from '../../../components/Layouts/Header/Auth';
import EnterNumber from './EnterNumber';
import NoNumber from './NoNumber';
import Results from './Results';

import {makeStyles} from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const SendMoney = () => {
    const classes =  useStyles() ;

    return (
        <>
            <Header/>
            <Routes>
                <Route path="*" element={<EnterNumber/>} />
                <Route path="/enternumber/*" element={<EnterNumber />} />
                <Route path="/nonumber/*" element={<NoNumber />} />
                <Route path="/results/*" element={<Results />} />
            </Routes>
        </>
    )
}

export default SendMoney ;