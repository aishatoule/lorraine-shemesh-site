import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import spots from '../../../images/paint-io/spots_CD25_1b_8.jpg';
import surrender from '../../../images/paint-io/surrender_Em201604_Surrender_painting_v5.jpg';
import bridge from '../../../images/paint-io/bridge_CD25_2c_5.jpg';
import lunge from '../../../images/paint-io/lunge_CD26_10.jpg';
import tethered from '../../../images/paint-io/tethered_unknown_Tethered.jpg';
import tilt from '../../../images/paint-io/tilt_Em201604_Tilt_painting_v1.jpg';
import crescent from '../../../images/paint-io/crescent_CD26_03_0.jpg';
import suspension from '../../../images/paint-io/suspension_Em201604_Suspension_painting_v1.jpg';

class InsideOut extends Component {

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
            [/*COLUMN 1*/
                [
                    {
                        name: spots,
                        artistName: "Lorraine Shemesh",
                        title: "Spots",
                        year: "2012",
                        dimensions: "65 x 63 in., o/c",
                        link: "io1",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: surrender,
                        artistName: "Lorraine Shemesh",
                        title: "Surrender",
                        year: "2015",
                        dimensions: "58 x 70 in., o/c",
                        link: "io2",
                        privateCollection: ""
                    }
                ],
                [
                    {
                        name: bridge,
                        artistName: "Lorraine Shemesh",
                        title: "Bridge",
                        year: "2012",
                        dimensions: "47 &frac12; x 79 in., o/c",
                        link: "io3",
                        privateCollection: "Private Collection"
                    }
                ]
            ],
            [/*COLUMN 2*/
                [
                    {
                        name: lunge,
                        artistName: "Lorraine Shemesh",
                        title: "Lunge",
                        year: "2013",
                        dimensions: "67 &frac12; x 53 &frac12; in., o/c",
                        link: "io4",
                        privateCollection: ""
                    }
                ],
                [
                    {
                        name: tethered,
                        artistName: "Lorraine Shemesh",
                        title: "Tethered",
                        year: "2014",
                        dimensions: "58 x 64 &frac12; in., o/c",
                        link: "io5",
                        privateCollection: ""
                    }
                ],
                [
                    {
                        name: suspension,
                        artistName: "Lorraine Shemesh",
                        title: "Suspension",
                        year: "2013",
                        dimensions: "70 &frac14; x 56 &frac14; in., o/c",
                        link: "int8",
                        privateCollection: ""
                    }
                ]
            ],
            [/*COLUMN 3*/
                [
                    {
                        name: tilt,
                        artistName: "Lorraine Shemesh",
                        title: "Tilt",
                        year: "2015",
                        dimensions: "59 &frac14; 63 &frac14; in., o/c",
                        link: "io6",
                        privateCollection: ""
                    }
                ],
                [
                    {
                        name: crescent,
                        artistName: "Lorraine Shemesh",
                        title: "Crescent",
                        year: "2013",
                        dimensions: "75 x 48 &frac34; in., o/c",
                        link: "int15",
                        privateCollection: ""
                    }
                ]
            ]          
        ]


        const allImagesMobileOrder = [
            [{
                name: spots,
                artistName: "Lorraine Shemesh",
                title: "Spots",
                year: "2012",
                dimensions: "65 x 63 in., o/c",
                link: "io1",
                privateCollection: "Private Collection"
            },
            {
                name: surrender,
                artistName: "Lorraine Shemesh",
                title: "Surrender",
                year: "2015",
                dimensions: "58 x 70 in., o/c",
                link: "io2",
                privateCollection: ""
            },
            {
                name: bridge,
                artistName: "Lorraine Shemesh",
                title: "Bridge",
                year: "2012",
                dimensions: "47 &frac12; x 79 in., o/c",
                link: "io3",
                privateCollection: "Private Collection"
            },
            {
                name: lunge,
                artistName: "Lorraine Shemesh",
                title: "Lunge",
                year: "2013",
                dimensions: "67 &frac12; x 53 &frac12; in., o/c",
                link: "io4",
                privateCollection: ""
            },
            {
                name: tethered,
                artistName: "Lorraine Shemesh",
                title: "Tethered",
                year: "2014",
                dimensions: "58 x 64 &frac12; in., o/c",
                link: "io5",
                privateCollection: ""
            },
            {
                name: suspension,
                artistName: "Lorraine Shemesh",
                title: "Suspension",
                year: "2013",
                dimensions: "70 &frac14; x 56 &frac14; in., o/c",
                link: "int8",
                privateCollection: ""
            },
            {
                name: tilt,
                artistName: "Lorraine Shemesh",
                title: "Tilt",
                year: "2015",
                dimensions: "59 &frac14; 63 &frac14; in., o/c",
                link: "io6",
                privateCollection: ""
            },
            {
                name: crescent,
                artistName: "Lorraine Shemesh",
                title: "Crescent",
                year: "2013",
                dimensions: "75 x 48 &frac34; in., o/c",
                link: "int15",
                privateCollection: ""
            }]      
        ]


    let mappedDesktopImages = allImagesDesktopOrder.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                return (
                    // sends to individual image 
                    <Link key={index} location={this.props.location} to={{
                        pathname:"/" + image[0].link, 
                        state: {
                            imageInformation: image,
                            from: this.props.location
                        }}
                        
                    }>
                        <img key={index} src={image[0].name} className="grid-image" alt="Intersections series"/>
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
                        {/* <Link to={{
                            pathname:"/" + image.link, 
                            state: {
                                imageInformation: image
                            }}
                        }> */}
                        <img key={index} src={image.name} className="grid-image" alt="Intersections series"/>
                        {/* </Link> */}
                        <div className="gallery-individual-image-details">
                            <p>{image.artistName}</p>
                            <p><span class="italics">{image.title}</span>{image.year !== undefined && ", " + image.year}</p>
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

export default InsideOut;