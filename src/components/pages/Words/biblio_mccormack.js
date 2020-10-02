import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Biblio_mccormack = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <div>
            <div className="individual-words-hero-image-container">
                <img className="individual-words-hero-image-horizontal" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/paint-ww/loop.jpg'} alt="Loop"/>
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>WATER-WORKS</b></h4>
                <h4 className="individual-words-paragraph"><i>Water brings out in us the desire to transcend ourselves, to take on another nature, to push aside the laws that bind us, to court a beautiful danger... Entering the water, we leave time behind, we defeat the world... having briefly escaped our mortal destiny...</i></h4>
                <h4 className="individual-words-paragraph"><i>—Stephen Dobyns</i></h4>

                <h4 className="individual-words-paragraph">A world of silent gestures is to be found in the chance moves and shifts of swimming figures, heightened by the distorting ripples of the water and the rhythmic patterns of light. Lorraine Shemesh explores this world and the tension between order and chaos, between forms fully realized and forms dissolved, and between the edge of the picture plane and the action framed within, in her new series of paintings.</h4>
                <h4 className="individual-words-paragraph">The figures appear as if in an intricate dance, mysteriously drifting. The configurations, made by the figures as they interact, have a dream-like quality. Indeed, Shemesh works at the divide between what is known and what can only be dreamt.</h4>
                <h4 className="individual-words-paragraph">The enormous size of the canvases, the life-like scale of the figures, the intense color, and ravishing texture, ensure that the viewer experiences these paintings with a visceral charge more usually associated with the cinema. Yet, underpinning all the pictures is the solidity of the artist’s accomplished draughtsmanship and compositional inventiveness.</h4>
                <h4 className="individual-words-paragraph">Spontaneity also comes into play during the actual painting process. While pursuing her figurative interests, Shemesh has allowed herself to be more and more seduced by the viscosity of oil paint itself. A great variety of paint densities, from transparent to heavily opaque, are played off each other creating vast energy and depth and a fascinating trade between the forces of abstraction and representation. Shemesh’s work may be anchored firmly in masterful draughtsmanship, but the paint gives it wings. At moments the artist will use passages of extremely loose brushwork, splashes and drips, to produce a juicy tactile bonus, without disrupting the pictorial veracity with which she paints her figures. Although the natural liquidity of her subjects lends a certain latitude to her endeavor, it still does not explain how Shemesh makes such textural disparities cohere so seamlessly.</h4>
                <h4 className="individual-words-paragraph">Simultaneously, there are other subtle pleasures to be found in the more classical aspects of Shemesh’s work. An example may be found in <NavLink to="/breakingTheSurface/bts1" className="words-link" target="wordsImage">Link</NavLink> in which the female figure’s knee breaks the surface of the water and is painted as starkly real and solid while the remainder of the leg, submerged beneath the water, dissolves into striations of light and shadow. Shemesh also balances with exacting precision, the pressure of the figures against the edge of the picture. Gripping each other’s ankles, they form a dynamic circle, their chests thrust against the edge of the canvas in a motif as simultaneously sleek as the brushstroke of a Zen ink painter.</h4>
                <h4 className="individual-words-paragraph">Shemesh works important elements of the composition right up to and off the edge of the canvas, while anchoring the design in the center through more linear configurations. What makes Shemesh’s work unique, is that she employs such radical compositional strategies in a realist context, using figures to explore some of the geometric and amorphic possibilities indigenous to the circle, a common element in many of the paintings. Circles are formed by the connected limbs of the figures in paintings such as <NavLink to="/breakingTheSurface/bts1" className="words-link" target="wordsImage">Link</NavLink>, <NavLink to="/waterWorks/ww1" className="words-link" target="wordsImage">Loop</NavLink>, and <NavLink to="/waterWorks/ww7" className="words-link" target="wordsImage">Lasso</NavLink>, or by inflatable tubes through which various body parts emerge, as in <NavLink to="/breakingTheSurface/bts4" className="words-link" target="wordsImage">Ring</NavLink>. Shemesh can also use a dramatic line to great effect in works like <NavLink to="/waterWorks/ww5" className="words-link" target="wordsImage">Ellipse</NavLink>, where a figure plummets upside down against a luminous expanse that appears more stratospheric than liquid. In <NavLink to="/waterWorks/ww6" className="words-link" target="wordsImage">Crawl</NavLink>, the figure enters the picture spectacularly from outside the rectangle of the canvas and creates a circular configuration of water as it swirls around its outstretched arm.</h4>
                <h4 className="individual-words-paragraph">All of Shemesh’s compositions are further enlivened by her use of anatomical foreshortening and the natural magnification that occurs with the changing undulation of water. Such elements allow the artist to create a feeling of movement and to deconstruct the figure in ways that hint poignantly at the impermanence of the body and the fleeting nature of physical beauty. The allusions to mortality, sexuality, and the complex choreography of human relationships in the paintings of Lorraine Shemesh lend them a sense of intelligence and poetry that reinforces their sheer visual power.</h4>
                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">Dobyns, Stephen, McCormack, Ed, "Water-Works."</p>
                    <p className="individual-words-closing-text">Allan Stone Gallery Catalogue. (April 29, 2000): illus., 2-3.</p>
                </div>
            </div>
        </div>
    )
}

export default Biblio_mccormack;