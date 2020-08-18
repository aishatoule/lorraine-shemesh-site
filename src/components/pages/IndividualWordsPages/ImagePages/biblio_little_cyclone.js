import React, { useEffect } from "react";

const Biblio_little_cyclone = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/biblio_little_cyclone.jpg'} className="individual-image-main" alt="Cyclone"/>
        </div>
    )
}

export default Biblio_little_cyclone;