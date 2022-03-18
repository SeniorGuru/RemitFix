
import React from 'react';
import { useState, useContext, useEffect, useRef} from 'react';

import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';

import logoImg from '../../../../../assets/dark_logo.png';

import { makeStyles } from '@mui/styles';

import {
    Box ,
    Button,
    Grid,
    List,
    ListItem,
    useMediaQuery,
    Menu,
    MenuItem,
    IconButton,
} from '@mui/material' ;
import { Close } from '@mui/icons-material';
  

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        alignItems : 'center',
        backgroundColor: '#FFFFFF',
        lineHeight: 0,
        height: '80px',

        '& .MuiButton-root' : {
            color: '#FFFFFF',
            background: '#C72127',
            borderRadius: '5px',
            fontSize: '16px',
            textTransform : 'none',
            "&:hover": {
                color: '#000000'
            }
        },
        "& .MuiList-root" : {
            padding : '0px',
            "& a" : {
                display : 'flex',
                height : '80px',
            }
        },

        [theme.breakpoints.up('sm')]: {
          padding: theme.spacing(0, 18, 0)
        }
    } ,
    menu: {
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center',
        textDecoration : 'none !important',
        height : '80px',
    },
    logo : {
        width: 160,
        height: 40,
        zIndex: 2
    },
    login: {
        fontSize: '16px',
        marginRight: '30px !important',
        color: '#1B262C',
        textDecoration : 'none !important',
    },
    track: {
        color: '#1B262C',
        fontSize: '16px',
        marginRight: '30px !important',
        textDecoration : 'none !important',
    },
    home: {
        color: '#1B262C',
        marginRight : '30px',
        fontSize: '16px',
        fontSize: '16px', 
        textDecoration : 'none !important',
    },
    menuStyle : {
        borderTop : '3px solid red',
        color: '#1B3764',
        fontWeight : 'bold'
    },
    closeButton : {
        position : 'absolute !important',
        top : 20,
        right : 160,
    }
})) ;

const Header = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleClose = () => {
        if(location.pathname === '/public/form/digitalagentform')
            navigate('/public/content/digitalagent')
        if(location.pathname === '/public/form/businesspartnerform')
            navigate('/public/content/businesspartner')
    }
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={2} sx={{display:'flex',alignItems:'center',}}>
                    <Box component="img" src={logoImg} className={classes.logo}/>
                    <IconButton className={classes.closeButton} onClick={() => handleClose()}>
                        <Close/>
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    );
}

Header.propTypes = {
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;