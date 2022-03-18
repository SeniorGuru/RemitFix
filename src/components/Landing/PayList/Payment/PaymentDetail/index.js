import React  from "react";

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles(() => ({
    root : {
        minWidth : 150
    },
    item : {
        height : 70,
        
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'column',

        borderBottom : '1px solid lightgray',
        padding : 5,
        marginTop : 20,
        fontSize : 16,

        color : 'gray',

    }
}))

const PaymentDetail = (props) => {
    const classes = useStyles() ;

    const {
        imgUrl,
        transfer,
        exchange,
        total,
        change
    } = props;

    return (
        <Box className={classes.root}>
            <Box className={classes.item}>
                {
                    imgUrl ? <Box component={'img'} src={imgUrl} height={45} /> 
                    :   <>
                            Recipient gets <Box component={'span'}><b>100 USD</b> with</Box>
                        </>
                }
            </Box>
            <Box className={classes.item}>
                { transfer }
            </Box>
            <Box className={classes.item}>
                { exchange }
            </Box>
            <Box className={classes.item}>
                <Box>
                    { total }
                </Box>
                <Box sx={{color : 'red', fontSize : 15}}>
                    { change }
                </Box>
            </Box>
        </Box>
    )
}

export default PaymentDetail ;