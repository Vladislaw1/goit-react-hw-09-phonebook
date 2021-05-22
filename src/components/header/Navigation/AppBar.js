import React from 'react';

import {useSelector} from "react-redux";

import SiteNav from "./SiteNav";
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

import {getIsAuthenticated} from "../../../redux/auth/auth-selectors";

function AppBar(){
    const isAuthenticated = useSelector(getIsAuthenticated)
    const styles = {
        header:{
            display: "flex",
            height: "70px",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid black"
        }
    }

    return (
        <header style={styles.header}>
            <SiteNav/>
            {isAuthenticated ? <UserMenu/> : <AuthNav/>}
        </header>
    );
};
export default AppBar;