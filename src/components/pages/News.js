import React from 'react';

const News = () => {
    return (
        <div>
            <div className="image-section">
                <img className="biography-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/butler_201905a.jpg'} alt="Lorraine Shemesh at the Butler Institute of American Art"/>
            </div>
            <div className="image-section">
                <img className="biography-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/butler_062021.jpg'} alt="Lorraine Shemesh at the Butler Institute of American Art"/>
            </div>
            <div className="biography-section-type">
                <p className="biography-type-title"><b>News</b></p>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2021</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p>The painting, <a class="biography-link" href="https://lorraineshemesh.com/insideOut/io8">Crescent</a>, has entered the permanent collection of the Butler Institute of American Art.</p>
                        </div>
                        <div className="biography-container">
                            <p>Artist-in-Residence, Dartmouth College</p>
                            <p>September - November 2021</p>
                        </div>
                        <div className="biography-container">
                            <p>Solo show Dartmouth College</p>
                            <p>September - November 2021</p>
                        </div>
                    </div>
                </div>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2019</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p>2019 Artnet News named Lorraine Shemesh's show, <i>The Space Between Us</i>, one of the "10 Must-See Exhibitions During Santa Fe Art Week."</p>
                        </div>
                        <div className="biography-container">
                            <p>Guest of Honor</p>
                            <p>The Butler Institute of American Art, Youngstown, Ohio</p>
                            <p>May 5, 2019</p>
                        </div>
                    </div>
                </div>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2018</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p>2018 Work included in the exhibition:</p>
                            <p>Fool The Eye</p>
                            <p>The Nassau County Museum of Art</p>
                            <p>Roslyn Harbor, New York</p>
                            <p>November 18, 2017 - March 4, 2018</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
}

export default News;