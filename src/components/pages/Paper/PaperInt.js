import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderPaperInt, allImagesMobileOrderPaperInt } from '../../../imageDataFiles/imageDataPaperInt';

const PaperInt = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderPaperInt}
        mobileImages={allImagesMobileOrderPaperInt}
        alt="Paper Intersections series"
    />
);

export default PaperInt;
