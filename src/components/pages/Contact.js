import React from 'react'

const Contact = () => {
    return (
    <div className="contact-container">
        <div className="contact-first-row">
            <div className="gallery-information-container-left">
                <h5 className="gallery-name"><b>Gerald Peters Gallery</b></h5>
                <p>24 East 78th Street</p>
                <p>New York, NY 10075</p>
                <p>212-628-9760</p>
                <p className="gallery-website"><a href="https://www.gpgallery.com/" target="_blank" rel="noopener noreferrer">gpgallery.com</a></p>
            </div> 
            <div className="gallery-information-container-right">
                <h5 className="gallery-name"><b>Gerald Peters Projects</b></h5>
                <p>1011 Paseo de Peralta</p>
                <p>Santa Fe, NM 87501</p>
                <p>505-954-5800</p>
                <p className="gallery-website"><a href="http://www.petersprojects.com/" target="_blank" rel="noopener noreferrer">petersprojects.com</a></p>
            </div> 
        </div>
        <div className="contact-second-row">
            <div className="gallery-information-container-left">
                <h5 className="gallery-name"><b>Spanierman Modern</b></h5>
                <p>24 East 78th Street</p>
                <p>New York, NY 10075</p>
                <p>212-628-9760</p>
                <p className="gallery-website"><a href="https://www.gpgallery.com/" target="_blank" rel="noopener noreferrer">gpgallery.com</a></p>
            </div> 
            <div className="gallery-information-container-right">
                <h5 className="gallery-name"><b>J. Willott Gallery</b></h5>
                <p>73300 El Paseo</p>
                <p>Palm Desert, CA 92260</p>
                <p>760-568-3180</p>
                <p className="gallery-website"><a href="http://www.jwillott.com/" target="_blank" rel="noopener noreferrer">jwillott.com</a></p>
            </div>
        </div>
    </div>
    );
}

export default Contact;