import React, { useState } from 'react' ;

import { useNavigate } from 'react-router-dom';

import {
    Box,
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TextField,
    TableRow
} from '@mui/material' ;

import  {
    Search
} from '@mui/icons-material' ;

import { makeStyles } from '@mui/styles';
import LeftSideBar from '../../../../Common/LeftSideBar/Agent';
import MenuBar from '../../../../Common/MenuBar';

const useStyles = makeStyles((theme) => ({
    root : {
        height : '100vh',
        display : 'flex',
        background : '#F3F5F7',

        "& .MuiTableBody-root" : {
            "& .MuiTableRow-root" : {
                cursor : 'pointer',
                "&:hover" : {
                    background : 'lightgrey',
                }
            }
        },
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
    selectForm : {
        marginTop : 20,
        background : 'white',
        padding : 15
    },
    outgoingTable : {
        marginTop : 20,
        background : 'white'
    },
    gray : {
        color : 'gray'
    }
})) ;

const mockList = [
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        birth : "08 Jul, 1976"
    },
]

const CustomersList = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const headField = [
        "Full name",
        "Country",
        "Date of birth",
        ""
    ]

    const handleClick = () => {
        navigate('/private/agent/customers/add')
    }

    const handleTableClick = () => {
        navigate('/private/agent/customers/details');
    }

    return (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box>
                <MenuBar />
                <Grid container sx={{width : '100%',padding:'20px'}}>
                    <Grid item xs={12}>
                        <Box className={classes.transfers}>
                            <Box>
                                Customers
                            </Box>
                            <Box >
                                <Button variant={'contained'} size={'small'} onClick={() => handleClick()}>
                                    Add new recipient
                                </Button>
                            </Box>
                        </Box> 
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.selectForm}>
                            <Grid container spacing={1}>
                                <Grid item xs={8}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={4}>
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
                                        <Grid item xs={4}>
                                            <FormControl 
                                                fullWidth
                                            >
                                                <InputLabel >Country</InputLabel>
                                                <Select
                                                    size='small'
                                                    label={'Country'}
                                                    value={'all'}
                                                    fullWidth
                                                >
                                                    <MenuItem value={'all'}>All</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <FormControl 
                                                fullWidth
                                            >
                                                <InputLabel >Activity</InputLabel>
                                                <Select
                                                    size='small'
                                                    label={'Activity'}
                                                    value={'all'}
                                                    fullWidth
                                                >
                                                    <MenuItem value={'all'}>All</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        size='small'
                                        placeholder="Search by recipient's name, phone or date of birth"
                                        
                                        InputProps={{
                                            startAdornment : <InputAdornment position='start'>
                                                    <Search />
                                                </InputAdornment>
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                            </Grid>
                        </Box> 
                    </Grid>
                    <Grid item xs={12}>
                        <Box className={classes.outgoingTable}>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {
                                                headField.map((item , index) => {
                                                    return (
                                                        <TableCell key={index}>
                                                            {item}
                                                        </TableCell>
                                                    )
                                                })
                                            }
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            mockList.map((item, index) => {
                                                return (
                                                    <TableRow key={index} onClick={() => handleTableClick()}>
                                                        <TableCell>
                                                            <Box className={classes.black}>
                                                                { item.fullname.name }
                                                            </Box>
                                                            <Box className={classes.gray}>
                                                                { item.fullname.id }
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                            { item.country }
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box>
                                                                { item.birth }
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell >
                                                            <Button color={'primary'}>
                                                                Send Money
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default CustomersList;