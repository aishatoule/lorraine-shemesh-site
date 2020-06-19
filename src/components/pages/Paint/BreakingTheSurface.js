import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import link from '../../../images/paint-bts/link.jpg';
import ghost from '../../../images/paint-bts/ghost.jpg';
import ghostDetail1 from '../../../images/paint-bts/ghost_detail.jpg';
import ring from '../../../images/paint-bts/ring.jpg';
import amoeba from '../../../images/paint-bts/amoeba.jpg';
import amoebaDetail1 from '../../../images/paint-bts/amoeba_detail.jpg';
import backfloat from '../../../images/paint-bts/backfloat.jpg';
import backfloatDetail1 from '../../../images/paint-bts/backfloat_detail.jpg';
import exhale from '../../../images/paint-bts/exhale.jpg';

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
                        name: link,
						artistName: "Lorraine Shemesh",
                        title: "Link",
                        year: "1999",
                        dimensions: "67 x 66 &frac34; in., o/c",
                        link: "bts1",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: ghost,
						artistName: "Lorraine Shemesh",
                        title: "Ghost",
                        year: "2006",
                        dimensions: "72 x 64 in., o/c",
                        link: "bts2",
                        privateCollection: "Private Collection"
                    },
                    {
                        name: ghostDetail1,
						artistName: "Lorraine Shemesh",
                        title: "Ghost - Detail",
                        year: "2006",
                        dimensions: "72 x 64 in., o/c",
                        link: "bts3",
                        privateCollection: "Private Collection"
                    }
                ]
            ],
            [/*COLUMN 2*/
                [
                    {
                        name: ring,
						artistName: "Lorraine Shemesh",
                        title: "Ring",
                        year: "1997",
                        dimensions: "73 &frac58; x 56 in.,o/c",
                        link: "bts4",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: amoeba,
						artistName: "Lorraine Shemesh",
                        title: "Amoeba",
                        year: "2005",
                        dimensions: "73 &frac12; x 64 in., o/c",
                        link: "bts5",
                        privateCollection: "Private Collection"
                    },
                    {
                        name: amoebaDetail1,
						artistName: "Lorraine Shemesh",
                        title: "Amoeba",
                        year: "2005",
                        dimensions: "73 &frac12; x 64 in., o/c",
                        link: "bts6",
                        privateCollection: "Private Collection"
                    }
                ]
            ],
            [/*COLUMN 3*/
                [
                    {
                        name: backfloat,
                        artistName: "Lorraine Shemesh",
                        title: "Back Float",
                        year: "1991",
                        dimensions: "72 x 78 in., o/c",
                        link: "bts7",
                        privateCollection: "Private Collection"
                    },
                    {
                        name: backfloatDetail1,
                        artistName: "Lorraine Shemesh",
                        title: "Back Float - Detail",
                        year: "1991",
                        dimensions: "72 x 78 in., o/c",
                        link: "bts8",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: exhale,
                        artistName: "Lorraine Shemesh",
                        title: "Exhale",
                        year: "1995",
                        dimensions: "69 x 80 in., o/c",
                        link: "bts9",
                        privateCollection: "Private Collection"
                    }
                ]
            ]          
        ]


        const allImagesMobileOrder = [
            [{
                name: link,
				artistName: "Lorraine Shemesh",
                title: "Link",
                year: "1999",
                dimensions: "67 x 66 &frac34; in., o/c",
                link: "bts1",
                privateCollection: "Private Collection"
            },
            {
                name: ghost,
				artistName: "Lorraine Shemesh",
                title: "Ghost",
                year: "2006",
                dimensions: "72 x 64 in., o/c",
                link: "bts2",
                privateCollection: "Private Collection"
            },
            {
                name: ghostDetail1,
				artistName: "Lorraine Shemesh",
                title: "Ghost - Detail",
                year: "2006",
                dimensions: "72 x 64 in., o/c",
                link: "bts3",
                privateCollection: "Private Collection"
            },
            {
                name: ring,
				artistName: "Lorraine Shemesh",
                title: "Ring",
                year: "1997",
                dimensions: "73 &frac58; x 56 in.,o/c",
                link: "bts4",
                privateCollection: "Private Collection"
            },
            {
                name: amoeba,
				artistName: "Lorraine Shemesh",
                title: "Amoeba",
                year: "2005",
                dimensions: "73 &frac12; x 64 in., o/c",
                link: "bts5",
                privateCollection: "Private Collection"
            },
            {
                name: amoebaDetail1,
				artistName: "Lorraine Shemesh",
                title: "Amoeba",
                year: "2005",
                dimensions: "73 &frac12; x 64 in., o/c",
                link: "bts6",
                privateCollection: "Private Collection"
            },
            {
                name: backfloat,
                artistName: "Lorraine Shemesh",
                title: "Back Float",
                year: "1991",
                dimensions: "72 x 78 in., o/c",
                link: "bts7",
                privateCollection: "Private Collection"
            },
            {
                name: backfloatDetail1,
                artistName: "Lorraine Shemesh",
                title: "Back Float - Detail",
                year: "1991",
                dimensions: "72 x 78 in., o/c",
                link: "bts8",
                privateCollection: "Private Collection"
            },
            {
                name: exhale,
                artistName: "Lorraine Shemesh",
                title: "Exhale",
                year: "1995",
                dimensions: "69 x 80 in., o/c",
                link: "bts9",
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