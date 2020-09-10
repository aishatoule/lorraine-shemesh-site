import React, { useEffect } from "react";

const Biblio_little_menagerie = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/biblio_little_menagerie.jpg'} className="individual-image-main" alt="Menagerie"/>
        </div>
    )
}

export default Biblio_little_menagerie;