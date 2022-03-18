import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from '../../components/Layouts/Header/Auth';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const Auth = () => {
    return (
        <>
        <Header/>
        <Routes>
            
            <Route path="/signup" element={< SignUp/>} />
            <Route path="/signin" element={< SignIn/>} />
            <Route path="/forgotpassword" element={< ForgotPassword/>} />
            <Route path="/resetpassword" element={< ResetPassword/>} />
        </Routes>
        </>
    );
}

export default Auth;