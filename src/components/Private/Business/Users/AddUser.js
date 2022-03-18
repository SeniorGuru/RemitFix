import React,{ useState } from 'react' ;

import {
    Box, 
    Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle,
    Divider,
    TextField
} from '@mui/material' ;

import {
    makeStyles
} from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {

    },
    description : {
        textAlign : 'center'
    },
    control :  {
        marginTop : 10,
        marginBottom : 10
    }
})) ;

const AddUser = (props) => {
    const classes = useStyles() ;

    const {
        open,
        handleClose,
    } = props;
    

    return (
        <Dialog 
            open={open}
        >
            <DialogTitle>
                Add User
            </DialogTitle>
            <Divider />
            <DialogContent>
                <Box className={classes.description}>
                    You may add multiple users to you business account. Users will have the availability to view the accunt and download receipts.
                </Box>
                <Box className={classes.control}>
                    User's name 
                    <TextField 
                        size={'small'}
                        fullWidth
                    />
                </Box>
                <Box className={classes.control}>
                    User's email 
                    <TextField 
                        size={'small'}
                        fullWidth
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant={'contained'} onClick={handleClose}>Add User</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddUser ;