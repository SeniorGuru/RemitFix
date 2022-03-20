import React from 'react' ;

import { useNavigate } from 'react-router-dom';

import LeftSideBar from '../../../../Common/LeftSideBar/Customer';
import MenuBar from '../../../../Common/MenuBar';

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        height : '100vh',
        background : '#F3F5F7',
    },
    tag : {
        fontSize : 20 ,
        fontWeight : 600,
        marginBottom : 30,

        display : 'flex',
        justifyContent : 'space-between'
    },
    detail : {
        border : '1px solid lightgray'
    },
    detailHead : {
        width : '100%',

        fontSize : 25,
        fontWeight : 600,

        padding : 20,

        borderBottom : '1px solid lightgray'
    },
    countryName : {
        color : 'gray',
        fontSize : 17
    },
    description : {
        padding : 20
    },
    activity : {
        border : '1px solid lightgray'
    },
    activityHead : {
        fontSize : 25,
        fontWeight : 600,
        padding : 20,

        borderBottom : '1px solid lightgray'
    },
    activityContent : {
        padding : 20,

        borderBottom : '1px solid lightgray',

        "& .MuiGrid-item:nth-child(even)" : {
            textAlign : 'right'
        }
    },
    activityFoot : {
        padding : 20,

        "& .MuiGrid-item:nth-child(even)" : {
            textAlign : 'right'
        }
    },
    black : {
        fontSize : 17,
        fontWeight : 600
    },
    gray : {
        fontSize : 12,
        color : 'gray'
    }
})) ;

const RecipientDetails = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/private/sendmoney');
    }
    return  (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box>

                <MenuBar />

                <Grid container sx={{width : '100%',padding:'20px'}} >

                    <Grid item xs={12}>
                        <Box className={classes.tag}>
                            <Box>
                                All Recipients
                            </Box>
                            <Box>
                                <Button color={'primary'}>Edit</Button>
                                <Button color={'primary'} variant={'contained'} onClick={() => handleClick()}>
                                    Send Money
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box className={classes.detail}>
                            <Box className={classes.detailHead}>
                                Diego Valencia Palacios 
                                <br/>
                                <Box className={classes.countryName}>
                                    Somalia
                                </Box>
                            </Box>
                            <Box className={classes.description}>
                                <Grid container spacing={4}>
                                    <Grid item xs={6}>
                                        <Box className={classes.black}>
                                            Country
                                        </Box>
                                        <Box className={classes.gray}>
                                            Somalia
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box className={classes.black}>
                                            City
                                        </Box>
                                        <Box className={classes.gray}>
                                            Mogadiscio
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box className={classes.black}>
                                            Street address
                                        </Box>
                                        <Box className={classes.gray}>
                                            Calle 152A.#14A-367 ap 605
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box className={classes.black}>
                                            Postsal code
                                        </Box>
                                        <Box className={classes.gray}>
                                            110131
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box className={classes.activity}>
                            <Box className={classes.activityHead}>
                                Activity
                            </Box>
                            <Box className={classes.activityContent}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        Transaction made
                                    </Grid>
                                    <Grid item xs={6}>
                                        22
                                    </Grid>
                                    <Grid item xs={6}>
                                        Amount send
                                    </Grid>
                                    <Grid item xs={6}>
                                        12,000 NOK
                                    </Grid>
                                    <Grid item xs={6}>
                                        Last transfer
                                    </Grid>
                                    <Grid item xs={6}>
                                        12 Jul, 2020 - 3 : 00 PM
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className={classes.activityFoot}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        Service type
                                    </Grid>
                                    <Grid item xs={6}>
                                        Cash pickup
                                    </Grid>
                                    <Grid item xs={6}>
                                        Partner
                                    </Grid>
                                    <Grid item xs={6}>
                                        Amal Express
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Button color={'error'}>
                            Remove recipient
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default RecipientDetails ;