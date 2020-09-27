import React from 'react';
import GalleryPage from '../GalleryPage';
import { allImagesDesktopOrderIntersections, allImagesMobileOrderIntersections } from '../../../imageDataFiles/imageDataIntersections';

const Intersections = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderIntersections}
        mobileImages={allImagesMobileOrderIntersections}
        alt="Intersections series"
    />
);

export default Intersections;
