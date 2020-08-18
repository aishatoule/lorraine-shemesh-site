import React, { useEffect } from "react";

const Biblio_stone_bagels_and_lox = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return( 
        <div className="individual-image-content-container"> 
            <img src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/stone-words-bagels-and-lox.jpg'} className="individual-image-main" alt="Bagels and lox"/>
        </div>
    )
}

export default Biblio_stone_bagels_and_lox;