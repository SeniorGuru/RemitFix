import React from 'react' ;


import ReactApexChart from 'react-apexcharts';
import LeftSideBar from '../../../../components/Common/LeftSideBar/Customer';
import MenuBar from '../../../../components/Common/MenuBar';

import {
    Box,
    Grid,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
    },
    infoCard : {
        marginTop : 20,
        marginBottom : 20,
        background : 'white',
        border : '1px solid lightgray'
    },
    infoHead : {
        padding : 20,
        fontSize : 20,
        fontWeight : 600,
        borderBottom : '1px solid lightgray'
    },
    infoContent : {
        padding : 20
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
    }
}))

const Profile = () => {
    const classes = useStyles() ;

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

    return (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box sx={{width : '100%'}}>
                <Grid container>
                    <Grid item xs={12} >
                        <MenuBar />
                    </Grid>
                    <Grid item xs={12} sx={{p : 2}}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sx={{p : 4}}>
                                <Box className={classes.infoCard}>
                                    <Box className={classes.infoHead}>
                                        Personal details
                                    </Box>
                                    <Box className={classes.infoContent}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                Full name
                                            </Grid>
                                            <Grid item xs={6}>
                                                Diego Valencia Palacios
                                            </Grid>
                                            <Grid item xs={6}>
                                                Phone number
                                            </Grid>
                                            <Grid item xs={6}>
                                                3048573920
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <Box className={classes.infoCard}>
                                    <Box className={classes.infoHead}>
                                        Account Information
                                    </Box>
                                    <Box className={classes.infoContent}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                Email
                                            </Grid>
                                            <Grid item xs={6}>
                                                valencia.diego15@gmail.com
                                            </Grid>
                                            <Grid item xs={6}>
                                                Password
                                            </Grid>
                                            <Grid item xs={6}>
                                                ******* change
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                                <Box className={classes.infoCard}>
                                    <Box className={classes.infoHead}>
                                        Personal address
                                    </Box>
                                    <Box className={classes.infoContent}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                Country
                                            </Grid>
                                            <Grid item xs={6}>
                                                Somalia
                                            </Grid>
                                            <Grid item xs={6}>
                                                City
                                            </Grid>
                                            <Grid item xs={6}>
                                                Mogadiscio
                                            </Grid>
                                            <Grid item xs={6}>
                                                Street address
                                            </Grid>
                                            <Grid item xs={6}>
                                                Calle 152#24-32
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

export default Profile ;