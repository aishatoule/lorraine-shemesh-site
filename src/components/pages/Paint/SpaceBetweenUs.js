import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allImagesDesktopOrderTsbu, allImagesMobileOrderTsbu } from '../../../imageDataFiles/imageDataTsbu';
import Lightbox from '../Lightbox';

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



        let mappedDesktopImages = allImagesDesktopOrderTsbu.map((imageColumn, i) => {
            return (
                <div key={i} className="column">
                    {imageColumn.map((image, index) => {
                        return (
                            // sends to individual image 
                            <Link key={index} location={this.props.location} to={{
                                pathname: "/" + image[0].link,
                                state: {
                                    imageInformation: image,
                                    from: this.props.location
                                }
                            }
                            }>
                                <img key={index} src={image[0].name} className="grid-image" alt="The Space Between Us series" />
                            </Link>
                        )
                    })}
                </div>
            )
        })

        let mappedMobileImages = allImagesMobileOrderTsbu.map((imageColumn, i) => {
            return (
                <div key={i} className="column">
                    {imageColumn.map((image, index) => {
                        return (
                            <div key={index} className="image-and-details-on-grid">
                                <img key={index} src={image.name} className="grid-image" alt="The Space Between Us series" />
                                <div className="gallery-individual-image-details">
                                    <p>{image.artistName}</p>
                                    <p><span className="italics">{image.title}</span>, {image.year}</p>
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
            <>
                <Lightbox />
                <div>
                    <div className="image-grid-container">
                        {mappedImages}
                    </div>
                </div>
            </>
        )
    }
}

export default SpaceBetweenUs;