import React from 'react'
import { NavLink } from 'react-router-dom';

const biblio_little = () => {
    return (
        <div>
            <div className="image-section">
                <img className="exhibition-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/biblio-litttle-shoes.jpg'} alt="exhibition"/>
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>LORRAINE SHEMESH AT ALLAN STONE</b></h4>
                <h4 className="individual-words-paragraph">In her third solo show at Stone, Lorraine Shemesh, a New York-based artist, showed paintings and drawings executed in a candid realist mode, as well as several pictorial quilts. The easel-size oils and drawings evidence Shemesh’s ongoing obsession with everyday objects such as beach balls, flip-flop sandals, lox and bagels, and women’s bathing suits.</h4>
                <h4 className="individual-words-paragraph">The brightly colored paintings owe a great deal to the example of Wayne Thiebaud, in particular his still lifes. In <NavLink to="/biblio_little_shoes" className="words-link" target="_blank">Bowling Shoes</NavLink>, for instance, ten or so pairs of this most prosaic (yet exotic) variety of footwear, arranged toe to heel, resemble a school of tropical fish wriggling its way upward into a neutral Thiebaudian space that heightens the shoes’ individual and collective "character." With their wandering laces and multi-hued design (most are half green, half red, with yellowish stripes and blue tips), these shoes project an initial charm that, upon longer perusal, is superseded not only by one’s admiration for the skillful rendering but also by the wit and intelligence of Shemesh’s socio-cultural eye. Accouterments of what is undeniably a non-elitist pastime, these bowling shoes mimic the movements of the masses: and only the size number on the heel truly distinguishes one pair of feet from another.</h4>
                <h4 className="individual-words-paragraph">Meyer Schapiro has called Thiebaud’s homages to the commonplace "mementos of the ephemeral and death." Shemesh’s displays also often have a dark side, as in the acidulous <NavLink to="/biblio_little_three_hearts" className="words-link" target="_blank">Three Hearts</NavLink>. This trio of desperately sentimental candy boxes has mortality written all over it. Shemesh’s typically high-gloss oils, applied in wide, swift strokes or short squiggles, add to the tainted appeal of these Valentine’s Day time bombs: the heart-shaped red and pink containers with large bows conceal (and exude) a sugar high that could kill an ox.</h4>
                <h4 className="individual-words-paragraph">Shemesh’s graphite drawings are executed in a drier realist manner. The best of them, <NavLink to="/biblio_little_menagerie" className="words-link" target="_blank">Menagerie</NavLink>, has a decidedly supernatural aura about it: a pile of rubber gloves is lit from below so that the three that appear to stick up randomly at the top cast pictorial shadows on the wall—a swan, a rabbit, and a giraffe. These spooky creatures would fit nicely into a horror film as the eventual possessors of some peaceful suburban household.</h4>
                <h4 className="individual-words-paragraph">All four quilts in the show are figurative. They depict scenes of exuberance or exhilaration, each marked by a touch of the surreal. For example, one of a group of ballet dancers, (Jump) has put a little extra into her leap and sails off the top of the quilt; or the girl occupying the rear seat of a roller coaster car, (<NavLink to="/biblio_little_cyclone" className="words-link" target="_blank">Cyclone</NavLink>), hangs on for dear life, her body stretched out like a flag in a stiff wind. While humorous, well-made and attractive the quilts are one-liners when hung alongside Shemesh’s provocative, culture-conscious oils and drawings. The quilts are meant to serve as bedspreads, the still lifes to throw light upon the foibles of material excess that increasingly influence our existence.</h4>
                
                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">Little, Carl, Lorraine Shemesh at Allan Stone. </p>
                    <p className="individual-words-closing-text">Art in America. (September 1988): 189.</p>
                </div>
            </div>
        </div>
    )
}

export default biblio_little;