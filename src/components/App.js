import React from 'react';
import '../index.scss';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from "simple-react-lightbox";
import Navigation from './navigation/Navigation'
import NotFound from './pages/PageNotFound';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Biography from './pages/Biography';
import Video from './pages/Video';
import News from './pages/News';
import Studio from './pages/Studio';
import Exhibitions from './pages/Exhibitions';
import Exhibition_onbalance_nyc from './pages/Exhibitions/Exhibition_onbalance_nyc';
import Exhibition_tsbu_nyc from './pages/Exhibitions/Exhibition_tsbu_nyc';
import Exhibition_tsbu_sf from './pages/Exhibitions/Exhibition_tsbu_sf';
import Exhibition_butler from './pages/Exhibitions/Exhibition_butler';
import Exhibition_intersections from './pages/Exhibitions/Exhibition_intersections';
import Exhibition_insideout from './pages/Exhibitions/Exhibition_insideout';
import IndividualPhoto from './pages/IndividualPhoto';
import OnBalance from './pages/Paint/OnBalance';
import HoldingOn from './pages/Paint/HoldingOn';
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
import biblio_balakian from './pages/Words/biblio_balakian';
import biblio_zona_2016 from './pages/Words/biblio_zona_2016';
import biblio_purcell from './pages/Words/biblio_purcell';
import biblio_davis from './pages/Words/biblio_davis';
import biblio_mccarthy from './pages/Words/biblio_mccarthy';
import biblio_mccormack2 from './pages/Words/biblio_mccormack2';
import biblio_cheng from './pages/Words/biblio_cheng';
import biblio_shemesh1 from './pages/Words/biblio_shemesh1';
import biblio_kennedy from './pages/Words/biblio_kennedy';
import biblio_zona from './pages/Words/biblio_zona';
import biblio_stone from './pages/Words/biblio_stone';
import biblio_goodman from './pages/Words/biblio_goodman';
import biblio_mccormack from './pages/Words/biblio_mccormack';
import biblio_little from './pages/Words/biblio_little';
import biblio_bascove from './pages/Words/biblio_bascove';
import biblio_stone_pool_image from './pages/Words/ImagePages/biblio_stone_pool_image';
import biblio_stone_cakes from './pages/Words/ImagePages/biblio_stone_cakes';
import biblio_stone_bagels_and_lox from './pages/Words/ImagePages/biblio_stone_bagels_and_lox';
import biblio_stone_donuts from './pages/Words/ImagePages/biblio_stone_donuts';
import biblio_stone_pastries from './pages/Words/ImagePages/biblio_stone_pastries';
import biblio_goodman_study from './pages/Words/ImagePages/biblio_goodman_study';
import biblio_little_shoes from './pages/Words/ImagePages/biblio_little_shoes';
import biblio_little_three_hearts from './pages/Words/ImagePages/biblio_little_three_hearts';
import biblio_little_menagerie from './pages/Words/ImagePages/biblio_little_menagerie';
import biblio_little_cyclone from './pages/Words/ImagePages/biblio_little_cyclone';
import biblio_video_ohern from './pages/Words/biblio_video_ohern';
import biblio_video_hoadley from './pages/Words/biblio_video_hoadley';

function App() {
  return (
    <Router>
      <div className="App">
        <SimpleReactLightbox>
        <div className="site-content">
          <Navigation />
          <div className="page-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/OnBalance/:image?" component={OnBalance} />
              <Route path="/holdingOn/:image?" component={HoldingOn} />
              <Route path="/spaceBetweenUs/:image?" component={SpaceBetweenUs} />
              <Route path="/intersections/:image?" component={Intersections} />
              <Route path="/insideOut/:image?" component={InsideOut} />
              <Route path="/breakingTheSurface/:image?" component={BreakingTheSurface} />
              <Route path="/liquidStates/:image?" component={liquidStates} />
              <Route path="/waterWorks/:image?" component={WaterWorks} />
              <Route path="/paintedPools/:image?" component={PaintedPools} />
              <Route path="/paperPools/:image?" component={paperPools} />
              <Route path="/paperSpaceBetweenUs/:image?" component={paperSBU} />
              <Route path="/paperIntersections/:image?" component={paperInt} />
              <Route path="/paperObjects/:image?" component={paperObj} />
              <Route path="/clayHandBuilt/:image?" component={clayHB} />
              <Route path="/clayWheelThrown/:image?" component={clayWT} />
              <Route path="/claySlipcast/:image?" component={claySC} />
              <Route path="/contact" component={Contact} />
              <Route path="/biography" component={Biography} />
              <Route path="/video" component={Video} />
              <Route path="/news" component={News} />
              <Route path="/studio/:image?" component={Studio} />
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
              <Route path="/biblio_goodman_study" component={biblio_goodman_study} />
              <Route path="/biblio_stone_pool_image" component={biblio_stone_pool_image} />
              <Route path="/biblio_stone_cakes" component={biblio_stone_cakes}/>
              <Route path="/biblio_stone_donuts" component={biblio_stone_donuts}/>
              <Route path="/biblio_stone_pastries" component={biblio_stone_pastries}/>
              <Route path="/biblio_stone_bagels_and_lox" component={biblio_stone_bagels_and_lox}/>
              <Route path="/biblio_mccormack" component={biblio_mccormack} />
              <Route path="/biblio_little" component={biblio_little} />
              <Route path="/biblio_little_shoes" component={biblio_little_shoes} />
              <Route path="/biblio_little_three_hearts" component={biblio_little_three_hearts} />
              <Route path="/biblio_little_menagerie" component={biblio_little_menagerie} />
              <Route path="/biblio_little_cyclone" component={biblio_little_cyclone} />
              <Route path="/biblio_video_ohern" component={biblio_video_ohern} />
              <Route path="/biblio_video_hoadley" component={biblio_video_hoadley} />
              <Route path="/exhibitions" component={Exhibitions} />
              <Route path="/exhibition_onbalance_nyc/:image?" component={Exhibition_onbalance_nyc} />
              <Route path="/exhibition_tsbu_nyc/:image?" component={Exhibition_tsbu_nyc} />
              <Route path="/exhibition_tsbu_sf/:image?" component={Exhibition_tsbu_sf} />
              <Route path="/exhibition_butler/:image?" component={Exhibition_butler} />
              <Route path="/exhibition_intersections/:image?" component={Exhibition_intersections} />
              <Route path="/Exhibition_insideout/:image?" component={Exhibition_insideout} />              
              <Route path="/exh/:id" component={IndividualPhoto} />
              <Route path="/exh_sshow/:id" component={IndividualPhoto} />
              <Route component={NotFound} />
            </Switch> 
          </div>
        </div>
        </SimpleReactLightbox>
      </div>
    </Router>
  );
}

export default App;