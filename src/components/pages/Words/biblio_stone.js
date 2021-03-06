import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Biblio_stone = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
        <div>
            <div className="individual-words-hero-image-container">
                <img className="individual-words-hero-image-horizontal" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/stone_essay_hero.jpg'} alt="Archway, Arch, Arc" />
            </div>
            <div className="individual-words-paragraph-container">
                <h4 className="individual-words-title"><b>LIQUID STATES</b></h4>
                <h4 className="individual-words-paragraph">To the casual art observer, Lorraine Shemesh is painting about her favorite sport—swimming—and swimming pools. That same casual art observer might also think that Jasper Johns paints targets—his favorite sport—and patriotic portraits of flags. By the same token, Giorgio Morandi has been painting his bottle collection for most of his life, and de Kooning paints his women endlessly. In reality, each of these artists has found a “vehicle” which allows great freedom of expression and inspiration, not in a literary sense but rather in an abstract, painterly, functional sense.</h4>
                <h4 className="individual-words-paragraph">Viewed from a distance, Shemesh’s paintings are classical, figurative compositions. However, when one investigates Shemesh’s paintings up close, one discovers an extraordinary network of abstract compositions. The swimmer, the pool, and the water are formats that allow Shemesh to create a rich confection of color, texture, and light which stands on its own without needing a narrative format. Like any Pollock or de Kooning surface, Shemesh’s surfaces in <NavLink to="/liquidStates/ls1" className="words-link" target="wordsImage">Zig-Zag</NavLink>, 2003 and <NavLink to="/liquidStates/ls11" className="words-link" target="wordsImage">Propeller</NavLink>, 2002 are rich and dense.</h4>
                <h4 className="individual-words-paragraph">Most painters are influenced by classical painting and Shemesh is no exception. Just as Diebenkorn remarked candidly at dinner one night, “Matisse is my master...I am nothing more than a student of Matisse,” one might expect to hear this confession from any number of contemporary artists. Certainly Shemesh in her 2001 <i>Arch</i> series of three paintings was influenced by Matisse’s series of bronze reliefs, in which the figure becomes increasingly abstract.</h4>
                <h4 className="individual-words-paragraph">Shemesh is also influenced by Thiebaud’s sensuous celebration of paint. In her early work, Shemesh shows compositional and color influences of Thiebaud as well as subject-matter influence in her, <i>Cakes</i>, <i>Pastries</i>, <i>Donuts</i>, and <i>Bagels and Lox</i>, paintings. Like many painters, these influences become points of departure from which the artist pushes on to discover her own painting personality.</h4>
                <h4 className="individual-words-paragraph">In arriving at swimming pools and swimmers as the basic subject matter of her paintings, Shemesh has chosen the most difficult and challenging of subjects: water. Not only is water continually moving and ever-changing, it is almost impossible to replicate. Moreover, the challenge to the painter is greater because a body entering water becomes so distorted and refracted that rendering the human figure in water becomes not only difficult but also an act of creative alchemy.</h4>
                <h4 className="individual-words-paragraph">Shemesh uses the breaks in the water’s surface which produce ripples and odd patterns to express impasto techniques. The pool and the swimmer become the perfect vehicle for all aspects of abstract painting because of the distortion possibilities. This in turn introduces a mysterious element into the painting because the figure dissolves magically into the depth of the pool.</h4>
                <h4 className="individual-words-paragraph">In order to approach the challenge of replicating water and the dislocation it imposes on the figure immersed therein, Shemesh, who has been a dedicated figurative painter, did a 180 degree turn, and began painting abstractly. In fact, the problem of creating water provided such infinite possibilities for abstract painting that Shemesh was last seen headed toward the outer reaches of the galaxy.</h4>
                <h4 className="individual-words-paragraph">Some observers misconstrue Shemesh’s pool paintings as realist works about pop culture instead of the brilliant tour de force paintings that they are. Shemesh solves some difficult problems in classical painting. Foreshortening, for example, where the swimmer’s hand comes out and seems to break the picture’s plane in <i>Zig-Zag</i>, is dealt with masterfully.</h4>
                <h4 className="individual-words-paragraph">Shemesh’s formal training is evident in her drawings. They are classical in the best sense of the word. Shemesh’s paintings are so “loaded” with complex choices and the painterliness of her surfaces is so seductive and beautiful that any thoughtful perusal is richly rewarded!</h4>
                <div className="individual-words-text-container">
                    <p className="individual-words-closing-text">Stone, Allan, "Liquid States."</p>
                    <p className="individual-words-closing-text">Allan Stone Gallery Catalogue. (May 1, 2004).</p>
                </div>
            </div>
        </div>
    )
}

export default Biblio_stone;