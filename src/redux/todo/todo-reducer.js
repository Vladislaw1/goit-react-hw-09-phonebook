import React from 'react';
import {createReducer} from "@reduxjs/toolkit";
import {combineReducers} from "redux";

export const todo = createReducer([],{})
export const error = createReducer([],{})
export const loading = createReducer([],{})

export default combineReducers({
    todo,
    error,
    loading
});