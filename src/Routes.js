import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Search from './core/Search';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/ejemplo" exact component={Search} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;