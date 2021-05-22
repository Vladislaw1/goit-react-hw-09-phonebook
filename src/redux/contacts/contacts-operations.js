import axios from "axios";

import {
    addContactError,
    addContactRequest,
    addContactSuccess,
    deleteContactError,
    deleteContactRequest,
    deleteContactSuccess,
    fetchContactsError,
    fetchContactsRequest,
    fetchContactsSuccess
} from "./contacts-actions";
import {userToken} from "../token";

export const fetchContacts = () => async dispatch => {

    let  localToken = localStorage.getItem("userToken")
    userToken.set(localToken)

    dispatch(fetchContactsRequest())
    try {
        const {data} = await axios.get("/contacts")
        dispatch(fetchContactsSuccess(data))
    } catch (error) {
        dispatch(fetchContactsError(error.message))
    }
}

export const addContact = infoUser => async dispatch => {
    dispatch(addContactRequest())
    try {
        const {data} = await axios.post("/contacts", infoUser)
        dispatch(addContactSuccess(data))
    } catch (error) {
        dispatch(addContactError(error.message))
    }
}

export const deleteContact = contactId => async dispatch => {
    dispatch(deleteContactRequest())
    try {
        await axios.delete(`/contacts/${contactId}`)
        dispatch(deleteContactSuccess(contactId))
    } catch (error) {
        dispatch(deleteContactError(error.message))
    }
}

export const contactOperation = {
    fetchContacts,
    addContact,
    deleteContact,
}