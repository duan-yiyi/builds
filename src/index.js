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

// register service worker
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js', {scope: ''}).then((reg) => {
        if (reg.installing) {
            console.log('Service worker installing');
        } else if (reg.waiting) {
            console.log('Service worker installed');
        } else if (reg.active) {
            console.log('Service worker active');
        }
    }).catch((error) => {
        // registration failed
        console.log(`Registration failed with ${error}`);
    });
}
