import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderLs, allImagesMobileOrderLs } from '../../../imageDataFiles/imageDataLS';

const LiquidStates = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderLs}
        mobileImages={allImagesMobileOrderLs}
        alt="Liquid States series"
    />
);

export default LiquidStates;
