import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from '../components/Form';
import MealsList from '../components/MealsList';
import MealView from '../components/MealView';

const Main: React.FC = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={MealsList} />
                <Route path="/description/:cuisine/:id" component={MealView} />
                <Route path="/form" component={Form} />
            </Switch>
        </main>
    )
}

export default Main;