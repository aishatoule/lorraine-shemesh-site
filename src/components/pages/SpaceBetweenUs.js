import React, { Component } from 'react';
import HomeImage from '../../images/01a. Accordion painting.jpg';
import tsbu2 from '../../images/01b. Accordion detail (head).jpeg';
import tsbu3 from '../../images/02a. Attached painting.jpg';
import tsbu4 from '../../images/03. Sway painting.jpg';
import tsbu5 from '../../images/04c. Hinge detail (feet).jpg';

class SpaceBetweenUs extends Component {

    render() {
        return (
            <div>
                <h3 className="page-content-title">The Space Between Us</h3>
                <div className="image-grid-container">
                    <div className="column">
                        <img src={HomeImage} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu2} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu3} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu4} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu5} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                    <div className="column">
                        <img src={tsbu4} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu3} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu5} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu2} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu4} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                    <div className="column">
                        <img src={HomeImage} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu2} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu3} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu4} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu5} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                    <div className="column">
                        <img src={tsbu2} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu3} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu5} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu2} className="grid-image" alt="The Space Between Us exhibition"/>
                        <img src={tsbu4} className="grid-image" alt="The Space Between Us exhibition"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpaceBetweenUs;