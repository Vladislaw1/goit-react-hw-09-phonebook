import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {userName} from "../../../../redux/auth/auth-selectors";

import defAvatar from '../../../../avatar.png'
import {logout} from "../../../../redux/auth/auth-operations";

function UserMenu(){
    const dispatch = useDispatch()
    const styles = {
        userMenu:{
            display: "flex",
            alignItems: "center",
        },
        img:{
            border: "2px solid black",
        }
    }
    const name = useSelector(userName)

    return (
        <div style={styles.userMenu}>
            <img style={styles} src={defAvatar} alt="" width={50}/>
            <span>Hello , {name} </span>
            <button type="button" onClick={()=> dispatch(logout())}>Logout</button>
        </div>
    );
};

export default UserMenu;