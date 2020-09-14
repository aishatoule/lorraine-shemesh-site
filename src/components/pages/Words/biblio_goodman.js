import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Biblio_goodman = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <div>
            <div className="individual-words-hero-image-container">
                <img className="individual-words-hero-image-horizontal" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/paint-bts/link.jpg'} alt="Link"/>
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>LORRAINE SHEMESH AT ALLAN STONE</b></h4>
                <h4 className="individual-words-paragraph">Lorraine Shemesh has made a name for herself painting swimmers, whose twisting bodies effortlessly hover in a medium that supports their weight. Never still, water is itself an interesting subject to paint; here, in seven large oils and several small studies, the artist focuses on the way it distorts and refracts both light and forms. Shemesh is very much a realist painter, but her choices of image and context enable her to encompass a broad variety of styles and effects in her oils. She uses photographs as a reference, to record water's light and color shifts, but mostly the work comes from her imagination. Sometimes she will work out the swimmers' poses by drawing dancers modeling similar physical relationships; her studies, done on Mylar, demonstrate her intense interest in how the body can twist and bend, contorting itself with abandon.</h4>
                <h4 className="individual-words-paragraph">In the oil-on-canvas "<NavLink to="/bts1" className="words-link" target="_blank">LINK</NavLink>" (1999), a view down into the water shows two swimmers, their backs arched, hands gripping each other's ankles and feet. Seen in profile, the bodies forming a rough "O" around the perimeter of the nearly 67-inch-square canvas are both above and beneath the water surface, allowing Shemesh to capture light on flesh as well as the distortions that occur when forms are submerged. Color is important: one sees the reds, tans and browns of skin color, the blue of water and the wavy white lines of light refracted through the water. In the graphite-on-Mylar <NavLink to="/biblio_goodman_study" className="words-link" target="_blank">study</NavLink> for that work, the style of the drawing is gestural, and Shemesh embeds fast renditions of bones in the arms and legs to work out the anatomy. Viewers are given an unusual opportunity to see the structure beneath the flesh.</h4>
                <h4 className="individual-words-paragraph">For all the care and meticulousness Shemesh exhibits in representing the bodies, she is equally involved in the abstract effects. The play of light on water is reproduced in "LINK" as groups of jagged and elliptical white lines. Here, being true to nature enables Shemesh to record a dazzling array of painterly gestures, some of them squarely within the tradition of Abstract Expressionism. There is an innate sense of drama in more that a few of the paintings. In "<NavLink to="/ww6" className="words-link" target="_blank">CRAWL</NavLink>" (1998) we see from below a female swimmer extending her right arm across the width of the painting. The top half of the work is gray-white, suggesting the water's disturbed surface, and from underneath we can recognize how the liquid distorts the woman's features as a bubble emerges from her mouth. The drama occurs because of the highlighting and contrast of light and dark. Shemesh is a skilled artist, but that isn't all - she's also interested in showing how the body transcends the physical limitations of place. Her use of abstract effects in the service of representation is striking and makes her art complex.</h4>
                
                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">Goodman, Jonathan, “Lorraine Shemesh at Allan Stone.”</p>
                    <p className="individual-words-closing-text">Art in America. (December 2000): illus., 122.</p>
                </div>
            </div>
        </div>
    )
}

export default Biblio_goodman;