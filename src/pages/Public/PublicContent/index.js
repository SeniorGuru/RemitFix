

import React from 'react' ;

import {Routes, Route} from 'react-router-dom';

import Header from '../../../components/Layouts/Header/Public/Content';
import HowItWorks from './HowItWork';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import DigitalAgent from './DigitalAgent';
import BusinessPartner from './BusinessPartner';
import Affiliate from './Affiliate';
import Terms from './Terms';
import Faq from './Faq';
import Careers from './Careers';
import Footer from '../../../components/Layouts/Footer';

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const PublicContent = () => {
    const classes = useStyles() ;

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/*" element={<HowItWorks/>} />
                <Route path="/howwork" element={< HowItWorks/>} />
                <Route path="/aboutus" element={< Aboutus/>} />
                <Route path="/contact" element={< Contactus/>} />
                <Route path="/digitalagent" element={< DigitalAgent/>} />
                <Route path="/businesspartner" element={< BusinessPartner/>} />
                <Route path="/affiliate" element={< Affiliate/>} />
                <Route path="/terms" element={< Terms/>} />
                <Route path="/faq" element={< Faq/>} />
                <Route path="/careers" element={< Careers/>} />
                
            </Routes>
            <Footer/>
        </>
    )
}

export default PublicContent;
            