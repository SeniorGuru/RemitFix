import React from "react";

import CountrySelect from '../../../Common/CountrySelect';
import CurrencySelect from "../../../Common/CurrencySelect";

import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiButton-root' : {
            width : '250px',
            marginTop : '20px',
            color: '#FFFFFF',
            background: '#C72127',
            borderRadius: '5px',
            fontSize: '16px',
            textTransform : 'none',
            "&:hover": {
                color: '#000000'
            }
        },
    },
    textContent : {
        display : 'flex',
        alignItems : 'flex',
        marginTop : '17px',
    },
    mainText : {
        display:'flex',
        alignItems : 'center',
        paddingLeft : '20px',
    },
    feeText : {
        paddingLeft: '20px', 
        fontSize: '14px', 
        fontWeight: '700', 
        color: '#5929FB',
    }
}))
const PaySetting = (props) => {
    
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <CountrySelect/>
            <CurrencySelect title = {"You send"} price = {2}/>
            <Box >
                <Box >
                    <Box className={classes.textContent}>
                        <AddCircleIcon className={classes.circleIcon}></AddCircleIcon>
                        <Box className={classes.feeText}>First three transfers are fee-free!</Box>
                    </Box>
                    <Box className={classes.textContent}>
                        <PauseCircleFilledIcon className={classes.rotated} ></PauseCircleFilledIcon>
                        <Box className={classes.mainText}>
                            <Typography sx={{ fontWeight: '700' }}>Total amount:</Typography>
                            <Typography sx={{ fontSize: '15px', marginTop: '1px' }}>&nbsp;2.000 NOK</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.textContent}>
                        <CancelIcon className={classes.circleIcon}></CancelIcon>
                        <Box className={classes.mainText}>
                            <Typography sx={{ fontWeight: '700 !important' }}>Real exchange rate:</Typography>
                            <Typography sx={{ fontSize: '15px', marginTop: '1px' }}>&nbsp;1 NOK - 0.109976 SOS</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.stepper}></Box>
            </Box>
            <CurrencySelect title="Recipient gets" price="100" />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}><Typography sx={{ color: '#5929FB', fontWeight: '700' }}>You are saving 150 NOK</Typography><Typography sx={{ color: '#818181' }}>&nbsp;in this transfer.</Typography><Typography sx={{ color: '#FF0000', textDecoration: 'underline' }}>&nbsp;Compare prices</Typography></Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button className={classes.started}>Get started</Button>
            </Box>
        </Box>
    );
}

export default PaySetting;