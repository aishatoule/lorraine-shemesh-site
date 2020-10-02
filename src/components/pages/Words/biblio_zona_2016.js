import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Biblio_zona_2016 = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <div>
            <div className="individual-words-hero-image-container">
                <img className="individual-words-hero-image-horizontal" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/Attached_gallery.jpg'} alt="The Space Between Us paintings pictured in the studio"/>
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>INTRODUCTION</b></h4>
                <h4 className="individual-words-paragraph">Knowing and loving the work of Lorraine Shemesh as I do, it is hard for me to believe that her earliest desire was to become a dancer. But one can also understand that her brilliance as a figurative painter just may have its roots in the art of dance. As Martha Graham and her disciples have revealed, the human form as an abstraction, both still and in motion, may be nature's greatest visual achievement. I first became aware of Shemesh's work several years back when her focus was the human form as seen through the magical prism of water. The works were both powerful and sensitive, energy rich and calm.</h4>
                <h4 className="individual-words-paragraph">Her current work logically extends her studied underwater theme. She has moved the human form into a world of color and form recalling Picasso's Saltimbanques from his Rose period. Lorraine Shemesh's figures are positioned within color rich composition, literally one with formal elements. Her 2017 painting, <NavLink to="/spaceBetweenUs/tsbu8" className="words-link" target="wordsImage">Hinge</NavLink>, of a dancer with white face paint reclining within an optical field of tan and white shapes is a work so accomplished as to be able to share a wall with the great Picasso.</h4>
                <h4 className="individual-words-paragraph">In her work <NavLink to="/spaceBetweenUs/tsbu12" className="words-link" target="wordsImage">The Space Between Us</NavLink> from 2015, two figures are positioned to challenge all notions of pictorial space. The Albers-like geometry is juxtaposed by silver clad figures in a composition of visual give and take.</h4>
                <h4 className="individual-words-paragraph">A favorite work is <NavLink to="/spaceBetweenUs/tsbu19" className="words-link" target="wordsImage">Interlock</NavLink>, 2017, where primaries in box-form create a sense of space both deep and shallow. The embracing figures provide a psychological, if not visual human warming. A very recent work, <NavLink to="/spaceBetweenUs/tsbu1" className="words-link" target="wordsImage">Accordion</NavLink>, is Baroque in nature with its dramatic sense of light and circular chasing forms.</h4>
                <h4 className="individual-words-paragraph"><NavLink to="/spaceBetweenUs/tsbu17" className="words-link" target="wordsImage">Riddle</NavLink>, 2018, is a virtual clinic on technique. Lorraine Shemesh is a master draughtsman who knows how to build a successful painting through the subtle build-up of line and texture independent of color. Riddle, where dancer meets athlete vibrates with visual effects. Values are also at work, energizing and help in the definition of space. <NavLink to="/spaceBetweenUs/tsbu4" className="words-link" target="wordsImage">Attached</NavLink>, 2018, again presents two figures ablaze with warm tones—and with multiple light sources that even harken back to the drama of Carravaggio-like light and shadow. This is a master work in which color explodes and where a center white light washes the figures, creating mystifying shadow effects that seemingly at once push the figure frontally and then look like Hans Hoffman's push-pull theories.</h4>
                <h4 className="individual-words-paragraph">It is not surprising to recognize that Lorraine Shemesh excels as well in the realm of clay. Her porcelain and stoneware pieces are utilitarian, for sure, but that sensitivity seen in the paintings is clearly present in her vessels. I am again reminded of Picasso who achieved in both disciplines. Shemesh's creations in clay are as graceful as her swimmers and as beautifully accomplished as her recent paintings of interlocking figures.</h4>
                <h4 className="individual-words-paragraph">Few artists have achieved as much and even a fewer number have inspired others with such skill and innovation.</h4>
                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">Louis A. Zona, The Space Between Us catalogue introduction</p>
                    <p className="individual-words-closing-text">Executive Director and Chief Curator, The Butler Institute of American Art</p>
                </div>
            </div>
        </div>
    )
}

export default Biblio_zona_2016;