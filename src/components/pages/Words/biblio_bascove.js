import React, { useEffect } from "react";

const Biblio_bascove = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <div>
            <div className="individual-words-hero-image-container">
                <img className="individual-words-hero-image-horizontal" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/paint-io/tilt_Em201604_Tilt_painting_v1.jpg'} alt="Tilt"/>
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>LORRAINE SHEMESH: Inside Out</b></h4>
                <h4 className="individual-words-paragraph">Lorraine Shemesh creates an untethered kaleidoscope from the distortions of the body reflected in those most primal of elements: sunlight and water. With luscious thick paint, fragments of the figure act as an anchor to turbulent motion, producing both tension and excitement, the struggle of staying afloat.</h4>
                <h4 className="individual-words-paragraph">The paintings are a balance of contradictions. “Tilt” is dominated by the large stabilizing circle of a luminous purple inner tube. Although there is a sense of solidity and safety from below, the figure above reads as delicate, almost dissolving, in the strong light above.</h4>
                <h4 className="individual-words-paragraph">The large scale of the paintings – up to 6 feet in height – adds to a sense of being surrounded by larger than life-sized figures and forcefully moving water. With “Spots,” the almost bruised-colored flesh of the foreground’s giant thigh is transformed, as the underwater anatomy becomes abstract shapes of glowing green and pink. There is a joy to these vibrant brushstrokes and splashes, adding to the viewer’s pleasure, enticing the immersion into a disorienting environment.</h4>
                
                <img className="individual-words-image-vertical" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/paint-io/spots_CD25_1b_8.jpg'} alt="Spots" />
                
                <h4 className="individual-words-paragraph">Twisted and foreshortened patterns observed in the fabric clinging to bodies and currents of water are examined further in this exhibition by the inclusion of Shemesh’s work in clay. This is the first time her work in porcelain and stoneware, paint and graphite, have been exhibited together and having the integration of related motifs is illuminating.</h4>
                <h4 className="individual-words-paragraph">Brilliant color prevails in the paintings but her drawings and clay pieces are studies in monochrome. All the better to focus on the essentials of form, the repetitions and deviations of patterns. The flowing shapes in “Black & White Tiltled Vessel” and “Small Checked Black & White Cylinder” could be straight out of one of her pool images.</h4>
                
                <div className="horizontal-image-set-container">
                    <img className="individual-words-image-vertical-two" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/clay-hb/blackwhitetiltednervess.jpg'} alt="Black & White Titled Vessel" />
                    <img className="individual-words-image-vertical-two" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/blue_white_vessel.jpg'} alt="Blue & White Swirl Vessel" />
                </div>

                <h4 className="individual-words-paragraph">To obtain the eloquent graphics of her clay work, Shemesh employs the formidable Japanese technique called of Neriage. This is a time-consuming process of layering different colored clay bodies which are then hand built, or worked on a banding wheel. While bringing sinuous twists and swirls to the clay, the unity of the color is retained throughout the vessel. The materials of earth and the intense fire needed to bring them to fruition (often destructive, many pieces don’t survive the extreme heat of the kiln) are an intrinsic counterpoint to the images of water and air of her larger works.</h4>
                
                <img className="individual-words-image-vertical" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/clay-hb/smcheckedblackwhitenercyl.jpg'} alt="Small Checked Black & White Cylinder" />
                
                <h4 className="individual-words-paragraph">The mirroring of figures, one intact, one disordered, is a theme that permeates Shemesh’s compositions. Not surprisingly, in one who has trained as a dancer, she is well aware of both the body’s strengths and frailties. The opposing curves made of the swimming woman in “Crescent,” one muscular and highlighted with the sun’s reflections, the other so fragmented as to almost be unrecognizable, are double versions of the body’s physicality.</h4>
                
                <img className="individual-words-image-vertical" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/paint-io/crescent_CD26_03_0.jpg'} alt="Crescent" />

                <h4 className="individual-words-paragraph">The various techniques explored in this show infuse and echo each other, but the sensation of impassioned movement, often with a precarious edge, abounds. Color penetrates and incites. For Shemesh, the materials in her hands contain fire and water, light and dark, the gravitational pull of order into chaos becomes a meditation on the passage of time and the keenly felt circumstances of life itself.</h4>

                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">Bascove, A., Art Fuse review</p>                  
                </div>
            </div>
        </div>
    )
}

export default Biblio_bascove;