import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import amoeba from '../../../images/paint-bts/amoeba_CD8_1.jpg';
import ghost from '../../../images/paint-bts/ghost_CD20_01.jpg';
import echo from '../../../images/paint-bts/echo_CD10_1.jpg';
import wings from '../../../images/paint-bts/wings_CD15_DSCF0002.jpg';
import precipice from '../../../images/paint-bts/precipice_CD14_02_B4.jpg';

class BreakingTheSurface extends Component {

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
                        name: amoeba,
						artistName: "Lorraine Shemesh",
                        title: "Amoeba",
                        year: "2005",
                        dimensions: "73 &frac12; x 64 in., o/c",
                        link: "bts1",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: ghost,
						artistName: "Lorraine Shemesh",
                        title: "Ghost",
                        year: "2006-2009",
                        dimensions: "72 x 64 in., o/c",
                        link: "bts2",
                        privateCollection: "Private Collection"
                    }
                ]
            ],
            [/*COLUMN 2*/
                [
                    {
                        name: echo,
						artistName: "Lorraine Shemesh",
                        title: "Echo",
                        year: "2005",
                        dimensions: "64 x 66 in.,o/c",
                        link: "bts3",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: wings,
						artistName: "Lorraine Shemesh",
                        title: "Wings",
                        year: "2008",
                        dimensions: "64 x 63 &frac14; in., o/c",
                        link: "bts4",
                        privateCollection: "Private Collection"
                    }
                ]
            ],
            [/*COLUMN 3*/
                [
                    {
                        name: precipice,
                        artistName: "Lorraine Shemesh",
                        title: "Precipice",
                        year: "2007",
                        dimensions: "78 &frac18; x 56 &frac78; in., o/c",
                        link: "bts5",
                        privateCollection: "Private Collection"
                    }
                ]
            ]          
        ]


        const allImagesMobileOrder = [
            [{
                name: amoeba,
				artistName: "Lorraine Shemesh",
                title: "Amoeba",
                year: "2005",
                dimensions: "73 &frac12; x 64 in., o/c",
                link: "bts1",
                privateCollection: "Private Collection"
            },
            {
                name: ghost,
				artistName: "Lorraine Shemesh",
                title: "Ghost",
                year: "2006-2009",
                dimensions: "72 x 64 in., o/c",
                link: "bts2",
                privateCollection: "Private Collection"
            },
            {
                name: echo,
				artistName: "Lorraine Shemesh",
                title: "Echo",
                year: "2005",
                dimensions: "64 x 66 in.,o/c",
                link: "bts3",
                privateCollection: "Private Collection"
            },
            {
                name: wings,
				artistName: "Lorraine Shemesh",
                title: "Wings",
                year: "2008",
                dimensions: "64 x 63 &frac14; in., o/c",
                link: "bts4",
                privateCollection: "Private Collection"
            },
            {
                name: precipice,
                artistName: "Lorraine Shemesh",
                title: "Precipice",
                year: "2007",
                dimensions: "78 &frac18; x 56 &frac78; in., o/c",
                link: "bts5",
                privateCollection: "Private Collection"
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

export default BreakingTheSurface;