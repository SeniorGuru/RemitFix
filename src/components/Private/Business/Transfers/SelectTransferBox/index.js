import React, { useState } from 'react' ;

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {
    Box,
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material' ;

import  {
    Search
} from '@mui/icons-material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
        padding: 20,

        "& .MuiTableCell-root" : {
            paddingTop : 5,
            paddingBottom : 5
        },
        "& a" : {
            textDecoration : 'none',
            color : theme.palette.primary.main
        }
    },
    transfers : {
        fontSize : 20,
        fontWeight : 600,
        display : 'flex',
        justifyContent : 'space-between'
    },
    select : {
        marginTop : 30
    },
    selectForm : {
        marginTop : 20,
        background : 'white',
        padding : 15
    },
    bold : {
        fontWeight : 'bold',
    }
})) ;

const SelectTransferBox = () => {

    const classes = useStyles() ;
    const navigate = useNavigate();

    const [selectBox, setSelectBox] = useState("outgoing");

    const handleAddClick = () => {
        navigate('/private/business/recipients/add');
    }
    
    const handleClick = (value) => {
        setSelectBox(value);
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.transfers}>
                <Box>
                    Transfers
                </Box>
                <Box >
                    <Button variant={'contained'} size={'small'} onClick={() => handleAddClick()}>
                        Add new recipient
                    </Button>
                </Box>
            </Box> 
            <Box className={classes.select}>
                <Button
                    variant={selectBox==="outgoing" ? 'outlined' : 'text'}
                    color={'primary'}
                    onClick={() => handleClick("outgoing")}
                >
                    <Link
                        to={'/private/business/transfers/outgoing'}
                        className={selectBox==="outgoing" ? classes.bold : ''}
                    >
                        OutGoing
                    </Link>
                </Button>
                <Button
                    variant={selectBox==="incoming" ? 'outlined' : 'text'}
                    color={'primary'}
                    onClick={() => handleClick("incoming")}
                >
                    <Link
                        to={'/private/business/transfers/incoming'}
                        className={selectBox==="incoming" ? classes.bold : ''}
                    >
                        Incoming
                    </Link>
                </Button>
            </Box>
            <Box className={classes.selectForm}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <FormControl 
                                    fullWidth
                                >
                                    <InputLabel >Status</InputLabel>
                                    <Select
                                        size='small'
                                        label={'Status'}
                                        value={'all'}
                                        fullWidth
                                    >
                                        <MenuItem value={'all'}>All</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl 
                                    fullWidth
                                >
                                    <TextField
                                        size='small'
                                        type='date'
                                        label={'Date'}

                                        value={'2010-01-01'}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl 
                                    fullWidth
                                >
                                    <InputLabel >Country</InputLabel>
                                    <Select
                                        size='small'
                                        label={'Country'}
                                        value={'all countries'}
                                        fullWidth
                                    >
                                        <MenuItem value={'all countries'}>All Countries</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl 
                                    fullWidth
                                >
                                    <InputLabel >Currencies</InputLabel>
                                    <Select
                                        size='small'
                                        label={'Currencies'}
                                        value={'all currencies'}
                                        fullWidth
                                    >
                                        <MenuItem value={'all currencies'}>All Currencies</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            size='small'
                            placeholder="Search by recipient's name or phone"

                            InputProps={{
                                startAdornment : <InputAdornment position={'start'}>
                                        <Search />
                                    </InputAdornment>,
                                
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Box>          
        </Box>
    )
}

export default SelectTransferBox;