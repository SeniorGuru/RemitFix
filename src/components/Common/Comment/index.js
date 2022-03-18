import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {
    Box,
    Grid,
    Button,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
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
    const navigate = useNavigate();

    const {
        title,
        subTitle1,
        subTitle2,
        btnTitle,
    } = props;

    const handleClick = () => {
        if(btnTitle === "How it works")
            navigate('/public/content/howwork');
        if(btnTitle === "View the process")
            navigate('/public/content/howwork');
    }

    useEffect(() => {
    }, []);

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Box className={classes.title}>
                        {title}
                    </Box>
                    <Box className={classes.subTitle}>
                        {subTitle1}
                    </Box>
                    {
                        subTitle2 &&
                        <Box className={classes.subTitle}>
                            {subTitle2}
                        </Box>
                    }
                    {
                        btnTitle &&                    
                        <Button className={classes.btnWork} onClick={() => handleClick()}> {btnTitle} </Button>
                    }
                </Grid>
            </Grid>
        </Box>
    );
}

export default Title;