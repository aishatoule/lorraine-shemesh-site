import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderClayWT, allImagesMobileOrderClayWT } from '../../../imageDataFiles/imageDataClayWT';

const ClayWT = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderClayWT}
        mobileImages={allImagesMobileOrderClayWT}
        alt="Wheel-Thrown Clay series"
    />
);

export default ClayWT;
