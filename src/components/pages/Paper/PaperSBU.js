import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderPaperSBU, allImagesMobileOrderPaperSBU } from '../../../imageDataFiles/imageDataPaperSBU';

const PaperSBU = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderPaperSBU}
        mobileImages={allImagesMobileOrderPaperSBU}
        alt="Paper The Space Between Us series"
    />
);

export default PaperSBU;
