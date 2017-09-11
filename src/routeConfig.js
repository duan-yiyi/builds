import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Cities from './views/Cities';

const routeConfig = (
    <Router>
        <div>
            <Route exact path="/cities" component={Cities}/>
        </div>
    </Router>
);

export default routeConfig;
