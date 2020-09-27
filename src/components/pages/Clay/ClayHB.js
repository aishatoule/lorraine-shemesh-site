import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderClayHB, allImagesMobileOrderClayHB } from '../../../imageDataFiles/imageDataClayHB';

const ClayHB = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderClayHB}
        mobileImages={allImagesMobileOrderClayHB}
        alt="Hand-Built Clay series"
    />
);

export default ClayHB;
