import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allImagesDesktopOrderExhTBSUNYC, allImagesMobileOrderExhTBSUNYC } from '../../../imageDataFiles/imageDataExhTBSUNYC';

class Exhibition_tbsu_nyc extends Component {

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

    let mappedDesktopImages = allImagesDesktopOrderExhTBSUNYC.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                return (
                    // sends to individual image 
                    <Link key={index} location={this.props.location} to={{
                        pathname:"/exh/" + image[0].link, 
                        state: {
                            imageInformation: image,
                            from: this.props.location
                        }}
                        
                    }>
                        <img key={index} src={image[0].name} className="grid-image" alt="The Space Between Us exhibition, NYC"/>
                    </Link>
                )                    
            })}
            </div>
        )
    })

    let mappedMobileImages = allImagesMobileOrderExhTBSUNYC.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                return (
                    <div key={index} className="image-and-details-on-grid">
                        <img key={index} src={image.name} className="grid-image" alt="The Space Between Us exhibition, NYC"/>
                        <div className="gallery-individual-image-details">
                            <p>{image.captionln1}</p>
                            <p>{image.captionln2}</p>
                            <p>{image.captionln3}</p>
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

export default Exhibition_tbsu_nyc;