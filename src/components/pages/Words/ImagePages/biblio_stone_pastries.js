import React, { useEffect } from "react";

const Biblio_stone_pastries = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/stone-words-pastries.jpg'} className="individual-image-main" alt="Pastries"/>
        </div>
    )
}

export default Biblio_stone_pastries;