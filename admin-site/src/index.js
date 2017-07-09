import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import allReducers from './reducers/index'

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() =>
    console.log(store.getState())
);


ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes} history={hashHistory} />
    </Provider>,
  document.getElementById('root')
);
