import React, {useState, memo} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import AddContactForm from "../components/content/addContactForm/addContactForm";
import {allContacts, getIsAuthenticated, loading} from "../redux/contacts/contacts-selectors";

import ContactList from "../components/content/ContactList";

function ContactView() {
    const [open, setOpen] = useState(false);
    const isAuthenticated = useSelector(state => getIsAuthenticated(state))
    const list = useSelector(state => allContacts(state))
    const isLoading = useSelector(loading)

    const contentPage = (isAuthenticated && (list.length > 0) ? <ContactList/> : <p>Contact list is empty!!!</p>)
    const contactList = isLoading ? <p>.....Loading</p> : contentPage
    const text = open ? "Close contact" : "Open contact"

    return (
        <>
            <AddContactForm/>
            <button type="button" onClick={() => setOpen(!open)}>{text}</button>
            {open && contactList}
        </>
    );
}

export default memo(ContactView);
