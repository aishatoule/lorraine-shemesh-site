import React from 'react';
import { allImagesDesktopOrderExhInsideOut, allImagesMobileOrderExhInsideOut } from '../../../imageDataFiles/imageDataExhInsideOut';
import GalleryPage from '../GalleryPage';

const Exhibition_insideout = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderExhInsideOut}
        mobileImages={allImagesMobileOrderExhInsideOut}
        alt="Inside Out exhibition series"
    />
);

export default Exhibition_insideout;