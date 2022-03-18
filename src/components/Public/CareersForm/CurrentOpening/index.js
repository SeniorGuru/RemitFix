import React from "react";

import {
    Box,
    Grid,
    Button,
    Divider
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        marginTop : '100px'
    },
    content : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    },
    title : {
        fontSize : '30px',
        fontWeight : '1000',
        marginBottom : '100px',
        width : '904px',
    },
    form : {
        width : '904px',
        height : '436px',
    },
    button : {
        width : '168px',
        textAlign : 'center'
    },
    btn : {
        background : '#1B3764 !important',
        borderRadius : '22px !important',
        width : '168px',
    },
    subTitle : {
        marginBottom : '25px',
        display : 'flex',
        justifyContent : 'space-between',
    },
    t1 : {
        fontSize : '20px',
        fontWeight : 'bold',
    },
    t2 : {
        color : '#818181'
    },
    link : {
        color : '#C72127',
        fontWeight : 'bold',
        marginTop : '25px',
        marginBottom : '25px',
    }
}))

const CurrentOpening = () => {

    const classes = useStyles();

    return(
        <Box className = {classes.root}>
            <Box className={classes.content}>
                <Box className={classes.title}>
                    Current Opening
                </Box>
                <Box className={classes.form}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box className={classes.button}>
                                All
                            </Box>
                            <Button variant="contained" className={classes.btn}>
                                Executives
                            </Button>
                        </Grid>
                        <Grid item xs={9}>
                            <Box className={classes.subTitle}>
                                <Box className={classes.t1}>
                                    Chief Financial Officer
                                </Box>
                                <Box className={classes.t2}>
                                    Oslo/Dublin/Remote
                                </Box>
                            </Box>
                            Reporting to and working closely with the CEO; Chief Financial Officer will be responsible for building and leading of every aspect of the company’s financial function  including   financing operations, mitigating risks and maintaining relationship with investors.
                            <Box className={classes.link}>
                                Learn more
                                <ArrowForwardIcon sx={{width:12,height:12,ml:2}}/>
                            </Box>
                            <Divider sx={{marginBottom:'30px'}}/>
                            <Box className={classes.subTitle}>
                                <Box className={classes.t1}>
                                    Chief Technical Officer
                                </Box>
                                <Box className={classes.t2}>
                                    Oslo/Dublin/Remote
                                </Box>
                            </Box>
                            Reporting to and working closely with the CEO; The CTO will be responsible for building   and leading of every aspect of the company’s technical function including product’s development, architecture decisions as well as implementation of the company’s mission.
                            <Box className={classes.link}>
                                Learn more
                                <ArrowForwardIcon sx={{width:12,height:12,ml:2}}/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
}

export default CurrentOpening;