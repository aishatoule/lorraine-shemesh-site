import React from 'react';
import { allImagesDesktopOrderExhTBSUSF, allImagesMobileOrderExhTBSUSF } from '../../../imageDataFiles/imageDataExhTBSUSF';
import GalleryPage from '../GalleryPage';

const Exhibition_tbsu_sf = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderExhTBSUSF}
        mobileImages={allImagesMobileOrderExhTBSUSF}
        alt="The Space Between Us Santa Fe exhibition series"
    />
);

export default Exhibition_tbsu_sf;