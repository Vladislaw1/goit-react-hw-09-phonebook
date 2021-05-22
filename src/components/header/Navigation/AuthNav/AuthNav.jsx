import React from 'react';
import {NavLink} from "react-router-dom";

import styles from "./AuthNav.module.css"

const AuthNav = () => {
    return (
            <div>
                <NavLink exact to="/register" className={styles.link} activeClassName={styles.activeLink}> Регистрация</NavLink>
                <NavLink exact to="/login" className={styles.link} activeClassName={styles.activeLink}>Логин</NavLink>
            </div>
    );
}

export default AuthNav;