import React, { Component } from 'react';
import HomeImage from '../../images/01a. Accordion painting.jpg';

class SpaceBetweenUs extends Component {

    render() {
        const images = 
        [{
            details: "Accordion \n 2018, 65 x 55 in., o/c ",
            src: HomeImage
        },
        {
            details: "Accordion \n 2018, 65 x 55 in., o/c ",
            src: HomeImage
        },{
            details: "Accordion \n 2018, 65 x 55 in., o/c ",
            src: HomeImage
        },{
            details: "Accordion \n 2018, 65 x 55 in., o/c ",
            src: HomeImage
        },{
            details: "Accordion \n 2018, 65 x 55 in., o/c ",
            src: HomeImage
        },
        ]

        const mappedImages = images.map((image, index) => {
            return (
                <div key={index} className="grid-image-container">
                    <img src={image.src} className="grid-image" alt="The Space Between Us exhibition"/>
                    {/* <p>{image.details}</p> */}
                </div>
            )
        })
        return (
            <div>
                <h3 className="page-content-title">The Space Between Us</h3>
                <div className="image-grid-container">
                    {mappedImages}
                </div>
            </div>
        )
    }
}

export default SpaceBetweenUs;