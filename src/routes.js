import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import SpaceBetweenUs from './components/pages/SpaceBetweenUs';

const routes = (
  <Router>
    <div>
      <Navigation />
      <Route path="/" component={Home} />
      <Route path="/spaceBetweenUs" component={SpaceBetweenUs} />
    </div>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))