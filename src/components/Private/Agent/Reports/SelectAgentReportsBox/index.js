import React, { useState } from 'react' ;

import { useNavigate } from 'react-router-dom';

import WithDrawalModal from '../WithDrawalModal';

import {
    Box,
    Button,
    FormControl,
    Grid,
    InputAdornment,
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
        padding : 15
    },
    bold : {
        fontWeight : 'bold !important',
    }
})) ;

const SelectAgentReportsBox = () => {

    const classes = useStyles() ;
    const navigate = useNavigate();

    const [selectBox, setSelectBox] = useState("earnings");
    const [open, setOpen] = useState(false);

    const handleModalClick = () => {
        setOpen(!open);
    }
    const handleOutgoingClick = () => {
        setSelectBox("earnings");
        console.log(selectBox);
        navigate('/private/agent/reports/earn');
    }
    const handleIncomingClick = () => {
        setSelectBox("customers");
        console.log(selectBox);
        navigate('/private/agent/reports/customers');
    }

    return (
        <Box className={classes.root}>
            <Box className={classes.transfers}>
                <Box>
                    Transfers
                </Box>
                <Box >
                    <Button variant={'contained'} size={'small'} onClick={() => handleModalClick()}>
                        Request withdrawal
                    </Button>
                </Box>
            </Box> 
            <Box className={classes.select}>
                <Button
                    variant={selectBox==="earnings" ? 'outlined' : 'text'}
                    color={'primary'}
                    onClick={() => handleOutgoingClick("earnings")}
                    className={selectBox==="earnings" ? classes.bold : ''}
                >
                        Earnings
                </Button>
                <Button
                    variant={selectBox==="customers" ? 'outlined' : 'text'}
                    color={'primary'}
                    onClick={() => handleIncomingClick("customers")}
                    className={selectBox==="customers" ? classes.bold : ''}
                >
                        Customers
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
                                    <Select
                                        size='small'
                                        value={'this'}
                                        fullWidth
                                    >
                                        <MenuItem value={'this'}>This month</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl 
                                    fullWidth
                                >
                                    <Select
                                        size='small'
                                        value={'all'}
                                        fullWidth
                                    >
                                        <MenuItem value={'all'}>All customers</MenuItem>
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

            <WithDrawalModal open={open} handleClose={handleModalClick}/>
        </Box>
    )
}

export default SelectAgentReportsBox;