import React from 'react' ;

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import LeftSideBar from '../../../../Common/LeftSideBar/Agent';
import MenuBar from '../../../../Common/MenuBar';


import ReactApexChart from 'react-apexcharts';

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import {
    makeStyles
} from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex'
    } ,
    verify : {
        fontSize : 25,
        fontWeight : 600,

        paddingTop : 20,
        paddingLeft : 20,
        paddingRight : 20,

        display : 'flex',
        justifyContent : 'space-between'
    },
    infoCard : {
        marginTop : 20,
        marginBottom : 20,
        background : 'white',
        border : '1px solid lightgray'
    },
    infoHead : {
        display : 'flex',
        justifyContent : 'space-between',

        padding : 20,
        fontSize : 20,
        fontWeight : 600,
        borderBottom : '1px solid lightgray'
    },
    infoContent : {
        padding : 20,

        "& .MuiGrid-item:nth-child(odd)" : {
            textAlign : 'right'
        }
    },
    status : {
        marginTop : 20,
        marginBottom : 20,
        background : 'white',
        border : '1px solid lightgray'
    },
    statusHead : {
        padding : 20,
        fontSize : 20,
        fontWeight : 600,
        borderBottom : '1px solid lightgray'
    },
    red : {
        fontSize : 25,
        fontWeight : 600,
        color : theme.palette.common.red,

        textAlign : 'center',
        
        padding : 20
    },
    statusInfo : {
        padding : 20 , 
        "& .MuiGrid-item:nth-child(even)" : {
            textAlign : 'right'
        }
    },
    purple : {
        border : "1px solid " +  theme.palette.common.purple + " !important" ,
        color : theme.palette.common.purple + " !important"
    }
})) ;

const VerificationInfo = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    const series = [70, 30] ;
    const options =  {
        chart: {
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            dataLabels: {
                name: {
                  show: false
                },
                value: {
                  show: false
                }
              }
          }
        },
       
        grid: {
          padding: {
            bottom: -300
          }
        },
        responsive: [{
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
    } ;

    const handleClick = () => {
        navigate('/private/customer/verification/tier2');
    }

    const handleTier1Click = () => {
        navigate('/private/customer/verification/usdtier1');
    }
    
    return (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box sx={{width : '100%'}}>
                <Grid container>
                    <Grid item xs={12} >
                        <MenuBar />
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.verify}>
                            Verification
                            <Button variant={'contained'} onClick={() => handleTier1Click()}>
                                Upgrade Now    
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{p : 2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sx={{p : 4}}>
                                <Box className={classes.infoCard}>
                                    <Box className={classes.infoHead}>
                                        Tier 1
                                        <Button variant={'outlined'} className={classes.purple}>
                                            Current
                                        </Button>
                                    </Box>
                                    <Box className={classes.infoContent}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sx={{textAlign : 'left !important'}}>
                                                <b>Transfer amoutn in this level : </b><span style={{color : "#4115DD"}}>3,000 USD</span>
                                            </Grid>
                                            <Grid item xs={6}>
                                                Personal details
                                            </Grid>
                                            <Grid item xs={6} sx={{color : "#00CC00"}}>
                                                Completed
                                            </Grid>
                                            <Grid item xs={6}>
                                                Personal address
                                            </Grid>
                                            <Grid item xs={6}>
                                                Fill in your details
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <Box className={classes.infoCard}>
                                    <Box className={classes.infoHead}>
                                        Tier 2
                                        <Button variant='contained' color={'primary'} onClick={() => handleClick()}>
                                            Upgrade
                                        </Button>
                                    </Box>
                                    <Box className={classes.infoContent}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sx={{textAlign : 'left !important'}}>
                                                <b>Transfer amoutn in this level : </b><span style={{color : "#4115DD"}}>3,000 USD</span>
                                            </Grid>
                                            <Grid item xs={6}>
                                                Proof of identify
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Link to='/private/business/verification/tier'>
                                                    Upload document
                                                </Link>
                                            </Grid>
                                            <Grid item xs={6}>
                                                    Proof of funds
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Link to='/private/business/verification/tier'>
                                                    Upload document
                                                </Link>
                                            </Grid>
                                            <Grid item xs={6}>
                                                Proof of address
                                            </Grid>
                                            <Grid item xs={6}>
                                                Fill in your details
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box className={classes.status}>
                                    <Box className={classes.statusHead}>
                                        Sending status
                                    </Box>
                                    <Box className={classes.statusContent}>
                                        <Box className={classes.red}>
                                            220 USD remaning to transfer
                                        </Box>
                                        <Box>
                                            <ReactApexChart options={options} series={series} type="donut" height={300}/>
                                        </Box>
                                        <Box className={classes.statusInfo}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={6}>
                                                    Amount transferred this month
                                                </Grid>
                                                <Grid item xs={6}>
                                                    2780 NOK
                                                </Grid>
                                                <Grid item xs={6}>
                                                    Next limit reset date
                                                </Grid>
                                                <Grid item xs={6}>
                                                    30 Sep, 2020
                                                </Grid>
                                                <Grid item xs={6}>
                                                    Remaning days til next reset
                                                </Grid>
                                                <Grid item xs={6}>
                                                    22
                                                </Grid>
                                                <Grid item xs={6}>
                                                    Verification level
                                                </Grid>
                                                <Grid item xs={6}>
                                                    Tier 1
                                                </Grid>
                                            </Grid>
                                        </Box>

                                        <Box sx={{textAlign : 'center' , m : 2}}>
                                            <Button variant={'contained'} size={'small'}>Upgrade Now</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>    
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
} 
export default VerificationInfo;