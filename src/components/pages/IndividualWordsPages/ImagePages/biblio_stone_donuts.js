import React, { useEffect } from "react";

const Biblio_stone_donuts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/stone-words-donuts.jpg'} className="individual-image-main" alt="Donuts"/>
        </div>
    )
}

export default Biblio_stone_donuts;