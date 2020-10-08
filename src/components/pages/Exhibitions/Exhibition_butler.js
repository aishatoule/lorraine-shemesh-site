import React from 'react';
import { allImagesDesktopOrderExhButler, allImagesMobileOrderExhButler } from '../../../imageDataFiles/imageDataExhButler';
import GalleryPage from '../GalleryPage';

const Exhibition_butler = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderExhButler}
        mobileImages={allImagesMobileOrderExhButler}
        alt="Breaking The Surface Butler Institute series"
    />
);

export default Exhibition_butler;