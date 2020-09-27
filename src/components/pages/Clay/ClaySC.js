import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderClaySC, allImagesMobileOrderClaySC } from '../../../imageDataFiles/imageDataClaySC';

const ClaySC = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderClaySC}
        mobileImages={allImagesMobileOrderClaySC}
        alt="Slip-Cast Clay series"
    />
);

export default ClaySC;
