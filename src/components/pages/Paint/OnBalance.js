import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderOnBalance, allImagesMobileOrderOnBalance } from '../../../imageDataFiles/imageDataOnBalance';

const OnBalance = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderOnBalance}
        mobileImages={allImagesMobileOrderOnBalance}
        alt="On Balance series"
    />
);

export default OnBalance;