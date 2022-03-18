import React from 'react' ;

import { Routes , Route } from 'react-router-dom' ;

import LeftSideBar from '../../../../components/Common/LeftSideBar/Business';
import MenuBar from '../../../../components/Common/MenuBar';

import OutGoing from '../../../../components/Private/Business/Transfers/OutGoing';
import InComing from '../../../../components/Private/Business/Transfers/InComing';
import DetailsOutgoing from '../../../../components/Private/Business/Transfers/DetailsOutgoing';
import DetailsIncoming from '../../../../components/Private/Business/Transfers/DetailsIncoming';

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