
import React from 'react' ;

import {Routes, Route} from 'react-router-dom';

import PublicContent from './PublicContent';
import PublicForm from './PublicForm';

import { makeStyles } from '@mui/styles'; 

const useStyles = makeStyles(() => ({
    root : {

    }
}))

const Public = () => {
    const classes = useStyles() ;

    return (
        <>
            <Routes>
                <Route path="/*" element={<PublicContent/>} />
                <Route path="/content/*" element={<PublicContent/>} />
                <Route path="/form/*" element={<PublicForm/>} />
                
            </Routes>
        </>
    )
}

export default Public;
            