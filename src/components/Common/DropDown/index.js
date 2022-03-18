import React from "react";

import {
    Box,
    Button,
    IconButton,
    Tooltip,
    Menu,
    MenuItem,
    ListItem,
} from '@mui/material';
import { Link } from "react-router-dom";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        alignItems : 'center',
        "& .MuiButton-root" : {
            
            color : '#000000',
            fontSize : '16px',
            "&:hover": {
                color : '#1B3764',
                fontWeight : '700',
            }
        },
        "& .MuiList-root" : {
            "& a" : {
                textDecoration : "none !important",
            },
        }
    },
    
    btnWork : {
        color: '#1B262C',
        fontSize: '16px',
        cursor : 'pointer',
        display : 'flex',
        alignItems : 'center',
    },
    listItem : {
        color : 'black !important',
        padding : '0px !important',
        paddingTop : '15px !important',
        fontSize : '16px',
        cursor : 'pointer',
        textDecoration : "none !important",
    },
}))

const DropDown = () => {

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box className={classes.root}>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Work With Us">
                    <Box className = {classes.btnWork} onClick={(e) => handleClick(e)}>
                        Work With Us
                        <ExpandMoreIcon sx = {{ color : '#C72127' }}></ExpandMoreIcon>
                    </Box>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 75,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                        '& a' : {
                            textDecoration : 'none',
                        },
                        "& .MuiMenuItem-root" : {
                            "&:hover" : {
                                borderBottom : '5px solid red',
                            }
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                    
                <Link to = '/digitalagent'>
                <MenuItem className={classes.listItem}>
                    Business Partner</MenuItem></Link>
                <MenuItem sx = {{ justifyContent:'center'}}>Digital Agent</MenuItem>
                <MenuItem sx = {{ justifyContent:'center'}}>Affiliate</MenuItem>
            </Menu>
        </Box>
    );
}

export default DropDown;