import React from "react";

import { makeStyles } from "@mui/styles";

import {
    Box,
    Divider, 
    FormControl, 
    Select, 
    Option, 
    MenuItem, 
    Typography, 
    TextField,
    InputAdornment,
    OutlinedInput
} from "@mui/material";

const useStyles = makeStyles({
    root : {
        background: '#FFFFFF',
        borderRadius: '5px',
        marginTop: '10px',
        "& .MuiOutlinedInput-root" : {
            padding : '0px !important',
        },
        "& .MuiSelect-outlined" : {
            width : '60px'
        }
    },
});

const CurrencySelect  = (props) => {
    
    const {
        title,
        price
    } = props;

    const classes = useStyles();
    return (
        <Box className={classes.root}>
                    <FormControl fullWidth>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                            <InputAdornment position="end">
                                <Select>
                                    <MenuItem value={10}>USDT</MenuItem>
                                    <MenuItem value={20}>NOK</MenuItem>
                                    <MenuItem value={30}>POUND</MenuItem>
                                </Select>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
        </Box>
    )
}
export default CurrencySelect;