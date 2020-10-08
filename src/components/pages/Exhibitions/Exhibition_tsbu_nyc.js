import React from 'react';
import { allImagesDesktopOrderExhTBSUNYC, allImagesMobileOrderExhTBSUNYC } from '../../../imageDataFiles/imageDataExhTBSUNYC';
import GalleryPage from '../GalleryPage';

const Exhibition_tbsu_nyc = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderExhTBSUNYC}
        mobileImages={allImagesMobileOrderExhTBSUNYC}
        alt="The Space Between Us New York City exhibition series"
    />
);

export default Exhibition_tbsu_nyc;