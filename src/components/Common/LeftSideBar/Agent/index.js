import React from 'react' ;

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import LogoImage from '../../../../assets/light_logo.png';

import  {
    Box,
    Grid,
    Button,
    List,
    ListItem
} from '@mui/material' ;

import  { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        width : 300,
        paddingLeft : 10,
        paddingRight : 10,
        background : theme.palette.primary.main,
        
        "& a" : {
            textDecoration : 'none',
        },
        "& .MuiGrid-item" : {
            textAlign : 'center'
        },
        "& .MuiListItem-root" : {
            color : 'white'
        }
    },
    logo : {
        marginTop : 50,
        marginBottom : 40
    }
}))

const LeftSideBar = () => {

    const classes = useStyles() ;
    const navigate = useNavigate();

    const menuList = [
        {
            label : 'Transfers' ,
            link : '/private/agent/transfers'
        },
        {
            label : 'Customers',
            link : '/private/agent/customers'
        },
        {
            label : 'Reports',
            link : '/private/agent/reports'
        },
        {
            label : "Invite and earn 50 NOK",
            link : '/private/agent/invite'
        },
        {
            label : "Verification",
            link : '/private/agent/verification'
        }
    ] ;

    const handleClick = () => {
        navigate('/private/sendmoney/amount');
    }

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={classes.logo}>
                        <Box component={'img'} src={LogoImage} height={20}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{marginBottom : '50px'}}>
                    <Button variant={'contained'} color={'success'}  fullWidth onClick={() => {handleClick()}}>
                        Send money    
                    </Button>
                </Grid>
                <Grid item  xs={12}>
                    <List>
                        {
                            menuList.map((item, index) => {
                                return (
                                    <Link to={item.link} key={index} >
                                        <ListItem button>{item.label}</ListItem>
                                    </Link>
                                )
                            })
                        }
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LeftSideBar ;