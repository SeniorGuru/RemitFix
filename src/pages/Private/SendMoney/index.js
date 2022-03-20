import React from 'react' ;

import { Routes, Route } from 'react-router-dom' ;
// 
import SendAmount from './SendAmount';
import SendRecipient from './SendRecipient' ;
import Delivery from './Delivery';
import Review from './Review';
import Pay from './Pay';
import Confirmation from './Confirmation';

import {makeStyles} from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const SendMoney = () => {
    const classes =  useStyles() ;

    return (
        <>
            <Routes>
                <Route path="*" element={<SendAmount/>} />
                <Route path="/amount/*" element={<SendAmount />} />
                <Route path="/recipient/*" element={<SendRecipient />} />
                <Route path="/delivery/*" element={<Delivery/>} />
                <Route path="/review/*" element={<Review/>} />
                <Route path="/pay/*" element={<Pay/>} />
                <Route path="/confirmation/*" element={<Confirmation/>} />
                {/* <Route path="/profile/" element={<Profile />} /> */}
            </Routes>
        </>
    )
}

export default SendMoney ;