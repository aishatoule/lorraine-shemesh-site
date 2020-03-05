import React, { Component } from 'react';
import tsbu1 from '../../images/paint-sbu/01a. Accordion painting.jpg';
import tsbu2 from '../../images/paint-sbu/01b. Accordion detail (head).jpeg';
import tsbu3 from '../../images/paint-sbu/01c. Accordion detail (hand).jpeg';
import tsbu4 from '../../images/paint-sbu/02a. Attached painting.jpg';
import tsbu5 from '../../images/paint-sbu/02b. Attached detail (heads _ hands).jpg';
import tsbu6 from '../../images/paint-sbu/02c. Attached detail (foot).jpg';
import tsbu7 from '../../images/paint-sbu/03. Sway painting.jpg';
import tsbu8 from '../../images/paint-sbu/04a. Hinge painting.jpg';
import tsbu9 from '../../images/paint-sbu/04b Hinge detail (head).jpeg';
import tsbu10 from '../../images/paint-sbu/04c. Hinge detail (feet).jpg';
import tsbu11 from '../../images/paint-sbu/04d. Hinge detail (hand).jpeg';
import tsbu12 from '../../images/paint-sbu/05a. The Space Between Us.jpg';
import tsbu13 from '../../images/paint-sbu/05b. The Space Between Us detail (female head).jpg';
import tsbu14 from '../../images/paint-sbu/06a. Inseparable painting.jpg';
import tsbu15 from '../../images/paint-sbu/06b. Inseparable detail (male head).jpg';
import tsbu16 from '../../images/paint-sbu/06c. Inseparable detail (female hands).jpg';
import tsbu17 from '../../images/paint-sbu/07a. Riddle painting.jpg';
import tsbu18 from '../../images/paint-sbu/07b. Riddle detail (center calf _ arm).jpg';
import tsbu19 from '../../images/paint-sbu/08. Interlock painting.jpg';
import tsbu20 from '../../images/paint-sbu/09. Enclosure painting.jpg';
import tsbu21 from '../../images/paint-sbu/10. Puzzle painting.jpg';

class SpaceBetweenUs extends Component {

    render() {
        const isMobile = window.innerWidth < 600;

        const allImagesDesktopOrder = [
            [{
                name: tsbu1,
                details: "image details"
            }, 
            {
                name: tsbu4,
                details: "image details"
            },
            {
                name: tsbu7,
                details: "image details"
            },
            {
                name: tsbu10,
                details: "image details"
            },
            {
                name: tsbu13,
                details: "image details"
            },
            {
                name: tsbu16,
                details: "image details"
            },
            {
                name: tsbu19,
                details: "image details"
            }],
            [{
                name: tsbu2,
                details: "image details"
            }, 
            {
                name: tsbu5,
                details: "image details"
            },
            {
                name: tsbu8,
                details: "image details"
            },
            {
                name: tsbu11,
                details: "image details"
            },
            {
                name: tsbu14,
                details: "image details"
            },
            {
                name: tsbu17,
                details: "image details"
            },
            {
                name: tsbu20,
                details: "image details"
            }],
            [{
                name: tsbu3,
                details: "image details"
            }, 
            {
                name: tsbu6,
                details: "image details"
            },
            {
                name: tsbu9,
                details: "image details"
            },
            {
                name: tsbu12,
                details: "image details"
            },
            {
                name: tsbu15,
                details: "image details"
            },
            {
                name: tsbu18,
                details: "image details"
            },
            {
                name: tsbu21,
                details: "image details"
            }]     
        ]

        const allImagesMobileOrder = [
            [{
                name: tsbu1,
                details: "image details"
            }, 
            {
                name: tsbu2,
                details: "image details"
            },
            {
                name: tsbu3,
                details: "image details"
            },
            {
                name: tsbu4,
                details: "image details"
            },
            {
                name: tsbu5,
                details: "image details"
            },
            {
                name: tsbu6,
                details: "image details"
            }],
            [{
                name: tsbu7,
                details: "image details"
            }, 
            {
                name: tsbu8,
                details: "image details"
            },
            {
                name: tsbu9,
                details: "image details"
            },
            {
                name: tsbu10,
                details: "image details"
            },
            {
                name: tsbu11,
                details: "image details"
            }],
            [{
                name: tsbu12,
                details: "image details"
            }, 
            {
                name: tsbu13,
                details: "image details"
            },
            {
                name: tsbu14,
                details: "image details"
            },
            {
                name: tsbu15,
                details: "image details"
            },
            {
                name: tsbu16,
                details: "image details"
            }],
            [{
                name: tsbu17,
                details: "image details"
            }, 
            {
                name: tsbu18,
                details: "image details"
            },
            {
                name: tsbu19,
                details: "image details"
            },
            {
                name: tsbu20,
                details: "image details"
            },
            {
                name: tsbu21,
                details: "image details"
            }]      
        ]
        
        let mappedDesktopImages = allImagesDesktopOrder.map((imageColumn, i) => {
            return(
                <div key={i} className="column">
                {imageColumn.map((image, index) => {
                    return (
                        <img key={index} src={image.name} className="grid-image" alt="The Space Between Us exhibition"/>
                    )                    
                })}
                </div>
            )
        })

        let mappedMobileImages = allImagesMobileOrder.map((imageColumn, i) => {
            return(
                <div key={i} className="column">
                {imageColumn.map((image, index) => {
                    return (
                        <img key={index} src={image.name} className="grid-image" alt="The Space Between Us exhibition"/>
                    )                   
                })}
                </div>
            )
        })

        const mappedImages = (isMobile) 
        ? 
        mappedMobileImages
        :
        mappedDesktopImages

        return (
            <div>
                <div className="image-grid-container">
                    {mappedImages}
                </div>
            </div>
        )
    }
}

export default SpaceBetweenUs;