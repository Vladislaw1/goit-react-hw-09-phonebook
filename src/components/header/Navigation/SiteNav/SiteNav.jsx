import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsAuthenticated} from "../../../../redux/auth/auth-selectors";
import styles from "./SiteNav.module.css"


const SiteNav = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    return (
            <div>
                <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}> Главная</NavLink>
                {isAuthenticated &&
                <NavLink exact to="/contacts" className={styles.link} activeClassName={styles.activeLink}>Контакты</NavLink>
                }
                {isAuthenticated &&
            <NavLink exact to="/todo" className={styles.link} activeClassName={styles.activeLink}>Заметки</NavLink>
                }
            </div>
    );
};

export default SiteNav;