
import React from 'react' ;

import {Routes, Route} from 'react-router-dom';

import Header from '../../../components/Layouts/Header/Public/Form';
import DigitalAgentForm from '../../../components/Public/DigitalAgent/DigitalAgentForm';
import BusinessPartnerForm from '../../../components/Public/BusinessPartner/BusinessPartnerForm';

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const PublicForm = () => {
    const classes = useStyles() ;

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<DigitalAgentForm/>} />
                <Route path="/digitalagentform" element={< DigitalAgentForm/>} />
                <Route path="/businesspartnerform" element={< BusinessPartnerForm/>} />
                
            </Routes>
        </>
    )
}

export default PublicForm;
            