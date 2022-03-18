
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { SignUpUser } from '../../../redux/actions/auth';

import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { FormControlLabel, Stack, TextField, IconButton, InputAdornment, Button, Box } from '@mui/material';
import { Checkbox } from '@mui/material';

import CountrySelect from '../../Common/CountrySelect';
import validate from 'validate.js';
// ----------------------------------------------------------------------

import PropType from 'prop-types';


// import { SignUp } from '../../../redux/action/auth';

import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    smallTitle1: {
        fontSize: '15px',
        marginTop: '5px'
    },
    smallTitle2: {
        marginTop: '20px',
        fontSize: '15px',
        color: '#818181'
    },
    btnSign : {
        width: '80%',
        alignSelf: 'center', 
        color: 'error', 
        backgroundColor: '#183765', 
        height: '42px'
    }
})

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

const SignUpForm = (props) => {

  const {
    SignUpUser
  } = props;

  const classes = useStyle();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [invite, setInvite] = useState(false);
  const [countrySelected, setCountrySelected] = useState("");
  
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

  }, [formState.values]);
  
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

  const handleInvite = (invite) => {
    setInvite(invite);
  }

  const handleSubmit = async () => {
      if(formState.isValid && countrySelected !== ''){
          SignUpUser(formState, navigate) ;
      }
  }

  useEffect(() => {
    
    setFormState(formState => ({
      ...formState,
      values: {
          ...formState.values,
          country : countrySelected
      },
    }));
  }, [countrySelected]);

  return (
      <Box className={classes.root}>
            <Box className={classes.smallTitle2}>
                Enter your email
            </Box>
            <TextField fullWidth autoComplete="username"
                name="email"
                type="email"
                label="Email address"
                helperText={hasError('email') ? formState.errors.email[0] : null}
                error={hasError('email')}
                onChange={handleChange}
                sx={{marginTop : '10px'}}
            />
            <Box className={classes.smallTitle2}>Create your password</Box>

            <TextField
                fullWidth
                name="password"
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                    </InputAdornment>
                )
                }}
                helperText={hasError('email') ? formState.errors.email[0] : null}
                error={hasError('email')}
                onChange={handleChange}
                sx={{marginTop : '10px'}}
            />
            <Box className={classes.smallTitle1}>
              Must be at least 6 characters long
            </Box>

            <Box className={classes.smallTitle2}>
                Country of residence
            </Box>

            <CountrySelect selected={countrySelected} setSelected={setCountrySelected}/>

            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
                <FormControlLabel
                control={<Checkbox onChange={e => { handleInvite(e.target.checked) }} />}
                label="I have an invite code"
                />
            </Stack>
            { invite &&
              <Stack>
                  <TextField fullWidth type="text" placeholder='Enter your invite code' />
              </Stack>
            }

            <Stack align='center' sx={{ mt: 2 }}>
                <Button variant="contained" onClick = { handleSubmit } className={classes.btnSign}>Sign Up</Button>
            </Stack>
      </Box>
  );
}

SignUpForm.propsType = {
//   message: PropType.array.isRequired
}

const mapStateToProps = (state) => ({
//   message: state.auth.message
})

const mapDispatchToProps = {
  SignUpUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);