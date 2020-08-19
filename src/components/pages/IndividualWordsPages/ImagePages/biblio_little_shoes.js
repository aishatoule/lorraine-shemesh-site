import React, { useEffect } from "react";

const Biblio_little_shoes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/biblio-litttle-shoes.jpg'} className="individual-image-main" alt="Shoes"/>
        </div>
    )
}

export default Biblio_little_shoes;