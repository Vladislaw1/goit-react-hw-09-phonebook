import React,{useEffect,useState} from 'react';
import shortid from "shortid"
import {state } from "./initialState"
import {fields} from "./fields";
import {useDispatch, useSelector} from "react-redux";
import {allContacts} from "../../../redux/contacts/contacts-selectors";
import {addContact, fetchContacts} from "../../../redux/contacts/contacts-operations";

import add from "../../../add.png"

import styles from "./addContactForm.module.css"

function AddContactForm(){
    const dispatch = useDispatch()
    const [contact,setContact] = useState(state)
    const list = useSelector(allContacts)

    useEffect(()=>{
        dispatch(fetchContacts())
    },[dispatch])

    const handleChange = ({target}) => {
        const {name,value} = target;
        setContact(contact => {
            return{...contact,[name]: value}
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        const result = list.find(item => (item.name.toLowerCase() === contact.name.toLowerCase() || item.number === contact.number))

        result ? alert("Контакт существует!!!") : dispatch(addContact(contact))

        reset();
    }

    const reset = () =>{
        setContact({
            name: "",
            number: ""
        })
    }


        return (
            <div className={styles.formAdd}>
                <form onSubmit={handleSubmit}>

                    <input
                        className={styles.input}
                        value={contact.name}
                        {...fields.nameContact}
                        onChange={handleChange}
                    />

                    <input
                        className={styles.input}
                        value={contact.number}
                        {...fields.numberContact}
                        onChange={handleChange}
                    />

                    <button type="submit" className={styles.btnAdd}><img src={add} width={50}/></button>
                </form>
            </div>

        );
    }


export default AddContactForm;