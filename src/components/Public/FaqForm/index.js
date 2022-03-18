import React, { useState } from "react";


import {
    Box,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';

import { FiberManualRecord, QuestionMark, Add, Remove } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        paddingTop : '100px',
        paddingBottom : '132px',
        paddingLeft : '17%',
        paddingRight : '17%',
        height : '600px',
        "& .MuiSvgIcon-root" : {
            width : '28px',
            height : '28px',
            color : '#1B3764',
        },
        "& .MuiAccordion-root" : {
            boxShadow : 'none',
            borderBottom : '1px solid lightgrey',
            color : '#212E36',
            fontWeight : 'bold'
        }
    },
    image : {
        position : 'relative',
        width : '76px !important',
        height : '76px !important',
        color : 'red !important',
    },
    fiber : {
        width : '100px !important',
        height : '100px !important',
        color : 'red !important',
    },
    mark : {
        position : 'absolute',
        top : 20,
        left : 25,
        width : '50px !important',
        height : '60px !important',
        color : 'white',
    },
    title : {
        fontSize : '30px',
        fontWeight : '1000',
        marginTop : '25px',
    }
}))

const FaqForm = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    const accordionContent = [
        {
            title : 'How to use RemitFix?',
        },
        {
            title : 'How much are RemitFix’s transfer fees?',
        },
        {
            title : 'Is RemitFix safe?',
        },
        {
            title : 'How does RemitFix keep my money safe?',
        },
        {
            title : 'How can I track my transfer?',
        }
    ]
    const onChangeExpanded = () => {
        setExpanded(!expanded);
    }
    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Grid container>
                    <Grid item xs={3.5}>
                        <Box className={classes.image}>
                        <FiberManualRecord className={classes.fiber}/>
                        <QuestionMark className={classes.mark}/>
                        </Box>
                        <Box className={classes.title}>
                            Common Questions
                        </Box>
                    </Grid>
                    <Grid item xs={8.5}>
                        {
                            accordionContent.map((value, index) => {
                                return (
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={expanded === true ? <Add className={classes.expandIcon}/> : <Remove className={classes.expandIcon}/>}
                                            
                                            onClick={() => onChangeExpanded()}
                                        >
                                            {value.title}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {/* <List>
                                            <Box sx={{component="span"> {context} </Box>
                                            </List> */}
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default FaqForm;