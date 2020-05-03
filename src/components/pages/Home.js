import React from 'react';
import studioShot from '../../images/studio/DSC_1326-cropped-adjusted.jpg';

const Home = () => {
    return( 
        <div className="image-container">
            <img className="individual-image-main" src={studioShot} alt="home page"/>  
        </div>
    )
}

export default Home;