import {combineReducers} from "@reduxjs/toolkit";

import {createReducer} from "@reduxjs/toolkit";
import {
    addContactError,
    addContactSuccess, deleteContactError,
    deleteContactSuccess, fetchContactsError,
    fetchContactsRequest,
    fetchContactsSuccess,
    filterAction
} from "./contacts-actions";

export const allContacts = createReducer([],{
    [fetchContactsSuccess]:  (state, {payload}) => [...payload],
    [addContactSuccess]: (state, {payload}) => {
        return [...state, payload]
    },
    [deleteContactSuccess]: (state,{payload}) => {
        const newList =  [...state];
        return newList.filter(item => item.id !== payload)
    }
})

export const filter = createReducer("",{
    [filterAction]: (_,{payload}) => payload
})
export const loading = createReducer(false,{
    [fetchContactsRequest]: ()=> true,
    [fetchContactsSuccess]: () => false
})
export const error = createReducer(null,{
    [fetchContactsError]: (_,{payload}) => payload,
    [addContactError()]: (_,{payload}) => payload,
    [deleteContactError]: (_,{payload}) => payload,
    [fetchContactsSuccess]: () => null,
    [addContactSuccess]: () => null,
    [deleteContactSuccess]: () => null
})

export default combineReducers({
    list:allContacts,
    filter ,
    loading,
    error
})