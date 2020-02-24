import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import SpaceBetweenUs from './components/pages/SpaceBetweenUs';
import NotFound from './components/pages/PageNotFound';
import Contact from './components/pages/Contact';
import News from './components/pages/News';
import Biography from './components/pages/Biography';
import Video from './components/pages/Video';
import Words from './components/pages/Words';
import Exhibition from './components/pages/Exhibitions';

const routes = (
  <Router>
    <div className="site-content">
      <Navigation />
      <div className="page-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/spaceBetweenUs" component={SpaceBetweenUs} />
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={News} />
          <Route path="/biography" component={Biography} />
          <Route path="/video" component={Video} />
          <Route path="/words" component={Words} />
          <Route path="/exhibition" component={Exhibition} />
          <Route component={NotFound} />
        </Switch> 
      </div>
    </div>
  </Router>
)

export default routes;

ReactDOM.render(routes, document.getElementById('root'))