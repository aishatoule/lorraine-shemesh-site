import React, { useEffect } from "react";

const Biblio_goodman_study = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/biblio-goodman-study.jpg'} className="individual-image-main" alt="Study"/>
        </div>
    )
}

export default Biblio_goodman_study;