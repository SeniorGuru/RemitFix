import React from 'react' ;

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
    Grid,
    Button
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        padding : 20,
        "& .MuiTimelineItem-root::before" : {
            left : "0px !important" ,
            flex: "none",
            padding:"0px !important" ,
        } ,
        "& .MuiTimelineItem-root" : {
             minHeight : "0px !important"
         } ,
         "& .MuiTimelineContent-root" : {
             paddingTop : "0px !important" ,
             marginTop : "0px !important" ,
             height : "45px !important" ,
             fontSize : "14px !important" ,
         } , 
         "& .MuiTimelineDot-root" : {
            margin : "0px !important" ,
            backgroundColor : theme.palette.common.purple
         } ,
         "& .MuiTimelineConnector-root" : {
             backgroundColor : theme.palette.common.purple ,
             flex : "none" ,
             height : 70 ,
         },
         "& .MuiTimelineSeparator-root" : {
             width : "30px !important" ,
             display : "flex !important" ,
             flexDirection : "column !important" ,
             justifyContent : "space-between !important" ,
         }
    },
    tag : {
        fontSize : 20 ,
        fontWeight : 600,
        marginBottom : 30
    },
    detail : {
        border : '1px solid lightgray'
    },
    detailHead : {
        background : 'linear-gradient(to right, #5F42F0 3%, #8F5FDD 80%)',
        width : '100%',

        color : 'white',
        fontSize : 25,
        fontWeight : 600,

        padding : 20
    },
    description : {
        padding : 20
    },

    datetime : {
        color : "gray",
        fontSize : 12
    },
    summary : {
        border : '1px solid lightgray'
    },
    summaryHead : {
        fontSize : 25,
        fontWeight : 600,
        padding : 20,

        borderBottom : '1px solid lightgray'
    },
    summaryContent : {
        padding : 20,

        borderBottom : '1px solid lightgray'
    },
    summaryFoot : {
        padding : 20,

        textAlign : 'center'
    }
})) ;

const Details = () => {
    const classes = useStyles() ;

    return  (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box className={classes.tag}>
                        All Transfers
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <Box className={classes.detail}>
                        <Box className={classes.detailHead}>
                            You send 2,000 NOK  
                            <br/>
                            to Diego Fernando Valencia
                        </Box>
                        <Box className={classes.description}>
                            Your tansfer has been delivered and is on its way to your recipient's bank account.
                        </Box>
                        <Box className={classes.timeline}>
                            <Timeline>
                                <TimelineItem >
                                    <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Box className={classes.content}>
                                            We charged <b>2,000 NOK</b> to your payment method
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
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.summary}>
                        <Box className={classes.summaryHead}>
                            Summary
                        </Box>
                        <Box className={classes.summaryContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    Transaction No.
                                </Grid>
                                <Grid item xs={4}>
                                    094829023
                                </Grid>
                                <Grid item xs={8}>
                                    Payment method
                                </Grid>
                                <Grid item xs={4}>
                                    Visa *9231
                                </Grid>
                                <Grid item xs={8}>
                                    Amount send
                                </Grid>
                                <Grid item xs={4}>
                                    2,000 NOK
                                </Grid>
                                <Grid item xs={8}>
                                    Transfer fee.
                                </Grid>
                                <Grid item xs={4}>
                                    0 NOK
                                </Grid>
                                <Grid item xs={8}>
                                    Total amount paid
                                </Grid>
                                <Grid item xs={4}>
                                    2,000 NOK
                                </Grid>
                                <Grid item xs={8}>
                                    Recipient gets
                                </Grid>
                                <Grid item xs={4}>
                                    219.46 USD
                                </Grid>
                            </Grid>
                        </Box>
                        <Box className={classes.summaryFoot}>
                            <Button variant={'contained'} color={'primary'}>
                                View receipt    
                            </Button>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Button color={'error'}>
                        Cancel tansfer
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Details ;