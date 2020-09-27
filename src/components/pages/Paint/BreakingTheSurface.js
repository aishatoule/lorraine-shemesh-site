import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderBts, allImagesMobileOrderBts } from '../../../imageDataFiles/imageDataBTS';

const BreakingTheSurface = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderBts}
        mobileImages={allImagesMobileOrderBts}
        alt="Breaking the Surface series"
    />
);

export default BreakingTheSurface;
