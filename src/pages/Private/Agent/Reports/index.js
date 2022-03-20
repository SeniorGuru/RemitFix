import React from 'react' ;

import { Routes , Route } from 'react-router-dom' ;

import LeftSideBar from '../../../../components/Common/LeftSideBar/Agent';
import MenuBar from '../../../../components/Common/MenuBar';
import ReportsEarn from '../../../../components/Private/Agent/Reports/ReportsEarn';
import ReportsCustomers from '../../../../components/Private/Agent/Reports/ReportsCustomers';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        display : 'flex' ,
        background : '#F3F5F7',
        height : '100vh'
    }
})) ;

const Reports = () => {
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
                            <Route path="*" element={<ReportsEarn />} />
                            <Route path="/earn" element={<ReportsEarn />} />
                            <Route path="/customers" element={<ReportsCustomers />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Reports ;