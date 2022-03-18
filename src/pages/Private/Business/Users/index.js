import React, { useState } from 'react';

import LeftSideBar from '../../../../components/Common/LeftSideBar/Business';
import MenuBar from '../../../../components/Common/MenuBar';

import  {
    Search
} from '@mui/icons-material' ;

import {
    Box,
    Grid,
    Button,
    FormControl,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    InputAdornment,
    TableContainer,
    Table,
    TableHead,
    TableCell,
    TableRow,
    TableBody
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import AddUser from '../../../../components/Private/Business/Users/AddUser';

const useStyles = makeStyles(() => ({
    root : {
        display : 'flex' ,
    },
    container: {
        padding : 20
    },
    users : {
        fontWeight : 600,
        fontSize : 20
    },
    topic : {
        display : 'flex',
        justifyContent : 'space-between'
    },
    selectForm : {
        border : '1px solid lightgray',
        padding : 20,
        marginTop : 20
    },
    table : {
        marginTop : 20,
        border : '1px solid lightgray'
    }
})) ;

const Users = () => {
    const classes = useStyles() ;
    
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box sx={{width : '100%'}}>
                <Grid container>
                    <Grid item xs={12} >
                        <MenuBar />
                    </Grid>
                    <Grid item xs={12} >
                        <Box className={classes.container}>
                            <Box className={classes.topic}>
                                <Box className={classes.users}>
                                    Users
                                </Box>
                                <Button variant={'contained'} size={'small'} onClick={() => handleClick()}>
                                    Add new user
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

                                <Box className={classes.table}>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        NAME
                                                    </TableCell>
                                                    <TableCell>
                                                        EMAIL
                                                    </TableCell>
                                                    <TableCell>
                                                        LAST SIGN IN AT
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    [...Array(7)].map((item, index) => {
                                                        return(
                                                            <TableRow key={index}>
                                                                <TableCell>
                                                                    Hannah Larsen
                                                                </TableCell>
                                                                <TableCell>
                                                                    h.larsen@bizname.com
                                                                </TableCell>
                                                                <TableCell>
                                                                    07 Jul 2020 - 3:00 PM
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box> 
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {open && <AddUser open={open} handleClose={handleClick}/>}
        </Box>
    )
}

export default Users ;