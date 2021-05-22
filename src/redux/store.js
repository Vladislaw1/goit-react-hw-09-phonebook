import {configureStore,getDefaultMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./auth/auth-reducer"
import contactsReducer from "./contacts/contacts-reducer"
import todoReducer from "./todo/todo-reducer"

const middleware  = getDefaultMiddleware(thunk);

const store = configureStore({
    reducer:{
        auth: authReducer,
        contacts: contactsReducer,
        todo: todoReducer,
    },
    middleware
})
export default store;