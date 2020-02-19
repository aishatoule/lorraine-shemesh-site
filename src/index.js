import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './css/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './components/Navigation';
import SpaceBetweenUs from './components/pages/SpaceBetweenUs';
import NotFound from './components/pages/PageNotFound';


const routes = (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/spaceBetweenUs" component={SpaceBetweenUs} />
        <Route component={NotFound} />
    </Switch> 
    </div>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
