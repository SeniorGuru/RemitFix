import React from 'react' ;

import { Routes, Route } from 'react-router-dom' ;

import Transfers from './Transfers';
import Customers from './Customers';
import Reports from './Reports';
import AgentInvite from './Invite';
import AgentVerification from './Verification';

import {makeStyles} from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const Agent = () => {
    const classes =  useStyles() ;

    return (
        <>
            <Routes>
                <Route path="*" element={<Transfers />} />
                <Route path="/transfers/*" element={<Transfers />} />
                <Route path="/customers/*" element={<Customers />} />
                <Route path="/reports/*" element={<Reports />} />
                <Route path="/invite/*" element={<AgentInvite />} />
                <Route path="/verification/*" element={<AgentVerification />} />
            </Routes>
        </>
    )
}

export default Agent ;