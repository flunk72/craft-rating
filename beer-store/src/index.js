import React from 'react';
import ReactDOM from 'react-dom';
// доступ компонентов редакс-стору
import  { Provider } from 'react-redux';
// реализация роутинга
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import ErrorBoundry from './components/ErrorBoundry';
// получаем доступ к данным
import CraftService from './services/CraftService';
import { CraftServiceProvider } from './components/CraftServiceContext'
import store from './store.js'

const craftService = new CraftService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <CraftServiceProvider value={craftService}>
        <Router>
          <App/>
        </Router>
      </CraftServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'))
