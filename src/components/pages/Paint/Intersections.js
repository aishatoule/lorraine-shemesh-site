import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import tangle from '../../../images/paint-int/tangle_CD20_05.jpg';
import tangleDetail1 from '../../../images/paint-int/tangle_detail_CD20_07.jpg';
import intersection from '../../../images/paint-int/intersection_2_colorCorrected.jpg';
import intersectionDetail1 from '../../../images/paint-int/intersection_detail_2B_colorCorrected.jpg';
import crossing from '../../../images/paint-int/crossing_6_colorCorrected_b.jpg';
import crossingDetail1 from '../../../images/paint-int/crossing_detail_6A_colorCorrected.jpg';
import crossingDetail2 from '../../../images/paint-int/crossing_detail_6B_colorCorrected.jpg';
import hook from '../../../images/paint-int/hook_8_colorCorrected_b.jpg';
import zipper from '../../../images/paint-int/zipper_4_colorCorrected_c.jpg';
import zipperDetail1 from '../../../images/paint-int/zipper_detail_4A_colorCorrected.jpg';
import zipperDetail2 from '../../../images/paint-int/zipper_detail_4C_colorCorrected.jpg';
import checkmate from '../../../images/paint-int/checkmate_05_colorCorrected.jpg';
import checkmateDetail1 from '../../../images/paint-int/checkmate_detail_06_colorCorrected.jpg';
import lock from '../../../images/paint-int/lock_03_colorCorrected.jpg';
import lockDetail1 from '../../../images/paint-int/lock_detail_04_colorCorrected.jpg';

class Intersections extends Component {

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
                        name: zipper,
                        artistName: "Lorraine Shemesh",
                        title: "Zipper",
                        /*year: "2008",*/
                        dimensions: "78 1/4 x 48 1/4 in., o/c",
                        link: "int9",
                        privateCollection: ""
                    },
                    {
                        name: zipperDetail1,
                        artistName: "Lorraine Shemesh",
                        title: "Zipper - detail",
                        year: "2008",
                        dimensions: "78 1/4 x 48 1/4 in., o/c",
                        link: "int10",
                        privateCollection: ""
                    },
                    {
                        name: zipperDetail2,
                        artistName: "Lorraine Shemesh",
                        title: "Zipper - detail",
                        year: "2008",
                        dimensions: "78 1/4 x 48 1/4 in., o/c",
                        link: "int11",
                        privateCollection: ""
                    }
                ],
                [
                    {
                        name: checkmate,
                        artistName: "Lorraine Shemesh",
                        title: "Checkmate",
                        /*year: "2008",*/
                        dimensions: "35 1/4 x 79 3/4 in., o/c",
                        link: "int12",
                        privateCollection: ""
                    },
                    {
                        name: checkmateDetail1,
                        artistName: "Lorraine Shemesh",
                        title: "Checkmate - detail",
                        year: "2008",
                        dimensions: "35 1/4 x 79 3/4 in., o/c",
                        link: "int13",
                        privateCollection: ""
                    }
                ],
                [
                    {
                        name: lock,
                        artistName: "Lorraine Shemesh",
                        title: "Lock",
                        /*year: "2009",*/
                        dimensions: "46 3/4 x 78 1/4 in., o/c",
                        link: "int14",
                        privateCollection: ""
                    },
                    {
                        name: lockDetail1,
                        artistName: "Lorraine Shemesh",
                        title: "Lock - detail",
                        year: "2009",
                        dimensions: "46 3/4 x 78 1/4 in., o/c",
                        link: "int15",
                        privateCollection: ""
                    }
                ]
            ],
            [/*COLUMN 2*/
                [
                    {
                        name: hook,
                        artistName: "Lorraine Shemesh",
                        title: "Hook",
                        /*year: "2008",*/
                        dimensions: "80 1/4 x 42 1/2 in., o/c",
                        link: "int8",
                        privateCollection: "Private Collection"
                    }
                ],
                [
                    {
                        name: intersection,
                        artistName: "Lorraine Shemesh",
                        title: "Intersection",
                        /*year: "2009",*/
                        dimensions: "72 1⁄4 x 52 1/4 in., o/c",
                        link: "int3",
                        privateCollection: ""
                    },
                    {
                        name: intersectionDetail1,
                        artistName: "Lorraine Shemesh",
                        title: "Intersection - detail",
                        year: "2009",
                        dimensions: "72 1⁄4 x 52 1/4 in., o/c",
                        link: "int4",
                        privateCollection: ""
                    }
                ],
            ],
            [/*COLUMN 3*/
                [
                    {
                        name: crossing,
                        artistName: "Lorraine Shemesh",
                        title: "Crossing",
                        /*year: "2008",*/
                        dimensions: "73 x 54 1/4 in., o/c",
                        link: "int5",
                        privateCollection: ""
                    },
                    {
                        name: crossingDetail1,
                        artistName: "Lorraine Shemesh",
                        title: "Crossing",
                        year: "2008",
                        dimensions: "73 x 54 1/4 in., o/c",
                        link: "int6",
                        privateCollection: ""
                    },
                    {
                        name: crossingDetail2,
                        artistName: "Lorraine Shemesh",
                        title: "Crossing",
                        year: "2008",
                        dimensions: "73 x 54 1/4 in., o/c",
                        link: "int7",
                        privateCollection: ""
                    }
                ]
            ]          
        ]


        const allImagesMobileOrder = [
            [{
                name: intersection,
                artistName: "Lorraine Shemesh",
                title: "Intersection",
                /*year: "2009",*/
                dimensions: "72 1⁄4 x 52 1/4 in., o/c",
                link: "int3",
                privateCollection: ""
            },
            {
                name: intersectionDetail1,
                artistName: "Lorraine Shemesh",
                title: "Intersection - detail",
                /*year: "2009",*/
                dimensions: "72 1⁄4 x 52 1/4 in., o/c",
                link: "int4",
                privateCollection: ""
            },
            {
                name: crossing,
                artistName: "Lorraine Shemesh",
                title: "Crossing",
                /*year: "2008",*/
                dimensions: "73 x 54 1/4 in., o/c",
                link: "int5",
                privateCollection: ""
            },
            {
                name: crossingDetail1,
                artistName: "Lorraine Shemesh",
                title: "Crossing",
                /*year: "2008",*/
                dimensions: "73 x 54 1/4 in., o/c",
                link: "int6",
                privateCollection: ""
            },
            {
                name: crossingDetail2,
                artistName: "Lorraine Shemesh",
                title: "Crossing",
                /*year: "2008",*/
                dimensions: "73 x 54 1/4 in., o/c",
                link: "int7",
                privateCollection: ""
            },
            {
                name: hook,
                artistName: "Lorraine Shemesh",
                title: "Hook",
                /*year: "2008",*/
                dimensions: "80 1/4 x 42 1/2 in., o/c",
                link: "int8",
                privateCollection: "Private Collection"
            },
            {
                name: zipper,
                artistName: "Lorraine Shemesh",
                title: "Zipper",
                /*year: "2008",*/
                dimensions: "78 1/4 x 48 1/4 in., o/c",
                link: "int9",
                privateCollection: ""
            },
            {
                name: zipperDetail1,
                artistName: "Lorraine Shemesh",
                title: "Zipper - detail",
                /*year: "2008",*/
                dimensions: "78 1/4 x 48 1/4 in., o/c",
                link: "int10",
                privateCollection: ""
            },
            {
                name: zipperDetail2,
                artistName: "Lorraine Shemesh",
                title: "Zipper - detail",
                /*year: "2008",*/
                dimensions: "78 1/4 x 48 1/4 in., o/c",
                link: "int11",
                privateCollection: ""
            },
            {
                name: checkmate,
                artistName: "Lorraine Shemesh",
                title: "Checkmate",
                /*year: "2008",*/
                dimensions: "35 1/4 x 79 3/4 in., o/c",
                link: "int12",
                privateCollection: ""
            },
            {
                name: checkmateDetail1,
                artistName: "Lorraine Shemesh",
                title: "Checkmate - detail",
                /*year: "2008",*/
                dimensions: "35 1/4 x 79 3/4 in., o/c",
                link: "int13",
                privateCollection: ""
            },
            {
                name: lock,
                artistName: "Lorraine Shemesh",
                title: "Lock",
                /*year: "2009",*/
                dimensions: "46 3/4 x 78 1/4 in., o/c",
                link: "int14",
                privateCollection: ""
            },
            {
                name: lockDetail1,
                artistName: "Lorraine Shemesh",
                title: "Lock - detail",
                /*year: "2009",*/
                dimensions: "46 3/4 x 78 1/4 in., o/c",
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

export default Intersections;