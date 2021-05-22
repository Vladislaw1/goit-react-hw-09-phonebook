import {createAction} from "@reduxjs/toolkit";

///////////////////REGISTER

export const registerRequest = createAction("auth/registerRequest")
export const registerSuccess = createAction("auth/registerSuccess")
export const registerError = createAction("auth/registerError")

//////////////////LOGIN

export const loginRequest = createAction("auth/loginRequest")
export const loginSuccess = createAction("auth/loginSuccess")
export const loginError = createAction("auth/loginError")

/////////////////LOGOUT

export const logoutRequest = createAction("auth/registerRequest")
export const logoutSuccess = createAction("auth/logoutSuccess")
export const logoutError = createAction("auth/logoutError")

///////////////////GETCURRENTUSER

export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest")
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess")
export const getCurrentUserError = createAction("auth/getCurrentUserError")

const authAction = {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
}

export default authAction;