
import React from 'react';
import { useState, useContext, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';

import { Link, Outlet } from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';
import { SendAddress } from '../../../redux/actions/wallet';

import logoImg from '../../../assets/dark_logo.png';
import DropDown from '../../Common/DropDown';
import clsx from 'clsx';

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
    closeButton : {
        position : 'absolute',
        top : 10,
        right : 20,
    }
})) ;

const Header = (props) => {

    const {
        handleClose,
    } = props;

    const classes = useStyles();
  
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={2} sx={{display:'flex',alignItems:'center',}}>
                    <Box component="img" src={logoImg} className={classes.logo}/>
                </Grid>
                <Grid item xs={10} >
                </Grid>
            </Grid>
            <IconButton className={classes.closeButton} onClick={handleClose}>
                <Close/>
            </IconButton>
        </Box>
    );
}

Header.propTypes = {
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    SendAddress,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header) ;