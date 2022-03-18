import React from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import swal from "sweetalert";

import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    IconButton,
    Divider,
    Stack,
} from '@mui/material';

import { Close } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { FormControl } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    root : {
        "& .MuiDialogTitle-root" : {
            borderBottom : '1px solid lightgrey'
        },
        "& .MuiDialogContent-root" : {
            "& .MuiTextField-root" : {
                width : '100%',
                marginBottom : '20px',
            },
            "& .MuiButton-root" : {
                width : '60%',
                height : '42px',
            },
            "& a" : {
                color : 'black',
            }
        },
    },
    title : {
        fontSize : '17px',
        fontWeight : 'bold'
    },
    closeIcon : {
        position : 'absolute !important',
        right : 20,
        top : 10,
    },
    text : {
        textAlign : 'center',
        marginTop : '20px',
        marginBottom : '20px',
    },
    button : {
        display : 'flex !important',
        alignItems : 'center !important',
        textAlign : 'center'
    },
    divider : {
        width : '100%',
        border : '1px solid lightgrey',
        marginTop : '30px',
        marginBottom : '20px'
    }
}))
const WithDrawalModal = (props) => {

    const {
        open,
        handleClose,
    } = props;

    const classes = useStyles();

    const handleClick = () => {
        return swal({
            title : "Request sent",
            text : "If you want to cancel your withdrawal, please get in touch with us at support@remitfix.com",
            icon: "success",
            timer: 2000,
            confirmButtonText: "Select Patient?",
          
        }) ;
    }
    return(
        <Dialog
            open={open}
            className={classes.root}
        >
            <DialogTitle>
                <Box className={classes.title}>
                    Request withdrawal
                </Box>
                <IconButton className={classes.closeIcon}  onClick={()=>handleClose()}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Box className={classes.text}>
                To make a withdrawal via bank transfer, please make sure your bank account is up and running properly.
                </Box>

                <TextField label="Enter amount" variant="outlined" /> 

                <Stack className={classes.button} spacing={2}>
                    <Button variant="contained" onClick={() => handleClick()}>
                        Request withdrawal
                    </Button>
                    <Button onClick={() => handleClose()}>
                        Cancel
                    </Button>
                </Stack>


                <Box className={classes.divider}/>

                <Box>
                    - Minimal withdrawal amount: $800 USD.
                </Box>
                <Box>
                    - Withdrawals may take between 1-3 business days.
                </Box>
                <Box>
                    - Following receipt of withdrawal request, the funds will be deducted from your balance.
                </Box>
            </DialogContent>
        </Dialog>
    );
}

export default WithDrawalModal;