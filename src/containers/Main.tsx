import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../routes/ProtectedRoute';

import Form from '../components/Form';
import MealsList from '../components/MealsList';
import MealView from '../components/MealView';
import Login from '../components/Login';

const Main: React.FC = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={MealsList} />
                <Route path="/description/:cuisine/:id" component={MealView} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/form" component={Form} />
            </Switch>
        </main>
    )
}

export default Main;