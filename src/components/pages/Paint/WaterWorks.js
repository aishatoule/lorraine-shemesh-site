import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderWw, allImagesMobileOrderWw } from '../../../imageDataFiles/imageDataWW';

const WaterWorks = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderWw}
        mobileImages={allImagesMobileOrderWw}
        alt="Water Works series"
    />
);

export default WaterWorks;
