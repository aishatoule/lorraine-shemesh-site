import React from 'react';

const Lightbox = () => (
    <div class="overlay">
        <button class="overlay-previous"></button>
        <div class="overlay-image-container">
            <div class="overlay-image-content">
                <div class="overlay-image-wrappper">
                    <img class="overlay-image" src="https://via.placeholder.com/2000x2000.png" />
                </div>
                <div class="overlay-bottom-wrapper">
                    <div class="overlay-description"></div>
                    <div class="overlay-details"></div>
                </div>
            </div>
        </div>
        <button class="overlay-next"></button>
    </div>
);
export default Lightbox;