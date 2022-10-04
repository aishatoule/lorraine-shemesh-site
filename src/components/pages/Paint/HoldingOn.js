import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderHoldingOn, allImagesMobileOrderHoldingOn } from '../../../imageDataFiles/imageDataHoldingOn';

const HoldingOn = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderHoldingOn}
        mobileImages={allImagesMobileOrderHoldingOn}
        alt="Holding On series"
    />
);

export default HoldingOn;