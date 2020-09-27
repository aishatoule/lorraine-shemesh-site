
import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderPp, allImagesMobileOrderPp } from '../../../imageDataFiles/imageDataPP';

const PaintedPools = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderPp}
        mobileImages={allImagesMobileOrderPp}
        alt="Painted Pools series"
    />
);

export default PaintedPools;
