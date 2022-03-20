import React from 'react' ;

import { Routes , Route } from 'react-router-dom' ;

import LeftSideBar from '../../../../components/Common/LeftSideBar/Customer';
import MenuBar from '../../../../components/Common/MenuBar';

import OutGoing from '../../../../components/Private/Customer/Transfers/OutGoing';
import InComing from '../../../../components/Private/Customer/Transfers/InComing';
import DetailsOutgoing from '../../../../components/Private/Customer/Transfers/DetailsOutgoing';
import DetailsIncoming from '../../../../components/Private/Customer/Transfers/DetailsIncoming';

import {
    Box,
    Grid
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root : {
        display : 'flex' ,
        height : '100vh',
    }
})) ;

const Transfers = () => {
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
                            <Route path="*" element={<OutGoing />} />
                            <Route path="/outgoing" element={<OutGoing />} />
                            <Route path="/incoming" element={<InComing />} />
                            <Route path="/detailsOutgoing" element={<DetailsOutgoing />} />
                            <Route path="/detailsIncoming" element={<DetailsIncoming />} />
                        </Routes>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Transfers ;