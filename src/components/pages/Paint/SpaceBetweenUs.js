import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import { allImagesDesktopOrderTsbu, allImagesMobileOrderTsbu } from '../../../imageDataFiles/imageDataTsbu';
import Lightbox from '../Lightbox';

class SpaceBetweenUs extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
            lightboxIndex: -1,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        if (this.props.match.params.image && window.innerWidth <= 1000) {

            // handle bookmark for mobile, scrolls image into view once all are loaded
            Promise.all([...document.querySelectorAll('img.grid-image')].map(img => {
                return new Promise(resolve => {
                    img.onload = () => {
                        resolve();
                        console.log('resolved');
                    }

                });
            })).then(() => {

                setTimeout(() => {
                    const pos = document.getElementById(this.props.match.params.image).offsetTop;
                    window.scrollTo(0, pos);
                }, 500)
            });
        }

    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    openLightbox = (groupIndex) => {
        this.setState({
            lightboxIndex: groupIndex,
        })
    }

    closeLightbox = () => {
        this.setState({ lightboxIndex: -1 })
    }

    render() {



        let mappedDesktopImages = allImagesDesktopOrderTsbu.map((imageColumn, i) => {
            return (
                <div key={i} className="column">
                    {imageColumn.map((image, index) => {
                        return (
                            // sends to individual image 
                            // <Link key={index} location={this.props.location} to={{
                            //     pathname: "/" + image[0].link,
                            //     state: {
                            //         imageInformation: image,
                            //         from: this.props.location
                            //     }
                            // }
                            // }>
                            <a href={`/${image[0].link}`} onClick={(e) => { this.openLightbox(index); e.preventDefault() }}>
                                <img key={index} src={image[0].name} className="grid-image" alt="The Space Between Us series" />
                            </a>
                            // </Link>
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
                            <div key={index} className="image-and-details-on-grid" id={image.link}>
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
                {!isMobile && this.state.lightboxIndex >= 0 && (
                    <Lightbox images={allImagesDesktopOrderTsbu} selectedIndex={this.state.lightboxIndex} onClose={this.closeLightbox} />
                )}
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