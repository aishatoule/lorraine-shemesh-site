// import '../components/App';
import React from 'react';
import '../index.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation'
import Home from './pages/Home';
import SpaceBetweenUs from './pages/Paint/SpaceBetweenUs';
import Intersections from './pages/Paint/Intersections';
import NotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
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
import paperPools from './pages/Paper/PaperPools';
import paperSBU from './pages/Paper/PaperSBU';
import paperInt from './pages/Paper/PaperInt';
import paperObj from './pages/Paper/PaperObj';
import HomeAlternate from './pages/HomeTest2';
import Biblio_balakian from './pages/IndividualWordsPages/Biblio_balakian';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="site-content">
          <Navigation />
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/homeAlternate" component={HomeAlternate} />
              <Route path="/spaceBetweenUs" component={SpaceBetweenUs} />
              <Route path="/intersections" component={Intersections} />
              <Route path="/insideOut" component={InsideOut} />
              <Route path="/breakingTheSurface" component={BreakingTheSurface} />
              <Route path="/liquidStates" component={liquidStates} />
              <Route path="/waterWorks" component={WaterWorks} />
              <Route path="/paintedPools" component={PaintedPools} />
              <Route path="/paperPools" component={paperPools} />
              <Route path="/paperSpaceBetweenUs" component={paperSBU} />
              <Route path="/paperIntersections" component={paperInt} />
              <Route path="/paperObjects" component={paperObj} />
              <Route path="/contact" component={Contact} />
              <Route path="/biography" component={Biography} />
              <Route path="/video" component={Video} />
              <Route path="/words" component={Words} />
              <Route path="/biblio_balakian" component={Biblio_balakian} />
              <Route path="/exhibition" component={Exhibition} />
              {/* <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} /> */}

              <Route path="/:id" component={IndividualImage} />
              <Route component={NotFound} />
            </Switch> 
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;