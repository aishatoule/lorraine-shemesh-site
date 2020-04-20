import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tsbu1 from '../../../images/paint-sbu/tsbu1.jpg';
import tsbu2 from '../../../images/paint-sbu/tsbu2.jpeg';
import tsbu3 from '../../../images/paint-sbu/tsbu3.jpeg';
import tsbu4 from '../../../images/paint-sbu/tsbu4.jpg';
import tsbu5 from '../../../images/paint-sbu/tsbu5.jpg';
import tsbu6 from '../../../images/paint-sbu/tsbu6.jpg';
import tsbu7 from '../../../images/paint-sbu/tsbu7.jpg';
import tsbu8 from '../../../images/paint-sbu/tsbu8.jpg';
import tsbu9 from '../../../images/paint-sbu/tsbu9.jpeg';
import tsbu10 from '../../../images/paint-sbu/tsbu10.jpg';
import tsbu11 from '../../../images/paint-sbu/tsbu11.jpeg';
import tsbu12 from '../../../images/paint-sbu/tsbu12.jpg';
import tsbu13 from '../../../images/paint-sbu/tsbu13.jpg';
import tsbu14 from '../../../images/paint-sbu/tsbu14.jpg';
import tsbu15 from '../../../images/paint-sbu/tsbu15.jpg';
import tsbu16 from '../../../images/paint-sbu/tsbu16.jpg';
import tsbu17 from '../../../images/paint-sbu/tsbu17.jpg';
import tsbu18 from '../../../images/paint-sbu/tsbu18.jpg';
import tsbu19 from '../../../images/paint-sbu/tsbu19.jpg';
import tsbu20 from '../../../images/paint-sbu/tsbu20.jpg';
import tsbu21 from '../../../images/paint-sbu/tsbu21.jpg';

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
                artistName: "Lorraine Shemesh",
                title: "Accordion",
                year: "2018",
                dimensions: "65 x 55 in., o/c",
                details: "01a. Accordion painting.jpg",
                link: "tsbu1",
                privateCollection: ""
            }, 
            {
                name: tsbu4,
                artistName: "Lorraine Shemesh",
                title: "Attached",
                year: "2018",
                dimensions: "64 x 61 1/2 in., o/c",
                details: "02a. Attached painting.jpg",
                link: "tsbu4",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu7,
                artistName: "Lorraine Shemesh",
                title: "Sway",
                year: "2019",
                dimensions: "72 x 57 1⁄2 in., o/c",
                details: "03. Sway painting.jpg",
                link: "tsbu7",
                privateCollection: ""

            },
            {
                name: tsbu10,
                artistName: "Lorraine Shemesh",
                title: "Hinge – detail (feet)",
                yesr: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04c. Hinge detail (feet).jpg",
                link: "tsbu10",
                privateCollection: ""

            },
            {
                name: tsbu13,
                artistName: "Lorraine Shemesh",
                title: "The Space Between Us - detail (female head)",
                year: "2015",
                dimensions: "64 x 64 1/2 in., o/c",
                details: "05b. The Space Between Us detail (female head).jpg",
                link: "tsbu13",
                privateCollection: ""
            },
            {
                name: tsbu16,
                artistName: "Lorraine Shemesh",
                title: "Inseparable - detail (female hands)",
                year: "2016",
                dimensions: "63 x 49 1⁄2 in., o/c",
                details: "06c. Inseparable detail (female hands).jpg",
                link: "tsbu16",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu19,
                artistName: "Lorraine Shemesh",
                title: "Interlock",
                year: "2017",
                dimensions: "53 x 45 in., 0/c",
                details: "08. Interlock painting.jpg",
                link: "tsbu19",
                privateCollection: ""
            }],
            [{
                name: tsbu2,
                artistName: "Lorraine Shemesh",
                title: "Accordion – detail (head)",
                year: "2018",
                dimensions: "65 x 55 in., o/c",
                details: "01b. Accordion detail (head).jpeg",
                link: "tsbu2",
                privateCollection: ""
            }, 
            {
                name: tsbu5,
                artistName: "Lorraine Shemesh",
                title: "Attached - detail (heads & hands)",
                year: "2018",
                dimensions: "64 x 61 1/2 in., o/c",
                details: "02b. Attached detail (heads _ hands).jpg",
                link: "tsbu5",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu8,
                artistName: "Lorraine Shemesh",
                title: "Hinge",
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04a. Hinge painting.jpg",
                link: "tsbu8"
            },
            {
                name: tsbu11,
                artistName: "Lorraine Shemesh",
                title: "Hinge – detail (hand)",
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04d. Hinge detail (hand).jpeg",
                link: "tsbu11",
                privateCollection: ""
            },
            {
                name: tsbu14,
                artistName: "Lorraine Shemesh",
                title: "Inseparable",
                year: "2016",
                dimensions: "63 x 49 1⁄2 in., o/c",
                details: "06a. Inseparable painting.jpg",
                link: "tsbu14",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu17,
                artistName: "Lorraine Shemesh",
                title: "Riddle",
                year: "2018",
                dimensions: "60 1⁄2 x 62 in., o/c",
                details: "07a. Riddle painting.jpg",
                link: "tsbu17",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu20,
                artistName: "Lorraine Shemesh",
                title: "Enclosure",
                year: "2017",
                dimensions: "60 1⁄2 x 49 1⁄2 in., o/c",
                details: "09. Enclosure painting.jpg",
                link: "tsbu14",
                privateCollection: ""
            }],
            [{
                name: tsbu3,
                artistName: "Lorraine Shemesh",
                title: "Accordion – detail (hand)",
                year: "2018",
                dimensions: "65 x 55 in., o/c",
                details: "01c. Accordion detail (hand).jpeg",
                link: "tsbu3",
                privateCollection: ""
            }, 
            {
                name: tsbu6,
                artistName: "Lorraine Shemesh",
                title: "Attached - detail - (foot)",
                year: "2018",
                dimensions: "64 x 61 1/2 in., o/c",
                details: "02c. Attached detail (foot).jpg",
                link: "tsbu6",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu9,
                artistName: "Lorraine Shemesh",
                title: "Hinge - detail (head)",
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04b Hinge detail (head).jpeg",
                link: "tsbu9",
                privateCollection: ""
            },
            {
                name: tsbu12,
                artistName: "Lorraine Shemesh",
                title: "The Space Between Us",
                year: "2015",
                dimensions: "64 x 64 1/2 in., o/c",
                details: "05a. The Space Between Us.jpg",
                link: "tsbu12",
                privateCollection: ""
            },
            {
                name: tsbu15,
                artistName: "Lorraine Shemesh",
                title: "Inseparable - detail (male head)",
                year: "2016",
                dimensions: "63 x 49 1⁄2 in., o/c",
                details: "06b. Inseparable detail (male head).jpg",
                link: "tsbu19",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu18,
                artistName: "Lorraine Shemesh",
                title: "Riddle - detail, (center calf and arm)",
                year: "2018",
                dimensions: "60 1⁄2 x 62 in., o/c",
                details: "07b. Riddle detail (center calf _ arm).jpg",
                link: "tsbu18",
                privateCollection: ""
            },
            {
                name: tsbu21,
                artistName: "Lorraine Shemesh",
                title: "Puzzle",
                year: "2014",
                dimensions: "65 x 65 in., o/c",
                details: "10. Puzzle painting.jpg",
                link: "tsbu21",
                privateCollection: ""
            }]          
        ]


        const allImagesMobileOrder = [
            [{
                name: tsbu1,
                title: "Accordion",
                year: "2018",
                dimensions: "65 x 55 in., o/c",
                artistName: "Lorraine Shemesh",
                details: "image details",
                link: "tsbu1",
                privateCollection: ""

            }, 
            {
                name: tsbu2,
                artistName: "Lorraine Shemesh",
                title: "Accordion – detail (head)",
                year: "2018",
                dimensions: "65 x 55 in., o/c",
                details: "01b. Accordion detail (head).jpeg",
                link: "tsbu2",
                privateCollection: ""
            },
            {
                name: tsbu3,
                artistName: "Lorraine Shemesh",
                title: "Accordion – detail (hand)", 
                year: "2018",
                dimensions: "65 x 55 in., o/c",
                details: "01c. Accordion detail (hand).jpeg",
                link: "tsbu3",
                privateCollection: ""

            },
            {
                name: tsbu4,
                artistName: "Lorraine Shemesh",
                title: "Attached", 
                year: "2018",
                dimensions: "64 x 61 1/2 in., o/c",
                details: "02a. Attached painting.jpg",
                link: "tsbu4",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu5,
                artistName: "Lorraine Shemesh",
                title: "Attached - detail (heads & hands)",
                year: "2018",
                dimensions: "64 x 61 1/2 in., o/c",
                details: "02b. Attached detail (heads _ hands).jpg",
                link: "tsbu5",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu6,
                artistName: "Lorraine Shemesh",
                title: "Attached - detail - (foot)",
                year: "2018",
                dimensions: "64 x 61 1/2 in., o/c",
                details: "02c. Attached detail (foot).jpg",
                link: "tsbu6",
                privateCollection: "Private Collection"
            }],
            [{
                name: tsbu7,
                artistName: "Lorraine Shemesh",
                title: "Sway", 
                year: "2019",
                dimensions: "72 x 57 1⁄2 in., o/c",
                details: "03. Sway painting.jpg",
                link: "tsbu7",
                privateCollection: ""
            }, 
            {
                name: tsbu8,
                artistName: "Lorraine Shemesh",
                title: "Hinge",
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04a. Hinge painting.jpg",
                link: "tsbu8"
            },
            {
                name: tsbu9,
                artistName: "Lorraine Shemesh",
                title: "Hinge - detail (head)", 
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04b Hinge detail (head).jpeg",
                link: "tsbu9",
                privateCollection: ""
            },
            {
                name: tsbu10,
                artistName: "Lorraine Shemesh",
                title: "Hinge – detail (feet)", 
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04c. Hinge detail (feet).jpg",
                link: "tsbu10",
                privateCollection: ""
            },
            {
                name: tsbu11,
                artistName: "Lorraine Shemesh",
                title: "Hinge – detail (hand)", 
                year: "2017",
                dimensions: "63 1/2 x 47 1/2 in., o/c",
                details: "04d. Hinge detail (hand).jpeg",
                link: "tsbu11",
                privateCollection: ""
            }],
            [{
                name: tsbu12,
                artistName: "Lorraine Shemesh",
                title: "The Space Between Us", 
                year: "2015",
                dimensions: "64 x 64 1/2 in., o/c",
                details: "05a. The Space Between Us.jpg",
                link: "tsbu12",
                privateCollection: ""
            }, 
            {
                name: tsbu13,
                artistName: "Lorraine Shemesh",
                title: "The Space Between Us - detail (female head)", 
                year: "2015",
                dimensions: "64 x 64 1/2 in., o/c",
                details: "05b. The Space Between Us detail (female head).jpg",
                link: "tsbu13",
                privateCollection: ""
            },
            {
                name: tsbu14,
                artistName: "Lorraine Shemesh",
                title: "Inseparable", 
                year: "2016",
                dimensions: "63 x 49 1⁄2 in., o/c",
                details: "06a. Inseparable painting.jpg",
                link: "tsbu14",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu15,
                artistName: "Lorraine Shemesh",
                title: "Inseparable - detail (male head)", 
                year: "2016",
                dimensions: "63 x 49 1⁄2 in., o/c",
                details: "06b. Inseparable detail (male head).jpg",
                link: "tsbu19",
                privateCollection: "Private Collection"
            },
            {
                name: tsbu16,
                artistName: "Lorraine Shemesh",
                title: "Inseparable - detail (female hands)", 
                year: "2016",
                dimensions: "63 x 49 1⁄2 in., o/c",
                details: "06c. Inseparable detail (female hands).jpg",
                link: "tsbu16",
                privateCollection: "Private Collection"
            }],
            [{
                name: tsbu17,
                artistName: "Lorraine Shemesh",
                title: "Riddle", 
                year: "2018",
                dimensions: "60 1⁄2 x 62 in., o/c",
                details: "07a. Riddle painting.jpg",
                link: "tsbu17",
                privateCollection: "Private Collection"
            }, 
            {
                name: tsbu18,
                artistName: "Lorraine Shemesh",
                title: "Riddle - detail, (center calf and arm)", 
                year: "2018",
                dimensions: "60 1⁄2 x 62 in., o/c",
                details: "07b. Riddle detail (center calf _ arm).jpg",
                link: "tsbu18",
                privateCollection: ""
            },
            {
                name: tsbu19,
                artistName: "Lorraine Shemesh",
                title: "Interlock", 
                year: "2017",
                dimensions: "53 x 45 in., 0/c",
                details: "08. Interlock painting.jpg",
                link: "tsbu19",
                privateCollection: ""
            },
            {
                name: tsbu20,
                artistName: "Lorraine Shemesh",
                title: "Enclosure", 
                year: "2017",
                dimensions: "60 1⁄2 x 49 1⁄2 in., o/c",
                details: "09. Enclosure painting.jpg",
                link: "tsbu14",
                privateCollection: ""
            },
            {
                name: tsbu21,
                artistName: "Lorraine Shemesh",
                title: "Puzzle", 
                year: "2014",
                dimensions: "65 x 65 in., o/c",
                details: "10. Puzzle painting.jpg",
                link: "tsbu21",
                privateCollection: ""
            }]      
        ]


    let mappedDesktopImages = allImagesDesktopOrder.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                return (
                    // sends to individual image 
                    <Link location={this.props.location} to={{
                        pathname:"/" + image.link, 
                        state: {
                            imageInformation: image,
                            from: this.props.location
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
                    <div className="image-and-details-on-grid">
                        <Link to={{
                            pathname:"/" + image.link, 
                            state: {
                                imageInformation: image
                            }}
                        }>
                        <img key={index} src={image.name} className="grid-image" alt="The Space Between Us exhibition"/>
                        </Link>
                        <div className="invidual-image-details">
                        <p>{image.artistName}</p>
                        <p><span class="italics">{image.title}</span>, {image.year}</p>
                        <p>{image.dimensions}</p>
                        <p>{image.privateCollection}</p>
                    </div>
                </div>
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