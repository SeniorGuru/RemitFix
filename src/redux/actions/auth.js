import ActionTypes from './actionTypes' ;
import * as config from '../../static/constants';

import axios from 'axios' ;
import { authorization, setCookie } from '../../utils/helper';

export const SignUpUser = (formState, navigate) => async dispatch => {
    try {
        let res = await axios.post(`${config.PRIVATE_REMITFIX_API}auth/signup` , {
            email : formState.values.email,
            password : formState.values.password,
            country : formState.values.country,
        }) ;

        if(res.status === 200) {
            return navigate('/auth/signin' , formState.values.email) ;
        }

    } catch(err) {
        console.log(err);
        // return dispatch({
        //     type : ActionTypes.SignUpUserError ,
        //     payload : err.response.data.message
        // })
    }
}

export const SignInUser = (formState, navigate) => async dispatch => {
    try {
        let res = await axios.post(`${config.PRIVATE_REMITFIX_API}auth/signin` , {
            email : formState.values.email,
            password : formState.values.password,
            country : formState.values.country,
        }) ;

        if(res.status === 200) {
            setCookie("access_token", res.access_token);

            dispatch({
                type : ActionTypes.SignInUser,
                payload : res.data
            })
            return navigate('/private/business' , formState.values.email) ;
        }

    } catch(err) {
        console.log(err);
    }
}

export const AddRecipient = (data, navigate) => async dispatch => {
    try {
        const header = authorization();

        let res = await axios.post(`${config.PRIVATE_REMITFIX_API}recipient/add` , data , header);

        if(res.config.status === 200){
            console.log(res.data);
        }
    }catch(err) {
        console.log(err);
    }
}