import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderIO, allImagesMobileOrderIO } from '../../../imageDataFiles/imageDataIO';

const InsideOut = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderIO}
        mobileImages={allImagesMobileOrderIO}
        alt="Inside Out series"
    />
);

export default InsideOut;
