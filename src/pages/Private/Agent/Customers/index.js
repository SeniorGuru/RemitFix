import React from 'react' ;

import { Routes , Route } from 'react-router-dom' ;

import LeftSideBar from '../../../../components/Common/LeftSideBar/Agent';
import MenuBar from '../../../../components/Common/MenuBar';
import CustomersList from '../../../../components/Private/Agent/Customers/CustomersList';
import CustomersDetails from '../../../../components/Private/Agent/Customers/CustomersDetails';
import AddCustomer from '../../../../components/Private/Agent/Customers/AddAgentCustomer';

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

const Customers = () => {
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
                            <Route path="*" element={<CustomersList />} />
                            <Route path="/list" element={<CustomersList />} />
                            <Route path="/details" element={<CustomersDetails />} />
                            <Route path="/add" element={<AddCustomer />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Customers ;