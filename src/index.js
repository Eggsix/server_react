import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Home from './components/home';
import reducers from './reducers';

import './assets/css/font-awesome.min.css';
import './assets/css/skel.css';
import './assets/css/style-large.css';
import './assets/css/style-medium.css';
import './assets/css/style-small.css';
import './assets/css/style-xlarge.css';
import './assets/css/style-xsmal.css';
import './assets/css/style.css';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory} >
  		<Route path="/" component={App}>
        <IndexRoute component={Home} />
  			<Route path="signin" component={Signin} />
  			<Route path="signout" component={Signout} />
  			<Route path="signup" component={Signup} />
  		</Route>
    </Router>
  </Provider>
  , document.querySelector('.entry'));
