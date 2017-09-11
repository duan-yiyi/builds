import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import routeConfig from './routeConfig';
import './index.styl';

const renderApp = () => {
    ReactDOM.render((
        <AppContainer>
            {routeConfig}
        </AppContainer>
    ), document.getElementById('app'));
};

if (module.hot) {
    module.hot.accept();
    renderApp();
} else {
    renderApp();
}
