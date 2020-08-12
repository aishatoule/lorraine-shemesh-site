import React from 'react';
import { NavLink } from 'react-router-dom';

const biblio_mccarthy = () => {
    return (
        <div>
            <div className="image-section">
                <img className="individual-words-top-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/paint-int/checkmate_05_colorCorrected.jpg'} alt="Checkmate"/>
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>LORRAINE SHEMESH - ALLAN STONE</b></h4>
                <h4 className="individual-words-paragraph">The seven large oil paintings in "Intersections", Lorraine Shemesh's eighth solo at Allan Stone, marked a significant departure for the artist. Since the mid-1990s, she had been painting realistic figures viewed from under water in swimming pools. In recent years, the play of light on water began to take over the compositions, as reflection of the swimming bodies became increasingly abstract. In this recent show, Shemesh's subject is a pair of dancers wearing black and white costumes that cover them from head to toe. In each of the seven large oil paintings on view, most about six feet high or wide, the two lithe figures are presented in elaborate, sensual poses, intertwined or holding each other, against hazy, neutral grounds. They fill the shallow, almost claustrophobic space of the composition. Working from life, Shemesh paints the dancers wearing outfits she designed, which feature black-and-white bands in the front and solid black backs. The pattern helps establish a strong, rhythmic geometry that dominates each painting, and the vitality of the new series stems largely from the play of these abstract shapes.</h4>
                <h4 className="individual-words-paragraph">In <NavLink to={{
                pathname:"/int8"}} target="_blank" className="words-link">Hook</NavLink> (2007), the figures adopt a dynamic standing pose that suggests a tall vessel or cup, with the pair's gracefully outstretched arms and curving upper torsos surmounting the thin "stem" of their intertwined legs. A number of canvases feature a couple facing each other on the floor and viewed from above. Checkmate (2008), shows seated figures with their conjoined outstretched legs spanning the center, and bowed head and shoulders of each pressed toward the far sides of the canvas. The alternating black-and-white bands of their leggings, creating a particularly strong checkerboard pattern, add to the tension here. The formal play of the composition also heightens a sense of narrative, in this case an ominous one since the figures look like captives. Eyes are veiled by the head-to-toe costume, and shoulders are pulled far back, as if the arms were tightly tethered. Throughout, Shemesh indicates a surprising range of drama, movement and even emotional nuance within the limited parameters she has set for herself in the new series.</h4>
                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">McCarthy, Gerard, Art In America review</p>
                </div>
            </div>
        </div>
    )
}

export default biblio_mccarthy;