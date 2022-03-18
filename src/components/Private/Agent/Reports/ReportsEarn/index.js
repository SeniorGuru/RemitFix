import React from "react";


import SelectAgentReportsBox from "../SelectAgentReportsBox";
import ReactApexChart from "react-apexcharts";

import {
    Box,
    Grid,
    Divider,
    Button
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
        padding : '30px',
    },
    earnForm : {
        marginTop : '30px',
        background : '#F3F5F7',
    },
    card : {
        textAlign : 'center',
        background : 'white',
    },
    value : {
        fontSize : '24px',
        fontWeight : 'bold',
    },
    content : {
        height : '350px',
        background : 'white',
    },
    contentTitle : {
        fontSize : '17px',
        fontWeight : 'bold',
        height : '60px',
        padding : '10px',
    },
    context : {
        display : 'flex',
        justifyContent : 'space-between',
        padding : '10px'
    },
    bold : {
        fontWeight : 'bold',
    },
    button : {
        background : '#F3F5F7 !important',
        color : '#183765 !important',
        textTransform : 'none !important',
        fontWeight : 'bold !important'
    }
}))

const ReportsEarn = () => {

    const classes = useStyles();

    const series = [{
        name: 'series1',
        data: [3550, 3564, 3687, 3541, 3612, 3659, 3700]
    }] ;

    const  options = {
        chart: {
        background : 'white',
        height: 350,
          type: 'area',
          toolbar : {
              show : false
          },
        },
        colors : [
            '#66DA26', '#E91E63'
        ],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },

    } ;
    
    return (
        <Box className={classes.root}>
            <SelectAgentReportsBox/>
            <Box className={classes.earnForm}>
                <Grid container spacing={5}>
                    <Grid item xs={4} >
                        <Box className={classes.card}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    Number of transfers
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className={classes.value}>
                                        100
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={4} >
                        <Box className={classes.card}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    Average volume per transfer
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className={classes.value}>
                                        $100
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={4}>
                        <Box className={classes.card}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    Total volume of transfer
                                </Grid>
                                <Grid item xs={12}>
                                    <Divider/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className={classes.value}>
                                        $10,000
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={8}>
                        <ReactApexChart options={options} series={series} type="area" height={350} />
                    </Grid>

                    <Grid item xs={4}>
                        <Box className={classes.content}>
                            <Box className={classes.contentTitle}>
                                Breakdown
                            </Box>

                            <Divider/>

                            <Box className={classes.context}>
                                <Box>
                                    Earnings
                                </Box>
                                <Box>
                                    $1,000
                                </Box>
                            </Box>
                            <Box className={classes.context}>
                                <Box>
                                    Total commission
                                </Box>
                                <Box>
                                    $333
                                </Box>
                            </Box>
                            <Box className={classes.context}>
                                <Box>
                                    Commission rate
                                </Box>
                                <Box>
                                    33%
                                </Box>
                            </Box>
                            <Box className={classes.context}>
                                <Box className={classes.bold}>
                                    Net Income
                                </Box>
                                <Box className={classes.bold}>
                                    $670
                                </Box>
                            </Box>
                            <Box sx={{display:'flex',justifyContent:'center',p:4}}>
                                <Button variant="contained" className={classes.button}>
                                    View transfers
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default ReportsEarn;