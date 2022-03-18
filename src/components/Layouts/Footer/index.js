

import React, { useEffect, useRef } from 'react' ;
import { useNavigate } from 'react-router-dom';

import backImg from '../../../assets/bg.png';
import LOGO_IMG from '../../../assets/white_logo.png';
import TWITTER_IMG from '../../../assets/Social/twitter.png';
import FACEBOOK_IMG from '../../../assets/Social/facebook.png';
import LINK_IMG from '../../../assets/Social/link.png';
import YOUTUBE_IMG from '../../../assets/Social/youtube.png';

import {
    Box ,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
} from '@mui/material' ;

import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root : {
        backgroundImage: `url(${backImg})`,
        paddingTop : '100px', 
        paddingLeft : '140px',
        paddingRight : '140px',
        "& .MuiSvgIcon-root" : {
            color : 'white',
        },
        "& a" : {
            textDecoration : "none",
            "& :hover" : {
                color : "white !important"
            }
        },
    },
    title : {
        fontSize : '20px', 
        fontWeight : '700', 
        color: '#ffffff', 
    },
    text : {
        color : '#707070', 
        fontSize : '16px',
        marginTop : '15px',
    },
    list : {
        color : '#707070 !important',
        padding : '0px !important',
        paddingTop : '15px !important',
        fontSize : '16px',
        cursor : 'pointer',
    },
    phone : {
        color : 'white', 
        fontWeight : '700', 
        display : 'flex', 
        marginTop : '70px'
    },
    mail : {
        fontWeight : '700', 
        color : 'white', 
        marginTop : '20px', 
        display : 'flex'
    },
    link : {
        marginLeft : '20px',
    },
    touch : {
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
    },
    social : {
        marginTop : '19px',
        display : 'flex',
        justifyContent : 'center',
    },
    m20 : {
        marginRight : '10px',
    },
    border : {
        marginTop : '50px !important',
        borderColor : '#36578B !important',
    },
    footer : {
        height : '128px',
        display : 'flex',
        alignItems : 'center',
        '& a' : {
            textDecoration : "none",
            "& :hover" : {
                color : "red !important"
            }
        }
    },
    footerMenu : {
        display : 'flex',
        justifyContent : 'flex-end',
    },
    footerText : {
        marginLeft : '21px',
        color : 'white',
        cursor : 'pointer',
        padding : '0px !important',
    },
    footerText1 : {
        marginLeft : '21px',
        color : 'white',
        padding : '0px !important',
    }
}));

const Footer = () => {

    const classes = useStyles() ;
    const navigate = useNavigate();

    return (
        <Box className = {classes.root}>
            <Grid container>
                <Grid item xs={7}>
                    <Box className={classes.title}>GLOBAL HEADQUARTERS</Box>
                    <Box className={classes.text}>Coliemore House,</Box>
                    <Box className={classes.text}>Coliemore Road,</Box>
                    <Box className={classes.text}>Dalkey,</Box>
                    <Box className={classes.text}>Co. Dublin</Box>
                    <Box className={classes.phone}>
                        <PhoneIcon></PhoneIcon>
                        <Box className={classes.link}>&nbsp; +1 312 994 1880</Box>
                    </Box>
                    <Box className={classes.mail}>
                        <MailOutlineIcon></MailOutlineIcon>
                        <Box className={classes.link}>&nbsp;INFO@REMITFIX.COM</Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box className={classes.title}>
                                COMPANY
                            </Box>
                                <Link to='/public/content/aboutus'>
                                    <ListItem className={classes.list}>About us</ListItem>
                                </Link>
                                <Link to='/public/content/howwork'>
                                    <ListItem className={classes.list}> How it works </ListItem>
                                </Link>
                                <Link to='/public/content/track'>
                                    <ListItem className={classes.list}>Track a transfer</ListItem>
                                </Link>
                                <Link to='/public/content/careers'>
                                    <ListItem className={classes.list}>Careers</ListItem>
                                </Link>
                                <Link to='/public/content/faq'>
                                    <ListItem className={classes.list}>FAQ</ListItem>
                                </Link>
                            <Box className={classes.social}>
                                <Box component={"img"} src={TWITTER_IMG} className={classes.m20}></Box>
                                <Box component={"img"} src={FACEBOOK_IMG} className={classes.m20}></Box>
                                <Box component={"img"} src={LINK_IMG} className={classes.m20}></Box>
                                <Box component={"img"} src={YOUTUBE_IMG} className={classes.m20}></Box>
                            </Box>
                        </Grid>
                        <Grid item xs={9} >
                            <Box className={classes.title}>GET IN TOUCH</Box>
                            <List>
                                <Link to='/public/content/contact'>
                                    <ListItem className={classes.list}>Contact us</ListItem>
                                </Link>
                                <Link to='/public/content/businesspartner'>
                                    <ListItem className={classes.list}>Become a business partner</ListItem>
                                </Link>
                                <Link to='/public/content/digitalagent'>
                                    <ListItem className={classes.list}>Become a digital agent</ListItem>
                                </Link>
                                <Link to='/public/content/affiliate'>
                                    <ListItem className={classes.list}>Become an affiliate</ListItem>
                                </Link>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider className={classes.border}/>
            <Box className={classes.footer}>
                <Grid container>
                    <Grid item xs={2}>
                        <Box component="img" src={LOGO_IMG} className={classes.logo}/>
                    </Grid>
                    <Grid item xs={10}>
                    <Box className={classes.footerMenu}>
                        <Link to='/public/content/terms'>
                            <ListItem className={classes.footerText}>Terms</ListItem>
                        </Link>
                        <Link to='/public/content/faq'>
                            <ListItem className={classes.footerText}>Privacy</ListItem>
                        </Link>
                        <Box className={classes.footerText1}>© RemitFix 2020</Box>
                    </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default Footer ;