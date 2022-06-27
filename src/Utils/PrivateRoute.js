import React from "react";
import {Navigate, Route} from "react-router-dom";
import {getToken} from "./Common";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                !getToken() ? <Component {...props} />
                    : <Navigate to={{pathname: "/dashboard", state: {from: props.location}}}/>
            }}
        />
    )
}

export default PrivateRoute