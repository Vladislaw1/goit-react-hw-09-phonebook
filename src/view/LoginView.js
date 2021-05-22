import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import shortid from "shortid";
import {fields} from "./fields";
import {state} from "./state/InitialState";

import styles from "./styles/LoginView.module.css"

import * as authOperation from "../redux/auth/auth-operations";
import {Link} from "react-router-dom";

function LoginView() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(state.login)

    const handleChange = ({target}) => {
        const {name, value} = target
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperation.logIn(user))
        reset()
    }

    const reset = () => {
        setUser({...state.login})
    }

    const inputEmailId = shortid.generate();
    const inputPassId = shortid.generate();

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit} className={styles.signin}>

                {/*<label htmlFor={inputEmailId}> Email</label>*/}
                <input
                    className={styles.email}
                    id={inputEmailId}
                    value={user.email}
                    {...fields.userEmail}
                    onChange={handleChange}
                />

                {/*<label htmlFor={inputPassId}>Password</label>*/}
                <input
                    className={styles.pass}
                    id={inputPassId}
                    value={user.password}
                    {...fields.userPass}
                    onChange={handleChange}

                />

                <button type="submit">Go</button>
                <p> <Link to="/register" >Ещё нет аккаунта ? Зарегистрируйся!</Link></p>
            </form>
        </div>
    );
}

export default LoginView;