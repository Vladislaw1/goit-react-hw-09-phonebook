import React from 'react';
import ContactListItem from "../ContactListItem";
import Filter from "../Filter/Filter";
import styles from "./ContactList.module.css"

function ContactList() {
    return (
        <div>
            <Filter/>
            <ul className={styles.contactList}>
                <ContactListItem/>
            </ul>
        </div>

    );
};

export default ContactList;