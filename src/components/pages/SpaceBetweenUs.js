import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tsbu1 from '../../images/paint-sbu/tsbu1.jpg';
import tsbu2 from '../../images/paint-sbu/tsbu2.jpeg';
import tsbu3 from '../../images/paint-sbu/tsbu3.jpeg';
import tsbu4 from '../../images/paint-sbu/tsbu4.jpg';
import tsbu5 from '../../images/paint-sbu/tsbu5.jpg';
import tsbu6 from '../../images/paint-sbu/tsbu6.jpg';
import tsbu7 from '../../images/paint-sbu/tsbu7.jpg';
import tsbu8 from '../../images/paint-sbu/tsbu8.jpg';
import tsbu9 from '../../images/paint-sbu/tsbu9.jpeg';
import tsbu10 from '../../images/paint-sbu/tsbu10.jpg';
import tsbu11 from '../../images/paint-sbu/tsbu11.jpeg';
import tsbu12 from '../../images/paint-sbu/tsbu12.jpg';
import tsbu13 from '../../images/paint-sbu/tsbu13.jpg';
import tsbu14 from '../../images/paint-sbu/tsbu14.jpg';
import tsbu15 from '../../images/paint-sbu/tsbu15.jpg';
import tsbu16 from '../../images/paint-sbu/tsbu16.jpg';
import tsbu17 from '../../images/paint-sbu/tsbu17.jpg';
import tsbu18 from '../../images/paint-sbu/tsbu18.jpg';
import tsbu19 from '../../images/paint-sbu/tsbu19.jpg';
import tsbu20 from '../../images/paint-sbu/tsbu20.jpg';
import tsbu21 from '../../images/paint-sbu/tsbu21.jpg';

class SpaceBetweenUs extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    render() {
        const allImagesDesktopOrder = [
            [{
                name: tsbu1,
                details: "01a. Accordion painting.jpg",
                link: "tsbu1"
            }, 
            {
                name: tsbu4,
                details: "02a. Attached painting.jpg",
                link: "tsbu4"
            },
            {
                name: tsbu7,
                details: "03. Sway painting.jpg",
                link: "tsbu7"
            },
            {
                name: tsbu10,
                details: "04c. Hinge detail (feet).jpg",
                link: "tsbu10"
            },
            {
                name: tsbu13,
                details: "05b. The Space Between Us detail (female head).jpg",
                link: "tsbu13"
            },
            {
                name: tsbu16,
                details: "06c. Inseparable detail (female hands).jpg",
                link: "tsbu16"
            },
            {
                name: tsbu19,
                details: "08. Interlock painting.jpg",
                link: "tsbu19"
            }],
            [{
                name: tsbu2,
                details: "01b. Accordion detail (head).jpeg",
                link: "tsbu2"
            }, 
            {
                name: tsbu5,
                details: "02b. Attached detail (heads _ hands).jpg",
                link: "tsbu5"
            },
            {
                name: tsbu8,
                details: "04a. Hinge painting.jpg",
                link: "tsbu8"
            },
            {
                name: tsbu11,
                details: "04d. Hinge detail (hand).jpeg",
                link: "tsbu11"
            },
            {
                name: tsbu14,
                details: "06a. Inseparable painting.jpg",
                link: "tsbu14"
            },
            {
                name: tsbu17,
                details: "07a. Riddle painting.jpg",
                link: "tsbu17"
            },
            {
                name: tsbu20,
                details: "09. Enclosure painting.jpg",
                link: "tsbu14"
            }],
            [{
                name: tsbu3,
                details: "01c. Accordion detail (hand).jpeg",
                link: "tsbu3"
            }, 
            {
                name: tsbu6,
                details: "02c. Attached detail (foot).jpg",
                link: "tsbu6"
            },
            {
                name: tsbu9,
                details: "04b Hinge detail (head).jpeg",
                link: "tsbu9"
            },
            {
                name: tsbu12,
                details: "05a. The Space Between Us.jpg",
                link: "tsbu12"
            },
            {
                name: tsbu15,
                details: "06b. Inseparable detail (male head).jpg",
                link: "tsbu19"
            },
            {
                name: tsbu18,
                details: "07b. Riddle detail (center calf _ arm).jpg",
                link: "tsbu18"
            },
            {
                name: tsbu21,
                details: "10. Puzzle painting.jpg",
                link: "tsbu21"
            }]          
        ]

        const allImagesMobileOrder = [
            [{
                name: tsbu1,
                details: "image details",
                link: "tsbu1"
            }, 
            {
                name: tsbu2,
                details: "image details",
                link: "tsbu2"
            },
            {
                name: tsbu3,
                details: "image details",
                link: "tsbu3"
            },
            {
                name: tsbu4,
                details: "image details",
                link: "tsbu4"
            },
            {
                name: tsbu5,
                details: "image details",
                link: "tsbu5"
            },
            {
                name: tsbu6,
                details: "image details",
                link: "tsbu6"
            }],
            [{
                name: tsbu7,
                details: "image details",
                link: "tsbu7"
            }, 
            {
                name: tsbu8,
                details: "image details",
                link: "tsbu8"
            },
            {
                name: tsbu9,
                details: "image details",
                link: "tsbu9"
            },
            {
                name: tsbu10,
                details: "image details",
                link: "tsbu10"
            },
            {
                name: tsbu11,
                details: "image details",
                link: "tsbu11"
            }],
            [{
                name: tsbu12,
                details: "image details",
                link: "tsbu12"
            }, 
            {
                name: tsbu13,
                details: "image details",
                link: "tsbu13"
            },
            {
                name: tsbu14,
                details: "image details",
                link: "tsbu14"
            },
            {
                name: tsbu15,
                details: "image details",
                link: "tsbu15"
            },
            {
                name: tsbu16,
                details: "image details",
                link: "tsbu16"
            }],
            [{
                name: tsbu17,
                details: "image details",
                link: "tsbu17"
            }, 
            {
                name: tsbu18,
                details: "image details",
                link: "tsbu18"
            },
            {
                name: tsbu19,
                details: "image details",
                link: "tsbu19"
            },
            {
                name: tsbu20,
                details: "image details",
                link: "tsbu20"
            },
            {
                name: tsbu21,
                details: "image details",
                link: "tsbu21"
            }]      
        ]


    let mappedDesktopImages = allImagesDesktopOrder.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                console.log(image)
                return (
                    // sends to individual image 
                    <Link to={{
                        pathname:"/" + image.link, 
                        state: {
                            imageInformation: image
                        }}
                    }>
                        <img key={index} src={image.name} className="grid-image" alt="The Space Between Us exhibition"/>
                    </Link>
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
    const { width } = this.state; 
    const isMobile = width <= 1000;
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