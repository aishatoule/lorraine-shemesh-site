import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { flatten } from 'lodash';
import Lightbox from './Lightbox';

const GalleryPage = ({ desktopImages, mobileImages, alt }) => {
    const isMobileCheck = () => window.innerWidth <= 1000;
    const [isMobile, setIsMobile] = useState(isMobileCheck());
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const params = useParams();

    // handleResize
    useEffect(() => {
        const handleResize = () => {
            console.log('handling resize');
            setIsMobile(isMobileCheck())
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // close light box when back button clicked
        if (!params.image) setLightboxIndex(-1);
    }, [params.image])

    // handle image bookmark
    useEffect(() => {
        if (params.image) {
            if (isMobile) {

                // handle bookmark for mobile, scrolls image into view once all are loaded
                Promise.all([...document.querySelectorAll('img.grid-image')].map(img => {
                    return new Promise(resolve => {
                        if (img.complete) resolve();
                        img.onload = resolve;
                    });
                })).then(() => {
                    const pos = document.getElementById(params.image).offsetTop;
                    window.scrollTo({
                        left: 0,
                        top: pos,
                        behavior: 'smooth'
                    });
                });
            } else {
                setLightboxIndex(flatten(desktopImages).findIndex(group => group[0].link === params.image));
            }
        }
    }, []);

    const getMappedImages = () => {
        if (!isMobile) {
            // this is to keep count of the index of image regardless of column
            let imgIndexCount = -1;
            return desktopImages.map((imageColumn, i) => {
                return (
                    <div key={i} className="column">
                        {imageColumn.map((image) => {
                            const localIndex = imgIndexCount += 1;
                            return (
                                <a  key={image[0].link} href={`/${image[0].link}`} onClick={(e) => { setLightboxIndex(localIndex); e.preventDefault() }}>
                                    <img key={image[0].link} src={image[0].name} className="grid-image" alt={alt} />
                                </a>
                            )
                        })}
                    </div>
                )
            })
        }

        return mobileImages.map((imageColumn, i) => {
            return (
                <div key={i} className="column">
                    {imageColumn.map((image, index) => {
                        let CurrentCaption;
                        if (image.captionln1) {
                            CurrentCaption =
                                <React.Fragment>
                                <p dangerouslySetInnerHTML={{__html: image.captionln1}}/>
                                <p>{image.captionln2}</p>
                                <p>{image.captionln3}</p>
                                </React.Fragment>;
                        } else if (image.title) {
                            CurrentCaption = 
                                <React.Fragment>
                                <p>{image.artistName}</p>
                                <p><span className="italics">{image.title}</span>, {image.year}</p>
                                <p>{image.dimensions}</p>
                                <p>{image.privateCollection}</p>
                                </React.Fragment>;
                        } else {
                            CurrentCaption = "";
                        }
                        return (
                            <div key={index} className="image-and-details-on-grid" id={image.link}>
                                <img key={index} src={image.name} className="grid-image" alt={alt} />
                                <div className="gallery-individual-image-details">
                                    {CurrentCaption}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        })
    }

    return (
        <>
            {!isMobile && lightboxIndex >= 0 && (
                <Lightbox
                    images={desktopImages}
                    selectedIndex={lightboxIndex}
                    onClose={() => setLightboxIndex(-1)} />
            )}

            <div>
                <div className="image-grid-container">
                    {getMappedImages()}
                </div>
            </div>
        </>
    )
}


export default GalleryPage;