import { allImagesDesktopOrderExhIntersections, allImagesMobileOrderExhIntersections } from '../../../imageDataFiles/imageDataExhIntersections';

import React from 'react';
import GalleryPage from '../GalleryPage';

const Exhibition_intersections = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderExhIntersections}
        mobileImages={allImagesMobileOrderExhIntersections}
        alt="Intersections New York City exhibition series"
    />
);

export default Exhibition_intersections;