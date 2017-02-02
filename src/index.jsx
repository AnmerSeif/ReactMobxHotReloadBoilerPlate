import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './view/App';
import AppState from './data/AppState';

const appState = new AppState();


render(
<AppContainer>
  <App appState={appState} />
</AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./view/App', () => {
      const NextApp = require('./view/App').default;

      render(
      <AppContainer>
        <App appState={appState} />
      </AppContainer>, document.getElementById('root'));
    });
}
