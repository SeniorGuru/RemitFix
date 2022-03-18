import React from 'react' ;

import {Routes, Route} from 'react-router-dom';

import Business from './Business' ;
import SendMoney from './SendMoney';
import TrackTransfer from './TrackTransfer';
import Agent from './Agent';
import Customer from './Customer';

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const Private = () => {
    const classes = useStyles() ;

    return (
        <>
            <Routes>
                <Route path="*" element={<Business />} />
                <Route path="/business/*" element={<Business />} />
                <Route path="/agent/*" element={<Agent />} />
                <Route path="/sendmoney/*" element={<SendMoney />} />
                <Route path="/tracktransfer/*" element={<TrackTransfer />} />
                <Route path="/customer/*" element={<Customer />} />
            </Routes>
        </>
    )
}

export default Private;