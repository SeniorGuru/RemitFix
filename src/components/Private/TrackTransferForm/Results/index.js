import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector ,
    TimelineContent,
    TimelineDot
} from '@mui/lab' ;

import {
    Box,
    FormControl,
    Grid,
    TextField,
    Button,
    InputLabel,
    Divider,
    MenuItem,
    Stepper,
    StepLabel,
    Step,
    StepContent
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '800px ',
        "& a" : {
            color : theme.palette.common.green,
            display : 'flex',
            justifyContent : 'center'
        },
        "& .MuiButton-root" : {
            width : '100%'
        },
        "& .MuiTimelineItem-root::before" : {
            flex: "none",
            padding:"0px !important" ,
        } ,
        "& .MuiTimeline-root" : {
            padding : '0px'
        },
        "& .MuiTimelineDot-root" : {
            backgroundColor : '#00cc00',
        },
        "& .MuiTimelineConnector-root" : {
            backgroundColor : '#00cc00',
        }
    },
    title : {
        textAlign : 'center',
        fontSize : '30px',
        fontWeight : 'bold',
        paddingTop : '30px',
        paddingBottom : '20px',
    },
    form1 : {
        display : 'flex',
        justifyContent : 'space-between'
    },
    card : {
        display : 'flex',
        flexDirection : 'column',
    },
    bold : {
        fontWeight : 'bold',
    },
    smallText : {
        fontSize : '13px'
    },
    greenBtn : {
        backgroundColor : '#F3FCF0 !important',
        color : '#00cc00 !important',
        textTransform : 'none !important',
        width : '93px !important',
    },
    buttonWidth : {
        display : 'flex',
        justifyContent : 'flex-end'
    },
    link : {
        display : 'flex',
        justifyContent : 'flex-end'
    },
    datetime : {
        color : "gray",
        fontSize : 12
    },
}))

const Results = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const steps = [
        {
          label: 'We charged 2,000 NOK to your credit card.',
          description: `08 July, 2020 - 3:09 PM(CET)`,
        },
        {
          label: 'RemitFix is processing your payment.',
          description:'08 July, 2020-3:10 PM(CET)',
        },
        {
          label: 'Your transfer is ready for pickup at Premier Bank.',
          description: `08 July, 2020-3:11 PM(CET)`,
        },
        {
          label: 'That is it. The recpient picked up the money.',
          description: `08 July, 2020-4:01 PM(CET)`,
        }
    ];

    return(
        <Box className = {classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Box className={classes.title}>
                                Track a transfer
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Box className={classes.form1}>
                                <Box className={classes.card}>
                                    <Box className={classes.bold}>
                                        Diego Fernando Valencia
                                    </Box>
                                    <Box>
                                        2,000 NOK
                                    </Box>
                                    <Box className={classes.smallText}>
                                        219.46 USD
                                    </Box>
                                    
                                    <Box className={classes.bold}>
                                        Diego Fernando Valencia
                                    </Box>
                                    <Box>
                                        2,000 NOK
                                    </Box>
                                    <Box className={classes.smallText}>
                                        219.46 USD
                                    </Box>
                                </Box>
                                <Box className={classes.card}>
                                    {/* <Box className={classes.buttonWidth}> */}
                                        <Button variant="contained" className={classes.greenBtn}>
                                            Completed
                                        </Button>
                                    {/* </Box> */}
                                    {/* <Box className={classes.link}> */}
                                        <Link to='/'>
                                            View receipt
                                        </Link>
                                    {/* </Box> */}
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12}>
                            <Divider/>
                        </Grid>

                        <Grid item xs={12}>
                            Your transfer has been delivered and is on its way to your recipient’s bank account.
                        </Grid>

                        <Grid item xs={12}>
                            <Timeline>
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Box className={classes.content}>
                                            We charged <b>2,000 NOK</b> to your credit card
                                        </Box>
                                        <Box className={classes.datetime}>
                                            08 July, 2020 - 3:09 PM (CET)
                                        </Box>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent >
                                        <Box className={classes.content}>
                                            RemitFix is <b>processing</b> your payment.
                                        </Box>
                                        <Box className={classes.datetime}>
                                            08 July, 2020 - 3:10 PM (CET)
                                        </Box>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent >
                                        <Box className={classes.content}>
                                            Your transfer is <b>ready for pickup</b> at Premier Bank.
                                        </Box>
                                        <Box className={classes.datetime}>
                                            08 July, 2020 - 3:11 PM (CET)
                                        </Box>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        {/* <TimelineConnector /> */}
                                    </TimelineSeparator>
                                    <TimelineContent >
                                        <Box className={classes.content}>
                                            That is it. The recipient <b>picked up the money.</b>
                                        </Box>
                                        <Box className={classes.datetime}>
                                            08 July, 2020 - 4:01 PM (CET)
                                        </Box>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" sx={{width:'100%'}}>
                                    Make a new transfer
                            </Button>
                        </Grid>

                        <Grid item xs={12}>
                            <Link to='/'>
                                    Track another transfer
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
}

export default Results;