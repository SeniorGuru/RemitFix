import React from 'react' ;

import LeftSideBar from '../../../../components/Common/LeftSideBar/Customer';
import MenuBar from '../../../../components/Common/MenuBar';

import {
    Box,
    Grid,
    InputAdornment,
    TextField,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
    },
    card : {
        border : '1px solid lightgray',
        marginTop : 30,
        marginBottom : 30
    },
    cardHead : {
        padding : 20,
        fontSize : 20,
        fontWeight: 600,
        borderBottom : '1px solid lightgray'
    },
    cardContent : {
        padding : 20
    },
    settings : {
        fontSize : 20,
        fontWeight : 600
    },
    purple : {
        background : theme.palette.common.purple + " !important"
    }
})) ;

const Settings = () => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <LeftSideBar />
            <Box sx={{width : '100%'}}>
                <Grid container>
                    <Grid item xs={12} >
                        <MenuBar />
                    </Grid>
                </Grid>

                <Box sx={{m : 5}}>
                    <Box className={classes.settings}>
                        Settings
                    </Box>    
                    <Box className={classes.card}>
                        <Box className={classes.cardHead}>
                            Email settings
                        </Box>
                        <Box className={classes.cardContent}>
                            <Box>
                                valencia.diego15@gmail.com (not verified)
                            </Box>
                            <Box sx={{mt : 2}}>
                                <Button variant={'contained'} color={'primary'}>Verify email</Button>
                                <Button color={'primary'}>change email</Button>
                            </Box>
                            <Box sx={{mt : 2}}>
                                To keep your account secure, we 'll ask you to enter your password to authorise your email change.
                            </Box>
                        </Box>
                    </Box>
                    <Box className={classes.card}>
                        <Box className={classes.cardHead}>
                            Email settings
                        </Box>
                        <Box className={classes.cardContent}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    Current Password
                                    <TextField
                                        fullWidth
                                        size={'small'}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    New Password
                                    <TextField
                                        fullWidth
                                        size={'small'}
                                        InputProps ={{
                                            endAdornment : <InputAdornment position={'end'}>
                                                Show
                                            </InputAdornment>
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    Must be at least 6 characters long
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant={'contained'} size={'small'}>
                                        Change Password    
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={classes.card}>
                        <Box className={classes.cardHead}>
                            Payment methods
                        </Box>
                        <Box className={classes.cardContent}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Box sx={{fontWeight : 600}}>
                                        Visa *3232
                                    </Box>
                                    <Box>
                                        14/03
                                    </Box>
                                    <Box>
                                        ***
                                    </Box>
                                </Grid>
                                <Grid item xs={9} sx={{display : 'flex' , alignItems : 'center'}}>
                                    <Button color={'primary'} variant={'outlined'}>
                                        Edit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className={classes.card}>
                        <Box className={classes.cardHead}>
                            Notifications
                        </Box>
                        <Box className={classes.cardContent}>
                            <Box>
                                Choose how you want us to get in touch.
                            </Box>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Notifications
                                            </TableCell>
                                            <TableCell>
                                                Email
                                            </TableCell>
                                            <TableCell>
                                                Push
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            [...Array(4)].map((item, index) => {
                                                return(
                                                    <TableRow key={index}>
                                                        <TableCell>
                                                            <Box sx={{fontWeight : 600}}>
                                                                Your transfer and balances
                                                            </Box>
                                                            <Box>
                                                                Notifications about where your money is.
                                                            </Box>
                                                        </TableCell> 
                                                        <TableCell>
                                                            <Button className={classes.purple} size={'small'} variant={'contained'}>
                                                                ""
                                                            </Button>
                                                        </TableCell> 
                                                        <TableCell>
                                                            <Button className={classes.purple} size={'small'} variant={'contained'}>
                                                                ""
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
                </Box>
            </Box>
        </Box>
    )
}

export default Settings ;