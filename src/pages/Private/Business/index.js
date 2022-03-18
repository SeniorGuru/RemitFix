import React from 'react' ;

import { Routes, Route } from 'react-router-dom' ;

import Transfers from './Transfers';
import Recipients from './Recipients';
import Profile from './Profile' ;
import Settings from './Settings';
import Invite from './Invite';
import Verification from './Verification';
import Users from './Users';
import AddUser from '../../../components/Private/Business/Users/AddUser' ;

import {
    Box
} from '@mui/material' ;

import {makeStyles} from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const Business = () => {
    const classes =  useStyles() ;

    return (
        <>
            <Routes>
                <Route path="*" element={<Transfers />} />
                <Route path="/transfers/*" element={<Transfers />} />
                <Route path="/recipients/*" element={<Recipients />} />
                <Route path="/invite" element={<Invite />} />
                <Route path="/profile/" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/verification/*" element={<Verification />} />
                <Route path="/users" element={<Users />} />
                <Route path={"/users/addUser"} element={<AddUser />} />
            </Routes>
        </>
    )
}

export default Business ;