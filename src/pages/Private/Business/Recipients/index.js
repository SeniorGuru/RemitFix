import React from 'react' ;

import { Routes , Route } from 'react-router-dom' ;

import LeftSideBar from '../../../../components/Common/LeftSideBar/Business';
import MenuBar from '../../../../components/Common/MenuBar';
import RecipientsList from '../../../../components/Private/Business/Recipients/RecipientsList';
import RecipientDetails from '../../../../components/Private/Business/Recipients/RecipientsDetails';
import AddBusinessRecipient from '../../../../components/Private/Business/Recipients/AddBusinessRecipient';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        display : 'flex' ,
    }
})) ;

const Recipients = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box sx={{width : '100%'}}>
                <Grid container>
                    <Grid item xs={12} >
                        <MenuBar />
                    </Grid>
                    <Grid item xs={12} >
                        <Routes>
                            <Route path="*" element={<RecipientsList />} />
                            <Route path="/list" element={<RecipientsList />} />
                            <Route path="/details" element={<RecipientDetails />} />
                            <Route path="/add" element={<AddBusinessRecipient />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Recipients ;