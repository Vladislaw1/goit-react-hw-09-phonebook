import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";

import {
    getCurrentUserError,
    getCurrentUserSuccess,
    loginSuccess,
    logoutError,
    logoutSuccess,
    registerError,
    registerSuccess
} from "./auth-actions";

const initialUserState = {name: null, email: null};

export const user = createReducer(initialUserState, {
    [registerSuccess]: (_, {payload}) => payload.user,
    [loginSuccess]: (_, {payload}) => payload.user,
    [logoutSuccess]: (_, {payload}) => initialUserState,
    [getCurrentUserSuccess]: (_,{payload}) => payload
})
export const token = createReducer(localStorage.getItem("userToken"), {
    [registerSuccess]: (_, {payload}) => payload.token,
    [loginSuccess]: (_, {payload}) => payload.token,
    [logoutSuccess]: () => null,
})
export const error = createReducer(null, {
    [registerError]: (_, {payload}) => payload,
    [loginSuccess]: (_, {payload}) => payload,
    [logoutError]: (_, {payload}) => payload,
    [getCurrentUserError]: (_, {payload}) => payload,
    [registerSuccess]: () => null,
    [loginSuccess]: () => null,
    [logoutSuccess]: () => null,
    [getCurrentUserSuccess]: () => null
})

export default combineReducers({
    user,
    token,
    error
})