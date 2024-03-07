import React from 'react';
import { allImagesDesktopOrderExhOnBalanceNYC, allImagesMobileOrderExhOnBalanceNYC } from '../../../imageDataFiles/imageDataExhOnBalanceNYC';
import GalleryPage from '../GalleryPage';

const Exhibition_onbalance_nyc = () => (
    <GalleryPage
        desktopImages={allImagesDesktopOrderExhOnBalanceNYC}
        mobileImages={allImagesMobileOrderExhOnBalanceNYC}
        alt="On Balance New York City exhibition"
    />
);

export default Exhibition_onbalance_nyc;