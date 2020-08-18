import React, { useEffect } from "react";

const Biblio_stone_pool_image = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/stone-words-pools.jpg'} className="individual-image-main" alt="Pools"/>
        </div>
    )
}

export default Biblio_stone_pool_image;