import React from "react";

import CAREERS_IMAGE from '../../../../assets/careers.png';

import {
    Box,
    FormControl,
    Menu,
    Select,
    MenuItem,
} from '@mui/material';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiSelect-select" : {
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'center',
            color : '#1B3764',
            fontWeight : 'bold',
            height: '37px !important',
            width : '260px',
            padding : 0,
        }
    },
    form : {
        position : 'relative',
        height: '344px',
    },
    image : {
        width: '100%',
        height: '344px',
        top : 0,
        zIndex : -1,
        position : 'absolute',
    },
    content : {
        position : 'absolute',
        display: 'flex',
        flexDirection : 'column',
        alignItems: 'center',
        width: '100%',
        top : 100,
    },
    title : {
        width : '352px',
        fontSize : '36px',
        fontWeight : '1000',
        textAlign : 'center',
        marginBottom : '11px',
    },
    select : {
        width : '260px',
    },
    tip : {
        background : '#1B3764',
        paddingTop : '70px',
        paddingBottom : '70px',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        color : 'white',
    },
    subTitle : {
        fontSize : '30px',
        fontWeight : '1000',
        width : '352px',
        marginBottom : '25px',
    },
    text : {
        width : '536px',
    }
}))


const CheckOpening = () => {

    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);

    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];

    return(
        <Box className = {classes.root}>
            <Box className={classes.form}>
                <Box component={"img"} src={CAREERS_IMAGE} className={classes.image}/>
                <Box className={classes.content}>
                    <Box className={classes.title}>
                        Discover  a whole new way to work
                    </Box>
                    <FormControl className={classes.select}>
                        <Select
                        multiple
                        displayEmpty
                        value={personName}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                            return <em>Check our opening</em>;
                            }

                            return selected.join(', ');
                        }}
                        inputProps={{ 'aria-label': 'Without label' }}
                        >
                        <MenuItem disabled value="">
                            <em>Placeholder</em>
                        </MenuItem>
                        {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            >
                            {name}
                        </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box className={classes.tip}>
                <Box className={classes.subTitle}>
                    Work from home, or anywhere you like
                </Box>
                <Box className={classes.text}>
                    We have into account talent, time zone is irrelevant to us. The only thing we expect from you is to deliver great work and to be as passionate as the rest of the team. Pretty simple talent and responsibility. See our openings and if you found your field, apply without hesitation, we can’t wait to see how you will fit in Remitfix.
                </Box>
            </Box>
        </Box>
    );
}

export default CheckOpening;