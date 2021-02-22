import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Persons from './components/Persons';
import PersonDetailedInfo from './components/PersonDetailedInfo';
import { Navbar } from './components/Navbar';

export const AppRouter = () => {

    return (
        <div>
            <Router>
                <Navbar/>
                <div>
                    <Switch>
                        <Route exact path="/characters" component={Persons} />
                        <Route exact path="/characters/:id" component={PersonDetailedInfo} />
                        <Redirect to="/characters"/>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default AppRouter;