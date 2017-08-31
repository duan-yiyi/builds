import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Lint} from 'react-router-dom';
import Cities from './views/Cities';

render((
    <Router>
        <div>
            <Route path="/" component={Cities} />
            <Route path="/cities" component={Cities} />
        </div>
    </Router>
), document.getElementById('root'));
