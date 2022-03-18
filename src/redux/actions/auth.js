import ActionTypes from './actionTypes' ;
import * as config from '../../static/constants';

import axios from 'axios' ;

export const SignUpUser = (formState, navigate) => async dispatch => {
    try {
        console.log("aaaaa");
        navigate('/private/customer' ) ;
        // let res = await axios.post(`${config.PRIVATE_REMITFIX_API}auth/signup` , {
        //     email : formState.values.email,
        //     password : formState.values.password,
        //     country : formState.values.country,
        // }) ;

        // if(res.status === 200) {
        //     return navigate('/signin' , formState.values.email) ;
        // }

    } catch(err) {
        return dispatch({
            type : ActionTypes.SignUpUserError ,
            payload : err.response.data.message
        })
    }
}
