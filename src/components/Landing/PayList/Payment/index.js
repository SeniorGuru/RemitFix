import React, { useState, useEffect} from 'react' ;

import Select from 'react-select';
import currency from '../../../../static/currencies.json';
import PaymentDetail  from './PaymentDetail';
import LogoImg from '../../../../assets/dark_logo.png';
import Image10 from '../../../../assets/Image10.png';
import Image11 from '../../../../assets/Image11.png';
import Image12 from '../../../../assets/Image12.png';
import Image13 from '../../../../assets/Image13.png';
import axios from 'axios';

import {
    Box,
    Grid ,
    TextField,
    Button
} from '@mui/material' ;


import  { makeStyles } from '@mui/styles' ;

const url = "http://apilayer.net/api/";
const key = 'access_key=1243057a86bce1be67f6416f4d250ebe';

const useStyles = makeStyles(() => ({
    root : {
        height : 700,

        background : 'white',

        boxShadow : '1px 1px 8px 0px lightgray' ,
        borderRadius :10,
        padding : 40,

        "& .MuiButtonBase-root" : {
            borderRadius : 20,
            marginRight : 30
        }
    },
    expression : {
        fontSize : 25,
        fontWeight : 600
    },
    label : {
        fontSize : 15,
        color : 'gray'
    },
    menuItem : {
        borderBottom : '1px solid lightgray',
        marginBottom : 20,
        width : 150 ,
        padding : 20,

        height : 70
    },
    cardList : {
        display : 'flex',
        justifyContent : 'space-around',
        flexDirection : 'row',
    },
    btGp : {
        marginTop : 10,
        marginBottom : 10
    }
})) ;

const Payment = () => {
    const classes =  useStyles() ;

    const imageList = [
        Image10,
        Image11,
        Image12, 
        Image13
    ] ;

    const [source, setSource] = useState([]);
    const [dest, setDest] = useState([]);
    const [items, setItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        var array1 = Object.keys(currency).map(function(key) { return currency[key]; });
        var array2 = Object.keys(currency).map(function(key) { return key; });
  
        const tempArray = [];
        for (let i = 0; i < array1.length; i++)
        {
            const item = {};
            item.value = array1[i];
            item.label = array2[i];
            
            tempArray.push(item);
            setItems([...tempArray]);
        }
    }, []);
    
    useEffect(() => {
        console.log(source);
        console.log(url + 'convert?' + key + '&from=' + source.label + '&to=' + dest.label + '&amount=' + amount);
        axios.get(url + 'convert?' + key + '&from=' + source.label + '&to=' + dest.label + '&amount=' + amount)
       .then(res => {
           console.log("result::", res.data.result);
           setPrice(res.data.result);
        });
    }, [dest, amount, source]);

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    You send exactly
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <TextField type= "number" fullWidth size='small' onChange={(e)=> {setAmount(e.target.value)}}>{ amount }</TextField>
                        </Grid>
                        <Grid item xs={3}>
                            <Select defaultValue={source} onChange={setSource} options={ items } />
                        </Grid>
                        <Grid item xs={3}>
                            <Select defaultValue={dest} onChange={setDest} options={ items } />
                        </Grid>
                        <Grid item xs={4} sx={{textAlign : 'right'}}>
                            <Box className={classes.expression}>
                                1 NOK = 9.0552 USD
                            </Box>
                            <Box className={classes.label}>
                                Mid-market exchange rate
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.btGp}>
                    <Box className={classes.btGp}>
                        <Button variant={'contained'}>Sending</Button>
                        <Button variant='contained'>Receiving</Button>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={2}>
                                <PaymentDetail
                                    transfer={'Transfer Fee'}
                                    exchange={'Exchange Fee'}
                                    total={'Total to pay'}
                                />
                        </Grid>
                        <Grid item xs={10} >
                            <Box className={classes.cardList}>
                                <PaymentDetail
                                    imgUrl={LogoImg}
                                    transfer={'27 NOK'}
                                    exchange={'9.6787'}
                                    total={'967 NOK'}
                                    change={'-65 NOK'}
                                />
                            {
                                [...Array(4)].map((item, index) => {
                                    return (
                                        <PaymentDetail 
                                            key={index}
                                            imgUrl={imageList[index]}
                                            transfer={'27 NOK'}
                                            exchange={'9.6787'}
                                            total={'967 NOK'}
                                            change={'-65 NOK'}
                                        />
                                    )
                                })
                            }
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Payment ;