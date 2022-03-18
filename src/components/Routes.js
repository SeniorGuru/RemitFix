import React, { memo } from "react";
// import PropTypes from "prop-types";

import { Routes , Route } from "react-router-dom";

import ProtectedRoute from "../utils/ProtectedRoute";

// Pages
import Landing from "../pages/Landing" ;

// Public Page
import Public from '../pages/Public';

// Auth Page
import Auth from '../pages/Auth';

// Private Page
import Private from '../pages/Private' ;


import NotFound from '../components/Common/NotFound' ;    

const Routing = () => {
    return (<>
        <Routes>

            <Route path="/" element={< Landing/>} />
            {/* Public Page */}
            <Route path="/public/*" element={<Public />} />

            {/* Auth Page */}
            <Route path="/auth/*" element={<Auth />} />

            {/* Business Page */}
            
            <Route path="/private/*" element={<Private />} />
            
            <Route element={<ProtectedRoute />}>
            </Route>
            <Route path='/*' element={<NotFound />} />
        </Routes>
        </>
    );
}

Routing.propTypes = {
    // selectLanding: PropTypes.func.isRequired,
};

export default memo(Routing);
