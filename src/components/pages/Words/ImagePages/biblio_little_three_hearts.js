import React, { useEffect } from "react";

const Biblio_little_three_hearts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/biblio_little_three_hearts.jpg'} className="individual-image-main" alt="Three hearts"/>
        </div>
    )
}

export default Biblio_little_three_hearts;