import {Suspense} from "react";
import {BrowserRouter as Router, Switch,} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

import HomeView from "./view/HomeView"
import ContactView from "./view/ContactView"
import RegisterView from "./view/RegisterView"
import LoginView from "./view/LoginView"
import TodoView from "./view/TodoView";

import Header from "./components/header";

import {getCurrentUser} from "./redux/auth/auth-operations"
import PrivetRoute from "./PrivetRoute";
import PublicRoute from "./PublicRoute";

function Contacts() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrentUser())
    }, [])

    return (
        <>
            <Header/>
            <Suspense fallback={<p>....Loading</p>}>
                <Switch>
                    <PublicRoute exact path="/" component={HomeView} redirectTo="/login"/>
                    <PrivetRoute exact path="/contacts" component={ContactView} redirectTo="/login"/>
                    <PrivetRoute exact path="/todo" component={TodoView} redirectTo="/login"/>
                    <PublicRoute exact path="/register" restricted component={RegisterView} redirectTo={"/"}/>
                    <PublicRoute exact path="/login" restricted component={LoginView} redirectTo={"/"}/>
                </Switch>
            </Suspense>
        </>
    );
}

export default Contacts;
