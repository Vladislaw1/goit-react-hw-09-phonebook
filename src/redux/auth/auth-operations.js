import axios from "axios"

import {
    getCurrentUserError,
    getCurrentUserRequest, getCurrentUserSuccess,
    loginError,
    loginRequest,
    loginSuccess,
    logoutError,
    logoutRequest,
    logoutSuccess,
    registerError,
    registerRequest,
    registerSuccess
} from "./auth-actions";
import {userToken} from "../token";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const register = infoUser => async dispatch => {
    dispatch(registerRequest())
    try {
        const {data} = await axios.post("/users/signup", infoUser)
        localStorage.setItem("userToken", data.token)

        let  localToken = localStorage.getItem("userToken")
        userToken.set(localToken)

        dispatch(registerSuccess(data))
    } catch (error) {
        dispatch(registerError(error.message))
    }
}

export const logIn = infoUser => async dispatch => {
    dispatch(loginRequest())
    try {
        const {data} = await axios.post("/users/login", infoUser)
        localStorage.setItem("userToken", data.token)

        let  localToken = localStorage.getItem("userToken")
        userToken.set(localToken)

        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginError(error.message))
    }
}

export const logout = () => async dispatch => {
    localStorage.setItem("userToken", "")
    dispatch(logoutRequest())
    try {

        await axios.post("/users/logout")
        userToken.unset()

        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutError(error.message))
    }
}

export const getCurrentUser = () => async (dispatch,getState) => {
    let  localToken = localStorage.getItem("userToken")

    if (!localToken){
        return;
    }
    userToken.set(localToken)
    dispatch(getCurrentUserRequest());
    try {
        const {data} = await axios.get("/users/current")
        dispatch(getCurrentUserSuccess(data))
    } catch (error) {
        dispatch(getCurrentUserError(error.message))
    }
}

