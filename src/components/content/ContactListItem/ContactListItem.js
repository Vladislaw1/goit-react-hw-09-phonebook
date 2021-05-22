import React from 'react';
import {deleteContact} from "../../../redux/contacts/contacts-operations";
import {useDispatch, useSelector} from "react-redux";
import {allContacts, filterSel} from "../../../redux/contacts/contacts-selectors";
import remove from "../../../remove.png"

import styles from "./ContactListItem.module.css"

const ContactListItem = () => {
    const dispatch = useDispatch()
    const list = useSelector(allContacts)
    const filter = useSelector(filterSel)


    const normalozeFilter = filter.toLowerCase()

    const filterContacts = list.filter(({ name,number }) =>  name.toLowerCase().includes(normalozeFilter) || number.includes(normalozeFilter))

    const contactEl = filterContacts.map(({id,name,number}) => {
        return <li key={id} className={styles.contactListItem}>
            <p>{name} |=> {number}</p>
            <button type="button" onClick={() => dispatch(deleteContact(id))} className={styles.btnDelete}><img src={remove} width={20}/></button>
        </li>
    })
    return (
        <>
            {contactEl}
        </>

    );
};

export default ContactListItem;