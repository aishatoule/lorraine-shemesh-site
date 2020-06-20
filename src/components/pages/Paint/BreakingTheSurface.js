import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allImagesDesktopOrderBts, allImagesMobileOrderBts } from '../../../imageDataFiles/imageDataBTS';
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

    let mappedDesktopImages = allImagesDesktopOrderBts.map((imageColumn, i) => {
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

    let mappedMobileImages = allImagesMobileOrderBts.map((imageColumn, i) => {
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