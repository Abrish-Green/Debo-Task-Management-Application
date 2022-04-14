import { SIGN_UP, LOGIN,LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, GET_AUTH_USER} from './constants'
import axios from 'axios'

export const Login = (data) => dispatch => {
    const response = axios.post('/api/user/login', data);
    let state = {}
    response.then((res)=>{
        let data = res.data
        if(data){
            if(data.status == 'ok'){
                state = {
                    "IsLoggedIn": true,
                    "Id":data.Id,
                    "IsAdmin":data.IsAdmin,
                    "token": data.jwt_token
                }
                localStorage.setItem("token",data.jwt_token)
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: state,
                })
            }else{
                  state = {
                    "IsLoggedIn": false,
                    "Id":null,
                    "IsAdmin":null,
                    "token": null
                }
                localStorage.setItem("token","")
                dispatch({
                    type: LOGIN_FAIL,
                    payload: state
                }) 
            }
        }
    })
    
}

