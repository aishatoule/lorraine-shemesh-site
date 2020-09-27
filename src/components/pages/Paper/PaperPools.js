import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderPaperPools, allImagesMobileOrderPaperPools } from '../../../imageDataFiles/imageDataPaperPools';

const PaperPools = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderPaperPools}
        mobileImages={allImagesMobileOrderPaperPools}
        alt="Paper Pools series"
    />
);

export default PaperPools;
