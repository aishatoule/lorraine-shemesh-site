import React from 'react';
import emailIcon from '../../images/icons/emailIcon.svg';
import instagramIcon from '../../images/icons/instagramIcon.svg';
import wikipediaIcon from '../../images/icons/wikipediaIcon.svg';

const Contact = () => {
    var currentYear = new Date().getFullYear();
    return (
        <div className="contact-container">
            <div className="gallery-information-container">
                <h5 className="gallery-name"><b>Gerald Peters Contemporary</b></h5>
            </div> 
            <div className="gallery-information-container">
                <p><b>New York</b></p>
                <p>24 East 78th Street</p>
                <p>New York, NY 10075</p>
                <p>212-628-9760</p>
                <p className="gallery-website"><a href="https://gpgallery.com/artist/lorraine-shemesh/" target="_blank" rel="noopener noreferrer">gpgallery.com</a></p>
            </div> 
            <div className="gallery-information-container">
                <p><b>Santa Fe</b></p>
                <p>1011 Paseo de Peralta</p>
                <p>Santa Fe, NM 87501</p>
                <p>505-954-5800</p>
                <p className="gallery-website"><a href="https://gpgallery.com/artist/lorraine-shemesh/" target="_blank" rel="noopener noreferrer">gpgallery.com</a></p>
            </div> 
            <div className="contact-address-section">
                <div className="contact-address-container">
                    <img src={emailIcon} className="contact-type-icon" alt="email icon"/>
                    <p className="contact-address-text"><a href="mailto:lorraineshemesh@gmail.com">lorraineshemesh@gmail.com</a></p>
                </div>
                <div className="contact-address-container">
                    <img src={instagramIcon} className="contact-type-icon" alt="instagram icon"/>
                    <p className="contact-address-text"><a href="https://www.instagram.com/lorraine.shemesh/" target="_blank" rel="noopener noreferrer">Instagram: @lorraine.shemesh</a></p>
                </div>
                <div className="contact-address-container">
                    <img src={wikipediaIcon} className="contact-type-icon" alt="wikipedia icon"/>
                    <p className="contact-address-text"><a href="https://en.wikipedia.org/wiki/Lorraine_Shemesh" target="_blank" rel="noopener noreferrer">Wikipedia: Lorraine Shemesh</a></p>
                </div>
            </div>
            <div className="legal-text">
                <p>All images and other content on this website copyright © {currentYear} Lorraine Shemesh. All rights reserved worldwide.</p>
                <br/>
                <p>Images are provided for personal, educational, and non-commercial use only. Do not reproduce images or other content without permission in writing. Unauthorized use of any images and other content on this website is strictly prohibited.</p>
                <br/>
                <p>Site redesigned, developed, and engineered by Tillman Erb and Aisha Toulegenova.</p>
            </div>
        </div>
    );
}

export default Contact;