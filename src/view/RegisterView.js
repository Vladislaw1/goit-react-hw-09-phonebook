import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import shortid from "shortid"

import {fields} from "./fields"
import {state} from "./state/InitialState";

import * as authOperation from "../redux/auth/auth-operations";
import styles from "./styles/RegisteView.module.css";

function RegisterView() {
    const dispatch = useDispatch()
    const [user, setUser] = useState(state.register)

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUser({...user, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperation.register(user))
        reset()
    }

    const reset = () => {
        setUser({
            name: "",
            email: "",
            password: ""
        })
    }

    const inputNameId = shortid.generate();
    const inputEmailId = shortid.generate();
    const inputPassId = shortid.generate();

    return (
        <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.signin}>

            <input
                className={styles.name}
                id={inputNameId}
                value={user.name}
                {...fields.userName}
                onChange={handleChange}
            />

            <input
                className={styles.email}
                id={inputEmailId}
                value={user.email}
                {...fields.userEmail}
                onChange={handleChange}
            />

            <input
                className={styles.pass}
                id={inputPassId}
                value={user.password}
                {...fields.userPass}
                onChange={handleChange}
            />

            <button type="submit">Reg</button>
           <p><Link to="/login" className="flipper">Уже зарегистрированы? Войти.</Link></p>
        </form>
            </div>
    );
}


export default RegisterView;