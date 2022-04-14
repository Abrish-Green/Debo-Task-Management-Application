import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT,SIGN_UP,GET_AUTH_USER } from '../actions/constants'

const initalState = {
    "IsLoggedIn": false,
    "Id":null,
    "IsAdmin":null,
    "token": null
}

export default function(state=initalState, action){
    const { type, payload } = action;
    switch(type){
        case LOGIN_SUCCESS:
            return  payload
        case LOGIN_FAIL:
            return payload   
        default: 
            return state;
    }
}