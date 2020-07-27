import React, {  } from 'react';
import { NavLink } from 'react-router-dom';
import biblio_riley from './IndividualWordsPages/biblio_riley.pdf';
import biblio_nash from './IndividualWordsPages/biblio_nash.pdf'

const Words = () => {
    return (
        <div>
             <div className="image-section">
                <img className="exhibition-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/intersectionsStudioShot_v3.jpg'} alt="Lorraine Shemesh in the studio looking at Intersections images."/>
            </div>

                <p className="exhibition-type-title"><b>Words</b></p>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2020</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name"><b>Catamaran</b>. Literature & Art. Volume 8, Issue 1. </p>
                            <p className="exhibition-name">(Spring 2020): illus. 60, 71-72.</p>
                        </div>        
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2019</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Balakian, Peter. "<NavLink to="/biblio_balakian" target="_blank" className="words-link">Lorraine Shemesh: Body, Light, Space</NavLink>."</p>
                            <p className="exhibition-name">Catalogue Essay, Gerald Peters Gallery, New York, (Sept. 12, 2019): 7-8.</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name">Zona, Louis, A. "<b><NavLink to="/biblio_zona_2016" target="_blank" className="words-link">Introduction</NavLink></b>."</p>
                            <p className="exhibition-name">The Space Between Us Catalogue, Gerald Peters Gallery, New York, (Sept. 12, 2019): 5.</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name">Boyle, Molly. <b><a className="words-link" target="_blank" rel="noopener noreferrer" href="https://www.nadnowjournal.org/reviews/patterning-en-pointe-lorraine-shemeshs-interstitial-paintings-and-vessels/">"Patterning en Pointe: Lorraine Shemesh's Interstitial Paintings and Vessels."</a></b></p>
                            <p className="exhibition-name"><b>NAD NOW.</b> (July 17, 2019).</p>
                        </div>   
                    </div>   
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2017</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Purcell, Janet, <b><NavLink to="/biblio_purcell" target="_blank" className="words-link">"Fine Arts: Must See Exhibition in Princeton."</NavLink></b></p>
                            <p className="exhibition-name"><b>The Times of Trenton.</b> (January 18,2017).</p>
                        </div>   
                    </div>   
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2016</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Holmes, Stephanie, <b>"This Week's Cover Artist: Lorraine Shemesh."</b></p>
                            <p className="exhibition-name"><b>Dan's Papers</b>. (September 2, 2016): Cover, illus., 107.</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name">Stoppelbein, Annie, "The New York Artist's Painted Pool Series."</p>
                            <p className="exhibition-name"><b>Nashville Arts</b>. (August 2016): Cover, illus., 1-7.</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name">Riley, Charles, A. "<b><a target="_blank" rel="noopener noreferrer" className="words-link" href={biblio_riley}>Art Review: Lorraine Shemesh Probes Balance of Abstraction and Figuration</a>.</b>."</p>
                            <p className="exhibition-name">Hamptons Art Hub, (June 3, 2016).</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name">Bascove, A. "<b><NavLink to="/biblio_bascove" target="_blank" className="words-link">Inside Out</NavLink>.</b>" - Review</p>
                            <p className="exhibition-name">Art Fuse, (May 9, 2016).</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name"><b>Catamaran</b>. Literary Reader. Volume 4, Issue 1.</p>
                            <p className="exhibition-name">(Spring 2016): illus. 14-18.</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Nash, Steve. <b><a target="_blank" rel="noopener noreferrer"className="words-link" href={biblio_nash}>"Suspended: Lorraine Shemesh's Underwater States of Being."</a></b></p>
                            <p className="exhibition-name">Catalogue Essay, Gerald Peters Gallery, New York. (May 7, 2016): 7-14.</p>
                        </div>
                    </div>   
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2011</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Shemesh, Lorraine. <b>"Hands-On Art."</b></p>
                            <p className="exhibition-name"><b>The New Yorker. </b>(August 1, 2011): 5.</p>
                        </div>   
                        <div className="exhibition-container">
                            <p className="exhibition-name">Barrett, Terry. <b>"Making Art - Form and Meaning."</b></p>
                            <p className="exhibition-name">McGraw-Hill, (2011): plate 3.44, 62-63.</p>
                        </div>   
                    </div>   
                </div>
            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2010</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Brendan, Davis. "<b><NavLink to="/biblio_davis" target="_blank" className="words-link">Lorraine Shemesh</NavLink></b>."</p>
                        <p className="exhibition-name"><b>Art Interview ONLINE Magazine.</b> (October, 2010)</p>
                    </div>   
                </div>   
            </div>
            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2009</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                    
                        <p className="exhibition-name">McCarthy, Gerard. "<b><NavLink to="/biblio_mccarthy" target="_blank" className="words-link">Lorraine Shemesh - Allan Stone.</NavLink>"</b></p>
                        <p className="exhibition-name"><b>Art in America. </b>(November 2009): illus. 197-198.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Little, Carl. "Elegant Darkness."</p>
                        <p className="exhibition-name"><b>Art New England. </b>(August/September 2009): 35.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">McCormack, Ed. "<b><NavLink to="/biblio_mccormack2" target="_blank" className="words-link">Lorraine Shemesh: The Weight of the Body Poised Against the Dance of Paint</NavLink></b>."</p>
                        <p className="exhibition-name"><b>Gallery & Studio</b>. (April/May 2009): illus. 5.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">"Allan Stone Gallery Presents Work of Lorraine Shemesh."</p>
                        <p className="exhibition-name"><b>Antiques and The Arts Weekly</b>. (March 6, 2009): 117.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Cunningham, Bill, "Cures for Cabin Fever."</p>
                        <p className="exhibition-name"><b>The New York Times</b>. (February 22, 2009): illus. 12.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Kuspit, Donald, "Lorraine Shemesh's Dancers: The Figure as Grand Abstract Gesture."</p>
                        <p className="exhibition-name">Catalogue Essay, Allan Stone Gallery. (February 28, 2009): 7-14.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Cheng, Scarlet, Shemesh, Lorraine,&nbsp;"<b><NavLink to="/biblio_cheng" target="_blank" className="words-link">Intersections - Questions and Answers</NavLink></b>."</p>
                    </div>
                </div>   
            </div>
            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2008</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Shemesh, Lorraine, "<b><NavLink to="/biblio_shemesh1" target="_blank" className="words-link">The Artist's Voice</NavLink></b>."</p>
                        <p className="exhibition-name"><b>Bulletin - National Academy Museum and School of Fine Arts.</b> Vol 26, Number 1, (Spring 2008): illus., 11.</p>
                    </div>   
                </div>   
            </div>
            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2007</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                    <p className="exhibition-name">"Figures."</p>
                        <p className="exhibition-name"><b>The Reading Room/7</b>. New York City, NY. Great Marsh Press. (Fall 2007): 293, illus. 294-295.</p>
                    </div>  
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b><a className="words-link" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/gp/video/detail/B014SM1UOK/">The Collector</a></b>. Directed by Olympia Stone. 2007.</p>
                    </div>  
                    <div className="exhibition-container">
                        <p className="exhibition-name">Shattuck, Kathryn, "In a Daughter’s Film Tribute, a Celebration of a Life Lived Through Art."</p>
                        <p className="exhibition-name"><b>The New York Times. </b>(February 10, 2007): B9.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">"Art World."</p>
                        <p className="exhibition-name"><b>Art in America.</b>(February 2007): 166.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Verel, Patrick, "Departed Collector Opens Film Celebration of Art and Artists."</p>
                        <p className="exhibition-name"><b>The New York Times. </b>. (January 21, 2007): 10.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Kuspit, Donald, "Lorraine Shemesh's Dancers: The Figure as Grand Abstract Gesture."</p>
                        <p className="exhibition-name">Catalogue Essay, Allan Stone Gallery. (February 28, 2009): 7-14.</p>
                    </div>
                    
                </div>   
            </div>
            
            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2006</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>Pool</b>- A Journal of Poetry. Los Angeles, CA. Literary Pool, Inc. Scarecrow Press. (Fall 2006): Volume 6, cover.</p>
                        <p className="exhibition-name"><b>The Reading Room/7</b>. New York City, NY. Great Marsh Press. (Fall 2007): 293, illus. 294-295.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Kennedy, Patrick, <b><NavLink to="/biblio_kennedy" target="_blank" className="words-link">"Seeing the Extraordinary in the Ordinary."</NavLink></b></p>
                        <p className="exhibition-name"><b>Esprit</b>. Boston University Press. (Summer 2006): illus., 4-5.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>Tribune Chronicle.</b>"Butler Trumbull Offering Works of New York Artist."</p>
                        <p className="exhibition-name"><b></b>(February 23, 2006): illus., 4D.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Crow, L., "Butler Exhibit - Breaking the Surface."</p>
                        <p className="exhibition-name"><b>The Vindicator. </b>(February 23, 2006): illus., D8-9.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>The Review Newspapers</b>, "Butler Art Museum to host Lorraine Shemesh Paintings."</p>
                        <p className="exhibition-name"><b></b>(February 16, 2006): 6.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Zona, Louis A., <b>"<NavLink to="/biblio_zona" target="_blank" className="words-link">Introduction</NavLink></b>."</p>
                        <p className="exhibition-name"><b>Museum Catalogue, Butler Institute of American Art.</b> (February 26, 2006): 3.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Rose, Daniel Asa, "Breaking the Surface."</p>
                        <p className="exhibition-name"><b>Museum Catalogue, Butler Institute of American Art. </b>(February 26, 2006): 5-7.</p>
                    </div>
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2005</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Yarnell, Kolby, “National Academy Names New Members.”</p>
                        <p className="exhibition-name"><b>The New York Sun</b>, (April 14, 2005): 15.</p>
                    </div>   
                </div>   
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2004</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Brown, Clint, McLean, Cheryl, "Composition and Expression."</p>
                        <p className="exhibition-name"><b>Drawing From Life</b>. Wadsworth, Thomson Learning, Inc., (2004): illus., 140.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>Tyler Gestures</b>. Tyler School of Art, Temple University, Number 39, (Winter 2004), cover.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Wolberg-Weiss, Marion, "Honoring the Artist."</p>
                        <p className="exhibition-name"><b>Dan's Papers</b>. Issue #18, (July 23, 2004): cover, 74.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>The New York Sun.</b></p>
                        <p className="exhibition-name">Arts & Letters, (April 29, 2004): illus., 14.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>TThe New York Times, Sunday</b>.</p>
                        <p className="exhibition-name"><b></b>Arts & Leisure Guide, (April 25, 2004): illus., 35.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Stone, Allan, "<b><NavLink to="/biblio_stone" target="_blank" className="words-link">Liquid States</NavLink></b>."</p>
                        <p className="exhibition-name"><b>Allan Stone Gallery Catalogue</b> . (May 1, 2004).</p>
                    </div>
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2003</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Enstice, Wayne, Peters, Melody.</p>
                        <p className="exhibition-name"><b>Drawing, Space, Form, & Expression</b>, Third Edition. Prentice Hall, (2003): illus., 261.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>Medicine and Health Rhode Island</b>. Rhode Island Medical Society, Volume 86, No. 7, (July, 2003): cover.</p>
                    </div>   
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2002</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Lundin, Norman, “The Perception of Appearance - A Decade of Contemporary American Figure Drawing.”</p>
                        <p className="exhibition-name"><b>Frye Art Museum Catalogue</b>. University of Washington Press, (June 29, 2002): illus.,107.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Blaugrund, Annette, “The 177th Annual: An Invitational Exhibition.”</p>
                        <p className="exhibition-name"><b>National Academy of Design Catalogue</b>. (May 1 - June 9, 2002): illus., 84.</p>
                    </div> 
                    <div className="exhibition-container">
                        <p className="exhibition-name">“National Academy of Design Opens 177th Annual Exhibition on May 1.”</p>
                        <p className="exhibition-name"><b>Antiques and The Arts Weekly</b>. (April 19, 2002): illus., 47.</p>
                    </div>    
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>2000</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Robertson, Jean, McDaniel, Craig, "Form and Light."</p>
                        <p className="exhibition-name"><b>Painting as a Language</b>, Wadsworth, Thomson Learning, Inc., (2000): illus., 140.</p>
                    </div>   
                    <div className="exhibition-container">
                    
                        <p className="exhibition-name">Goodman, Jonathan, "<b><NavLink to="/biblio_goodman" target="_blank" className="words-link">Lorraine Shemesh at Allan Stone.</NavLink></b>”</p>
                        <p className="exhibition-name"><b>Art in America</b>. (December 2000): illus., 122.</p>
                    </div> 
                    <div className="exhibition-container">
                        <p className="exhibition-name">McCormack, Ed. “Sharp Contrast In Solo Shows.”</p>
                        <p className="exhibition-name"><b>Gallery & Studio</b>. (September/October 2000): 11.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Campbell, Robin. “Keeping It Real.”</p>
                        <p className="exhibition-name"><b>Art & Auction</b>. (Summer 2000): illus., 98-99.  </p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>The New Yorker</b>. (May 29, 2000): illus., 26.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Johnson, “Lorraine Shemesh at Allan Stone.”</p>
                        <p className="exhibition-name"><b>The New York Times</b>. (May 26, 2000): 34.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Dobyns, Stephen, McCormack, Ed, "<b><NavLink to="/biblio_mccormack" target="_blank" className="words-link">Water-Works</NavLink></b>."</p>
                        <p className="exhibition-name"><b>Allan Stone Gallery Catalogue</b>. (April 29, 2000): illus., 2-3.</p>
                    </div>
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1997</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Polsky, Richard, “Contemporary American Art.”</p>
                        <p className="exhibition-name"><b>The Art Market Guide</b>. (May 16, 1997): 2.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1996</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Burgin, Richard.</p>
                        <p className="exhibition-name"><b>Boulevard</b>. (1996): Volume 11, cover.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1995</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">O’Hern, John D., “Re-presenting Representation II.”</p>
                        <p className="exhibition-name"><b>Arnot Art Museum Exhibition Catalog</b>. (October 1995): illus., 24-25.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Upshaw, Regan. “Lorraine Shemesh at Allan Stone.”</p>
                        <p className="exhibition-name"><b>Art in America</b>. (December 1995): illus., 122.</p>
                    </div> 
                    <div className="exhibition-container">
                        <p className="exhibition-name">Karmel, Pepe. “Marginal Areas of New York City’s Landscape.”</p>
                        <p className="exhibition-name"><b>The New York Times</b>. (August 1,1995): 21.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Parks, John A., “Capturing Moments of Danger.”</p>
                        <p className="exhibition-name"><b>American Artist</b>. (August 1995): illus., 44-50.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>Harpers Magazine</b>. (July 1995): illus., 26.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>Art Now Gallery Guide</b>. (May 1995): cover.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name">McCormack, Ed, “Dynamic Contrasts in the Art of Lorraine Shemesh.”</p>
                        <p className="exhibition-name"><b>Artspeak</b>. (May 1995): illus., 4.</p>
                    </div>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b>The New Yorker</b>, (May 18, 1995): illus., 18.</p>
                    </div>
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1994</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Gilbert, Sidney, “Allan Stone Mounts a Sensational Group Show.”</p>
                        <p className="exhibition-name"><b>Artspeak</b>. (October 1994): 7.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1991</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Ilein, Abraham, “The Problems of Content in Realism and Abstraction.”</p>
                        <p className="exhibition-name"><b>Artspeak</b>. (April 1991): 22.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1988</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Freeman, Dan, “Lorraine Shemesh at Allan Stone Gallery.”</p>
                        <p className="exhibition-name"><b>Cover Arts New York</b>. (June 4, 1988): 15.  </p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Little, Carl, ",<b><NavLink to="/biblio_little" target="_blank" className="words-link">Lorraine Shemesh at Allan Stone.</NavLink></b>"</p>
                        <p className="exhibition-name"><b>Art in America</b>. (September 1988): 189.</p>
                    </div> 
                    <div className="exhibition-container">
                        <p className="exhibition-name">Knight, Dustan, “Works That Emphasize Beauty.”</p>
                        <p className="exhibition-name"><b>Artspeak</b>. (March 1988): 7.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Mendelowitz, Daniel M., Wakeham, Duane A.</p>
                        <p className="exhibition-name"><b>A Guide to Drawing - Fourth Edition</b>. Holt, Rinehart, & Winston, (1988): 135.</p>
                    </div>
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1986</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Martin, Alvin.</p>
                        <p className="exhibition-name"><b>American Realism Twentieth - Century Drawings and Watercolors</b>. Harry Abrams, (1986): plate 187, 224.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1985</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Colford, Paul D., “Painting New York.”</p>
                        <p className="exhibition-name"><b>New York Newsday</b>. (November 5, 1985): illus.,11.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Teplow, Joshua, “The Figure As Symbol.”</p>
                        <p className="exhibition-name"><b>Artspeak</b>. (June 1985): illus., 1.</p>
                    </div>   
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1980</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Hopkins, Lorraine. “Local Art Gets An Influential Patron.”</p>
                        <p className="exhibition-name"><b>The Providence Journal Sunday Magazine</b>. cover painting. (March 16, 1980): 8.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Nutt, Richard. “Art Is On The Rocks.”</p>
                        <p className="exhibition-name"><b>RISCA Review</b>. (Winter 1980): 3.</p>
                    </div>   
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1979</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Taylor, Robert. “The Fault Is Our Times Not The Competition.”</p>
                        <p className="exhibition-name"><b>Boston Sunday Globe</b>. (October 28, 1979): 6.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Sozanski, Edward. “Still Lifes Are Worth Reliving At Art Association Of Newport.”</p>
                        <p className="exhibition-name"><b>The Providence Journal</b>. (February 14, 1979): 14.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Hopkins, Lorraine. “Providence Joins New York in Praising RISD Fellows.’”</p>
                        <p className="exhibition-name"><b>The Providence Journal</b>. (January, 1979): 9.</p>
                    </div>   
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1978</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Sozanski, Edward. “Feldman’s New Tack Heavy with Emotion, Religious in Tone.”</p>
                        <p className="exhibition-name"><b>The Boston Globe</b>. (December 12, 1978): 12.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1977</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Lioce, Tony. “Rhode Island Artists Will Finally Get Space to Offer Exhibits.”</p>
                        <p className="exhibition-name"><b>The Providence Journal Bulletin</b>. (March 31, 1977): B4.</p>
                    </div>      
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1976</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Graboys, Lois.“RISD Faculty Exhibit at Bell Gallery.”</p>
                        <p className="exhibition-name"><b>Anyart Journal</b>. (February 1976): 28.  </p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Wiley, Aubrey. “Art Show Opens Today.”</p>
                        <p className="exhibition-name"><b>The News</b>. Lynchburg, VA, (March 21, 1976): C-10.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Gray, Channing. “Artist Goes For The Real Thing.”</p>
                        <p className="exhibition-name"><b>The Providence Journal Bulletin</b>. (January16, 1976): 10.</p>
                    </div>   
                </div> 
            </div>

            <div className="exhibition-year-group">
                <p className="exhibition-year"><b>1975</b></p>
                <div className="exhibition-content-right">
                    <div className="exhibition-container">
                        <p className="exhibition-name">Gray, Channing. “Cooperative Show Some Fine Results.”</p>
                        <p className="exhibition-name"><b>Providence Journal Bulletin</b>. (November1975): 11.</p>
                    </div>    
                    <div className="exhibition-container">
                        <p className="exhibition-name">Robb, Christina. “The Plight of Artists in Boston.”</p>
                        <p className="exhibition-name"><b>The Boston Globe</b>. (January 30, 1975): cover.</p>
                    </div>   
                    <div className="exhibition-container">
                        <p className="exhibition-name">Graboys, Lois. “RISD Faculty Show.”</p>
                        <p className="exhibition-name"><b>East Bay Window</b>. (May 1-2, 1974): 15.</p>
                    </div>   
                </div> 
            </div>
        </div>
    );
}

export default Words;