import {createAction} from "@reduxjs/toolkit";

///////////////////FETCH

export const fetchContactsRequest = createAction("auth/fetchContactsRequest")
export const fetchContactsSuccess = createAction("auth/fetchContactsSuccess")
export const fetchContactsError = createAction("auth/fetchContactsError")

//////////////////ADD

export const addContactRequest = createAction("auth/addContactRequest")
export const addContactSuccess = createAction("auth/addContactSuccess")
export const addContactError = createAction("auth/addContactError")

/////////////////DELETE

export const deleteContactRequest = createAction("auth/deleteContactRequest")
export const deleteContactSuccess = createAction("auth/deleteContactSuccess")
export const deleteContactError = createAction("auth/deleteContactError")
////////////////FILTER
export const filterAction = createAction("auth/filterAction")

const contactAction = {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
}

export default contactAction;