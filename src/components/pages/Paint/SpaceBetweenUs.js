import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderTsbu, allImagesMobileOrderTsbu } from '../../../imageDataFiles/imageDataTsbu';

const SpaceBetweenUs = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderTsbu}
        mobileImages={allImagesMobileOrderTsbu}
        alt="The Space Between Us series"
    />
);

export default SpaceBetweenUs;