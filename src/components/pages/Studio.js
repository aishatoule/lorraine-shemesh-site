import React from 'react';
import { allImagesDesktopOrderStudio, allImagesMobileOrderStudio } from '../../imageDataFiles/imageDataStudio';
import GalleryPage from './GalleryPage';

const Studio = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderStudio}
        mobileImages={allImagesMobileOrderStudio}
        alt="Lorraine Shemesh studio"
    />
);

export default Studio;
