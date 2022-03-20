
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux' ;

import logoImg from '../../../../../assets/dark_logo.png';

import { makeStyles } from '@mui/styles';

import {
    Box ,
    Grid,
    ListItem,
    List
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
        "& a" : {
            textDecoration : 'none',
            cursor : 'pointer',
            color : '#AFAFAF',
            "&:hover" : {
                color : '#1B262C',
                fontWeight : 'bold',
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
    line : {
        width : '60px',
        border : '1px solid lightgrey',
    },
    center : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
    },
    linkStyle : {
        color : '#1B262C',
        fontWeight : 'bold',
    }
})) ;

const Header = (props) => {

    const {
        index 
    } = props;

    const classes = useStyles();

    useEffect(() => {
        console.log(index);
    })

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={2} className={classes.center}>
                    <Box component="img" src={logoImg} className={classes.logo}/>
                </Grid>
                <Grid item xs={8} className={classes.center}>
                    <List className={classes.center}>
                        <Link to='/private/sendmoney/amount'>
                            <ListItem className={index >=0 ? classes.linkStyle : ''}>
                                Amount
                            </ListItem>
                        </Link>
                        <Box className={classes.line}></Box>

                        <Link to='/private/sendmoney/recipient'>
                            <ListItem className={index >=1 ? classes.linkStyle : ''}>
                                Recipient
                            </ListItem>
                        </Link>
                        <Box className={classes.line}></Box>

                        <Link to='/private/sendmoney/delivery'>
                            <ListItem className={index >=2 ? classes.linkStyle : ''}>
                                Delivery
                            </ListItem>
                        </Link>
                        <Box className={classes.line}></Box>

                        <Link to='/private/sendmoney/review'>
                            <ListItem className={index >=3 ? classes.linkStyle : ''}>
                                Review
                            </ListItem>
                        </Link>
                        <Box className={classes.line}></Box>
                        
                        <Link to='/private/sendmoney/pay'>
                            <ListItem className={index >=4 ? classes.linkStyle : ''}>
                                Pay
                            </ListItem>
                        </Link>
                        <Box className={classes.line}></Box>
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