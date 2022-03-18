import React from "react";

import Comment from '../../Common/Comment';
import Setting from './Setting';

import {
    Box,
    Grid,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'block',
        padding : '130px',
        '& .MuiButton-root' : {
            background: '#C72127',
            color: '#FFFFFF',
            borderRadius: '4px',
            marginTop: '15px',
            paddingLeft: '36px',
            paddingRight: '38px',
            paddingTop: '12px',
            paddingBottom: '7px',
                "&:hover": {
                    color: '#000000',
                    background : 'rgba(24, 55, 101, 0.08)',
                }
            }
    },
    title: {
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '36px',
        marginTop: '75px',
    },
    subTitle : {
        fontSize: '16px',
        marginTop: '20px',
    },
}))
const Title = (props) => {
    
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Comment
                        title = {"Hello to money that matters."}
                        subTitle1 = {"Get the real exchange rate known as mid-market rate and our fees are 7x cheaper than using banks and most money transfer providers."}
                        btnTitle = {"How it works"}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Setting/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Title;