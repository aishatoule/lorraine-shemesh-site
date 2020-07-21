// import '../components/App';
import React from 'react';
import '../index.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Navigation'
import NotFound from './pages/PageNotFound';
import Home from './pages/Home';
import HomeAlternate from './pages/HomeTest2';
import Contact from './pages/Contact';
import Biography from './pages/Biography';
import Video from './pages/Video';
import Exhibition from './pages/Exhibitions';
import IndividualImage from './pages/IndividualImage';
import SpaceBetweenUs from './pages/Paint/SpaceBetweenUs';
import Intersections from './pages/Paint/Intersections';
import InsideOut from './pages/Paint/InsideOut';
import BreakingTheSurface from './pages/Paint/BreakingTheSurface';
import liquidStates from './pages/Paint/LiquidStates';
import WaterWorks from './pages/Paint/WaterWorks';
import PaintedPools from './pages/Paint/PaintedPools';
import paperPools from './pages/Paper/PaperPools';
import paperSBU from './pages/Paper/PaperSBU';
import paperInt from './pages/Paper/PaperInt';
import paperObj from './pages/Paper/PaperObj';
import clayHB from './pages/Clay/ClayHB';
import clayWT from './pages/Clay/ClayWT';
import claySC from './pages/Clay/ClaySC';
import Words from './/pages/Words';
import biblio_balakian from './pages/IndividualWordsPages/biblio_balakian';
import biblio_zona_2016 from './pages/IndividualWordsPages/biblio_zona_2016';
import biblio_purcell from './pages/IndividualWordsPages/biblio_purcell';
import biblio_davis from './pages/IndividualWordsPages/biblio_davis';
import biblio_mccarthy from './pages/IndividualWordsPages/biblio_mccarthy';
import biblio_mccormack2 from './pages/IndividualWordsPages/biblio_mccormack2';
import biblio_cheng from './pages/IndividualWordsPages/biblio_cheng';
import biblio_shemesh1 from './pages/IndividualWordsPages/biblio_shemesh1';
import biblio_kennedy from './pages/IndividualWordsPages/biblio_kennedy';
import biblio_zona from './pages/IndividualWordsPages/biblio_zona';
import biblio_stone from './pages/IndividualWordsPages/biblio_stone';
import biblio_goodman from './pages/IndividualWordsPages/biblio_goodman';
import biblio_mccormack from './pages/IndividualWordsPages/biblio_mccormack';
import biblio_little from './pages/IndividualWordsPages/biblio_little';
import biblio_bascove from './pages/IndividualWordsPages/biblio_bascove';

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
              <Route path="/clayHandBuilt" component={clayHB} />
              <Route path="/clayWheelThrown" component={clayWT} />
              <Route path="/claySlipcast" component={claySC} />
              <Route path="/contact" component={Contact} />
              <Route path="/biography" component={Biography} />
              <Route path="/video" component={Video} />
              <Route path="/words" component={Words} />
              <Route path="/biblio_balakian" component={biblio_balakian} />
              <Route path="/biblio_zona_2016" component={biblio_zona_2016} />
              <Route path="/biblio_purcell" component={biblio_purcell} />
              <Route path="/biblio_bascove" component={biblio_bascove} />
              <Route path="/biblio_davis" component={biblio_davis} />
              <Route path="/biblio_mccarthy" component={biblio_mccarthy} />
              <Route path="/biblio_mccormack2" component={biblio_mccormack2} />
              <Route path="/biblio_cheng" component={biblio_cheng} />
              <Route path="/biblio_shemesh1" component={biblio_shemesh1} />
              <Route path="/biblio_kennedy" component={biblio_kennedy} />
              <Route path="/biblio_zona" component={biblio_zona} />
              <Route path="/biblio_stone" component={biblio_stone} />
              <Route path="/biblio_goodman" component={biblio_goodman} />
              <Route path="/biblio_mccormack" component={biblio_mccormack} />
              <Route path="/biblio_little" component={biblio_little} />
              
              <Route path="/exhibition" component={Exhibition} />
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