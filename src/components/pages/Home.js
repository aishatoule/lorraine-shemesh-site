import React, { Component } from 'react';
import HomeImage from '../../images/paint-sbu/01a. Accordion painting.jpg';

class Home extends Component {
    render() {
        return( 
            <div className="image-container">
                <img className="home-image" src={HomeImage} alt="home page"/>  
            </div>
        )
    }
}

export default Home;