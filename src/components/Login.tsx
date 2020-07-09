import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../authentication/Authenticate';
const Login: React.FC = (props: any) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);
    let { from } = props.location.state || { from: { pathname: '/' } };

    const login = () => {
        fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        })
    }

    return redirectToReferrer ? <Redirect to={from.pathname} /> : <button onClick={login} className="btn btn-success">Login</button>
}

export default Login;