import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import Job from './components/JobDetail/Job'
import {Router,Route, browserHistory, IndexRoute} from 'react-router';
import Company from './components/CompanyDetail/Company'
import HomepageContainer from './components/Homepage/HomepageContainer'
import Search from './components/Search/SearchResult'
import Homepage from './components/Homepage/Homepage'
import reduxThunk from 'redux-thunk';
import Form from './components/AddJob/Form';
import ListCompany from './components/ListCompany/ListCompany'
import ListJob from './components/ListJob/ListJob'
import Profile from './components/User/Profile'

require('jquery');
window.jQuery = require('jquery');
window.$ = require('jquery');
require('materialize-css/dist/js/materialize.js');
require('materialize-css/js/init.js');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route component={HomepageContainer}>
                    <IndexRoute component={Homepage}/>
                    <Route path="search" component={Search}/>
                    <Route path="company"component={ListCompany}></Route>
                    <Route path="job"component={ListJob}></Route>
                </Route>
                <Route path="form" component={Form}/>
                <Route path="job/:id" component={Job}/>
                <Route path="company/:slug" component={Company}/>
                <Route path="user"component={Profile}></Route>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

