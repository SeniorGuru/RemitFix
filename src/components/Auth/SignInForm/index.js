import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import { SignInUser } from '../../../redux/actions/auth';

import validate from "validate.js";

import {
    Box,
    Stack,
    Button,
    Checkbox,
    InputLabel,
    FormControl,
    TextField,
    Divider,
} from '@mui/material';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    root : {
        background : 'white',
        
        "& .MuiInputLabel-root" : {
            fontSize : '15px',
            color : '#818181',
            marginBottom : '8px',
        },
        "& .MuiFormControlLabel-root" : {
            height : '50px',
            width : '48%',
            marginRight : 0,
            marginLeft : 0,
            border : '1px solid grey',
        },
        "& a" : {
            fontSize : '13px',
            fontWeight : 'bold',
            color : '#1B262C',
            textDecoration : 'none',
        },
        "& .MuiDivider-root" : {
            marginTop : '15px',
        },
        "& .MuiButton-root" : {
            width : '80%',
        }
    },
    forget : {
        marginTop : '-12',
    },
    remember : {
        marginTop : '15px',
        display : 'flex',
        alignItems : 'center',
    },
    submit : {
        display : 'flex',
        justifyContent : 'center',
        marginTop : '32px',
    }
}))

const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
        maximum: 300,
        },
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
        minimum: 6,
        },
    },
};

const SignInForm = (props) => {

    const {
        SignInUser
    } = props;

    const classes = useStyles();
    const navigate = useNavigate();
    
    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });
    
    useEffect(()=>{
        const errors = validate(formState.values, schema);
        
        setFormState(formState => ({
          ...formState,
          isValid: errors ? false : true,
          errors: errors || {},
        }));
    
    }, [formState.values] );  

    const handleChange = event => {
        event.persist();
    
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));
    };

    const hasError = field => formState.touched[field] && formState.errors[field] ? true : false;

    const handleClick = async () => {
        if(formState.isValid){
            await SignInUser(formState, navigate);
        }
    }

    return (
        <Box className={classes.root}>
            <InputLabel >Enter your email</InputLabel>
            <FormControl fullWidth variant="standard">
                <TextField
                    id="outlined-basic" 
                    name={"email"}
                    type="email"
                    helperText={hasError('email') ? formState.errors.email[0] : null}
                    error={hasError('email')}
                    onChange={handleChange}
                    value={formState.values.email || ''}
                />
            </FormControl>

            <InputLabel >Enter your password</InputLabel>
            <FormControl fullWidth variant="standard">
                <TextField 
                    id="outlined-basic" 
                    variant="outlined"
                    name="password"
                    type="password"
                    helperText={hasError('email') ? formState.errors.email[0] : null}
                    error={hasError('email')}
                    onChange={handleChange}
                    value={formState.values.password || ''}
                />
            </FormControl>

            <Link to='/forgotpassword' className={classes.forget}>
                Forget password?
            </Link>

            <Divider/>
            <Box className={classes.remember}>
                <Checkbox/>
                <Box component={"span"}>
                    Remember me on this device
                </Box>
            </Box>
            <Divider/>
            <Box className={classes.submit}>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleClick()}>
                    Login
                </Button>
            </Box>
        </Box>
    );
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = {
    SignInUser
}
export default connect(mapStateToProps, mapDispatchToProps) (SignInForm);