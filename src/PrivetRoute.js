import React from 'react';
import {Route,Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsAuthenticated} from "./redux/auth/auth-selectors";

const PrivetRoute = ({component: Component, redirectTo,...routeProps}) => {
        const isAuthenticated = useSelector(getIsAuthenticated);
            return (
                    <Route {...routeProps} render={props => isAuthenticated ?<Component {...props}/> : <Redirect to={redirectTo} /> } />
                )
};

export default PrivetRoute;