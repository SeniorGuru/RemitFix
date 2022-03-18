import React from 'react' ;

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

const useStyles = makeStyles((theme) => ({
    root : {
        background : '#F3F5F7',
        padding: 20,

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
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
    {
        fullname : {
            name : "Diego Valencia Palacios",
            id : 3057921980
        },
        country : "Somalia",
        type : {
            status : 'Cash Pickup',
            description : 'Amal Express'
        }
    },
]

const RecipientsList = () => {
    const classes = useStyles() ;
    const navigate = useNavigate();

    const headField = [
        "Full name",
        "Country",
        "Service type",
        ""
    ]

    const handleAddClick = () => {
        navigate('/private/business/recipients/add');
    }

    const handleDetailClick = () => {
        navigate('/private/business/recipients/details')
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.transfers}>
                <Box>
                    Recipients
                </Box>
                <Box >
                    <Button variant={'contained'} size={'small'} onClick={() => handleAddClick()}>
                        Add new recipient
                    </Button>
                </Box>
            </Box> 
            <Box className={classes.selectForm}>
                <Grid container spacing={1}>
                    <Grid item xs={8}>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <FormControl 
                                    fullWidth
                                >
                                    <InputLabel >Service type</InputLabel>
                                    <Select
                                        size='small'
                                        label={'Service type'}
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
                                        <MenuItem value={'all'}>All Countries</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl 
                                    fullWidth
                                >
                                    <TextField
                                        size='small'
                                        type='date'
                                        label={'Date added'}

                                        value={"2022-10-01"}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            size='small'
                            placeholder="Search by recipient's name or phone"
                            
                            InputProps={{
                                startAdornment : <InputAdornment>
                                        <Search />
                                    </InputAdornment>
                            }}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Box> 
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
                                        <TableRow key={index} onClick={() => handleDetailClick()}>
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
                                                <Box className={classes.black}>
                                                    { item.type.status }
                                                </Box>
                                                <Box className={classes.gray}>
                                                    { item.type.description }
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
        </Box>
    )
}

export default RecipientsList;