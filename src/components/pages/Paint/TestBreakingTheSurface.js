import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import { allImagesDesktopOrderBts, allImagesMobileOrderBts } from '../../../imageDataFiles/testImageData';

const TestBreakingTheSurface = () => {
    const images = allImagesDesktopOrderBts;
    const options = {
        buttons: {
        backgroundColor: 'rgba(0,0,0.2)',
        iconColor: '#e8eddf',
        iconPadding: '7px'
    },
    caption: {
        captionColor: '#e8eddf',
        captionFontSize: '30px'
    },
    settings: {
        overlayColor: 'rgba(6, 90, 130, 1)'
    },
    thumbnails: {
        thumbnailsAlignment: 'start'
    }
    }
    // Callback(s) to be passed to the SRLWrapper
    const callbacks = {
        onSlideChange: slide => console.log(slide),
        onLightboxOpened: current => console.log(current),
        onLightboxClosed: current => console.log(current),
        onCountSlides: total => console.log(total)
    }

    return (
        <div>
            <SRLWrapper images={allImagesDesktopOrderBts} callbacks={callbacks}>
                <div className="image-grid-container">
                    <div id="content-page-one" className="column">
                        {images.map(({ link, src, caption }) => (
                            <div key={link} className="col-md-4 col-6 col--small">
                                <a href={src} data-attribute="SRL">
                                    <img className="grid-image" src={src} alt={caption} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </SRLWrapper>
        </div>
        )
    
    }

export default TestBreakingTheSurface;