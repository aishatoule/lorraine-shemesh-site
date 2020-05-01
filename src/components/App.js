// import '../components/App';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import '../index.scss';
import { Route, Switch, BrowserRouter as Router, useParams } from 'react-router-dom';
import Navigation from './Navigation'
import Home from './pages/Home';
import SpaceBetweenUs from './pages/Paint/SpaceBetweenUs';
import NotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import News from './pages/News';
import Biography from './pages/Biography';
import Video from './pages/Video';
import Words from './/pages/Words';
import Exhibition from './pages/Exhibitions';
import IndividualImage from './pages/IndividualImage';
import InsideOut from './pages/Paint/InsideOut';
import BreakingTheSurface from './pages/Paint/BreakingTheSurface';
import liquidStates from './pages/Paint/LiquidStates';
import WaterWorks from './pages/Paint/WaterWorks';
import PaintedPools from './pages/Paint/PaintedPools';
import HomeAlternate from './pages/HomeTest2';

function App() {
  return (
    <div className="App">
          <div className="site-content">
            <Navigation />
            <div className="page-content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/homeAlternate" component={HomeAlternate} />
                <Route path="/spaceBetweenUs" component={SpaceBetweenUs} />
                <Route path="/insideOut" component={InsideOut} />
                <Route path="/breakingTheSurface" component={BreakingTheSurface} />
                <Route path="/liquidStates" component={liquidStates} />
                <Route path="/waterWorks" component={WaterWorks} />
                <Route path="/paintedPools" component={PaintedPools} />
                
                <Route path="/contact" component={Contact} />
                <Route path="/news" component={News} />
                <Route path="/biography" component={Biography} />
                <Route path="/video" component={Video} />
                <Route path="/words" component={Words} />
                <Route path="/exhibition" component={Exhibition} />
                <Route path="/:id" component={IndividualImage} />
                <Route component={NotFound} />
              </Switch> 
            </div>
          </div>
    </div>
  );
}

export default App;