
import React from 'react';
import { useState, useContext, useEffect, useRef} from 'react';
import { useLocation } from 'react-router-dom';

import { Link, Outlet } from 'react-router-dom' ;
import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';

import logoImg from '../../../../../assets/dark_logo.png';
import DropDown from '../../../../Common/DropDown';
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
} from '@mui/material' ;
  

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
    }
})) ;

const Header = (props) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const [menuIndex, setMenuIndex] = useState(0);

    const onRegister = () => {
      navigate("/auth/signup");
    }
  
    const handleMenuChange = (value) => {
        setMenuIndex(value);
    }

    useEffect(() => {
        if(location.pathname === '/')
            setMenuIndex(0);
        else if(location.pathname === '/auth/signin')
            setMenuIndex(2);
        else
            setMenuIndex(-1);
    },[location.pathname])
  
    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={2} sx={{display:'flex',alignItems:'center',}}>
                    <Box component="img" src={logoImg} className={classes.logo}/>
                </Grid>
                <Grid item xs={10} >
                    <List className={classes.menu}>
                        <Link className={clsx(classes.home,menuIndex === 0 && classes.menuStyle)} to ='/' onClick={() => handleMenuChange(0)}>
                            <ListItem>Home</ListItem>
                        </Link>
                        <DropDown handleMenuChange={handleMenuChange}/>
                        <Link className={clsx(classes.track,menuIndex === 1 && classes.menuStyle)} to = '/' onClick={() => handleMenuChange(1)}>
                            <ListItem>Track a Transfer</ListItem>
                        </Link>
                        <Link className={clsx(classes.login,menuIndex === 2 &&classes.menuStyle)} to = '/auth/signin' onClick={() => handleMenuChange(2)}>
                            <ListItem>Log in</ListItem>
                        </Link>
                        <Button className={classes.btnRegister} onClick = {onRegister}>Register</Button>
                    </List>
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