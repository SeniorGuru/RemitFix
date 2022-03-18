import React from "react";

import {
    Box,
    Grid,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

import ReactApexChart from "react-apexcharts";

const useStyles = makeStyles((theme) => ({
    root : {
    },
    rate : {
        fontWeight : 600,
        fontSize : 25,
        textAlign : 'center',

        paddingBottom : 70
    },
    chart : {
        color : 'gray',
        
    }
}))

const RateChart = () => {

    const classes = useStyles();

    const series = [{
        name: 'series1',
        data: [3550, 3564, 3687, 3541, 3612, 3659, 3700]
    }] ;

    const  options = {
        chart: {
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
    
    return(
        <Box className = {classes.root}>
            <Grid container>
                <Grid item xs={12} className={classes.rate}>
                    We use the real exchange rate
                </Grid>
                <Grid item xs={12}>
                    <Box className={classes.chart}>
                        As of 1 min ago 1 USD = 3,793 COP
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <ReactApexChart options={options} series={series} type="area" height={350} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default RateChart;