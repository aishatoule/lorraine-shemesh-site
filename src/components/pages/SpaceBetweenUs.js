import React, { Component } from 'react';
import HomeImage from '../../images/01a. Accordion painting.jpg';
import tsbu2 from '../../images/01b. Accordion detail (head).jpeg';
import tsbu3 from '../../images/01c. Accordion detail (hand).jpeg';
import tsbu4 from '../../images/02a. Attached painting.jpg';
import tsbu5 from '../../images/02b. Attached detail (heads _ hands).jpg';
import tsbu6 from '../../images/02c. Attached detail (foot).jpg';
import tsbu7 from '../../images/03. Sway painting.jpg';
import tsbu8 from '../../images/04a. Hinge painting.jpg';
import tsbu9 from '../../images/04b Hinge detail (head).jpeg';
import tsbu10 from '../../images/04c. Hinge detail (feet).jpg';
import tsbu11 from '../../images/04d. Hinge detail (hand).jpeg';
import tsbu12 from '../../images/05a. The Space Between Us.jpg';
import tsbu13 from '../../images/05b. The Space Between Us detail (female head).jpg';
import tsbu14 from '../../images/06a. Inseparable painting.jpg';
import tsbu15 from '../../images/06b. Inseparable detail (male head).jpg';
import tsbu16 from '../../images/06c. Inseparable detail (female hands).jpg';
import tsbu17 from '../../images/07a. Riddle painting.jpg';
import tsbu18 from '../../images/07b. Riddle detail (center calf _ arm).jpg';
import tsbu19 from '../../images/08. Interlock painting.jpg';
import tsbu20 from '../../images/09. Enclosure painting.jpg';
import tsbu21 from '../../images/10. Puzzle painting.jpg';

class SpaceBetweenUs extends Component {

    render() {
        return (
            <div>
                {/* <h3 className="page-content-title">The Space Between Us</h3> */}
                <div className="image-grid-container">
                    <div className="column">
                        <img src={HomeImage} className="grid-image top-row" alt="The Space Between Us exhibition"/>
                        <img src={tsbu5} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu9} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu13} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu17} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu21} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                    <div className="column">
                        <img src={tsbu2} className="grid-image top-row" alt="The Space Between Us exhibition"/>
                        <img src={tsbu6} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu10} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu14} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu18} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                    <div className="column">
                        <img src={tsbu3} className="grid-image top-row" alt="The Space Between Us exhibition"/>
                        <img src={tsbu7} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu11} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu15} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu19} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                    <div className="column">
                        <img src={tsbu4} className="grid-image top-row" alt="The Space Between Us exhibition"/>
                        <img src={tsbu8} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu12} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu16} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu20} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpaceBetweenUs;