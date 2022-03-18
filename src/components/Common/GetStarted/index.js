import React from "react";

import { useNavigate } from "react-router-dom";

import {
    Box,
    Button,
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        height : '284px',
        background : '#F5F7F9',

        '& .MuiButton-root' : {
            background : 'red',
            color : 'white',
            width : '260px',
            height : '47px',
        }
    },
    title : {
        paddingTop : '71px',
        fontSize : '30px',
        fontWeight : 'bold',
        textAlign : 'center',
    },
    button : {
        marginTop : '25px',
        display : 'flex',
        justifyContent : 'center',
    },
    footerText : {
        marginLeft : '30%',
        marginRight : '30%',
        marginTop : '10px',
        textAlign : 'center',
        fontSize : '16px',
    },
    link : {
        color : 'red !important',
        cursor : 'pointer',
        textDecoration : 'underline',
    }
}))

const GetStarted = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const {
        title,
        btnText,
        text,
        linkText,
    } = props;

    const handleClick = () => {
        if(title === "Become a digital agent")
            navigate('/public/form/digitalagentform');
        if(title === "Become a business partner")
            navigate('/public/form/businesspartnerform');
    }
    const handleLinkClick = () => {
        if(linkText === "how it works")
            navigate('/public/howwork');
    }
    return(
        <Box className = {classes.root}>
            <Box className = {classes.title}>
                {title}
            </Box>
            {
                btnText &&
                    <Box className = {classes.button} onClick={() => handleClick()}>
                        <Button>
                            {btnText}
                        </Button>
                    </Box>
            }
            <Box className = {classes.footerText}>
                <Box component={"span"} > {text} <Box component={"span"} className = {classes.link} onClick={() => handleLinkClick()}> {linkText} </Box> </Box>
                
            </Box>
        </Box>
    );
}

export default GetStarted;