import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from '../authentication/Authenticate';
const ProtectedRoute = ({ component, ...rest }: any) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated ?
            React.createElement(component, props) :
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
);

export default ProtectedRoute;