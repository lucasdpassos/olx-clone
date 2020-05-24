import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import About from './pages/About/index';

export default () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
        </Switch>
    )
}