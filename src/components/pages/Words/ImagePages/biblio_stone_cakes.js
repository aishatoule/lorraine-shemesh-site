import React, { useEffect } from "react";

const Biblio_stone_cakes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/stone-words-cupcake.jpg'} className="individual-image-main" alt="Cakes"/>
        </div>
    )
}

export default Biblio_stone_cakes;