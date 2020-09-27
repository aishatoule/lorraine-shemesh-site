import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderPaperObj, allImagesMobileOrderPaperObj } from '../../../imageDataFiles/imageDataPaperObj';

const PaperObj = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderPaperObj}
        mobileImages={allImagesMobileOrderPaperObj}
        alt="Paper Objects series"
    />
);

export default PaperObj;
