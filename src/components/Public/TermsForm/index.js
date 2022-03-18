import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PrivatePolicy from "./PrivatePolicy";

import {
    Box,
    Grid,
    Button,
    IconButton,
    ListItem,
    ListItemIcon,
    Drawer,
    Toolbar,
    Divider,
    List,
    ListItemText,

} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
    },
    navbar : {
        marginTop : '80px',
        marginBottom: '72px',
        paddingLeft : '139px',
        minWidth : '415px',
        borderRight : '1px solid lightgrey',
        "& a" : {
            textDecoration : 'none',
            "& :hover" : {
                color : '#1B3764',
                fontWeight : 'bold',
            }
        }
    },
    navTitle : {
        fontSize : '20px',
        fontWeight : 'bold',
    },
    itemText : {
        color : '#1B262C',
        cursor : 'pointer',
    },
}))

const TermsForm = () => {

    const classes = useStyles();

    const [item, setItem] = useState(0);

    return(
        <Box className = {classes.root}>
            <Box className={classes.navbar}>
                <List >
                    <ListItem className={classes.navTitle}>
                        Privacy
                    </ListItem>
                    <Box onClick={() => {setItem(0)}}>
                        <ListItem className={classes.itemText}>
                            Privacy Policy
                        </ListItem>
                    </Box>
                    <Box onClick={() => {setItem(0)}}>
                        <ListItem className={classes.itemText}>
                            Cookies Policy
                        </ListItem>
                    </Box>
                    <Box onClick={() => {setItem(0)}}>
                        <ListItem className={classes.itemText}>
                            Privacy Shield Policy
                        </ListItem>
                    </Box>
                    <Box onClick={() => {setItem(0)}}>
                        <ListItem className={classes.itemText}>
                            Sub pricessor list
                        </ListItem>
                    </Box>
                    <Box onClick={() => {setItem(0)}}>
                        <ListItem className={classes.itemText}>
                            RemitFix Privacy Center
                        </ListItem>
                    </Box>
                </List>
            </Box>
            {
                (item === 0) && <PrivatePolicy/>
            }
            
        </Box>
    );
}

export default TermsForm;