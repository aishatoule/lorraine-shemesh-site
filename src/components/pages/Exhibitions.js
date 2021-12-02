import React from 'react';
import { NavLink } from 'react-router-dom';

const Exhibitions = () => {
    return (
        <div>
            <div className="image-section">
                <img className="biography-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/sbu_exhibition_with_lorraine.jpg'} alt="Lorraine Shemesh looking at her painting titled, Accordion"/>
            </div>
            <div className="exhibition-section-type">
                <p className="exhibition-type-title"><b>Solo Exhibitions</b></p>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2021</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Holding On</p>
                        <p className="exhibition-gallery-name"><b>Jaffe-Friede Gallery, Dartmouth College</b>, Hanover, New Hampshire</p>
                        <p className="exhibition-dates">September 21 - November 14, 2021</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2019</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name"><b><NavLink to="/exhibition_tsbu_nyc" className="exhibition-link">The Space Between Us</NavLink></b></p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, New York, New York</p>
                            <p className="exhibition-dates"></p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name"><b><NavLink to="/exhibition_tsbu_sf" className="exhibition-link">The Space Between Us</NavLink></b></p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Projects</b>, Santa Fe, New Mexico</p>
                            <p className="exhibition-dates">June 21 - August 17, 2019</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2016</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b><NavLink to="/exhibition_insideout" className="exhibition-link">Inside Out</NavLink></b></p>
                        <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">May 7 - June 10, 2016</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2009</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b><NavLink to="/exhibition_intersections" className="exhibition-link">Intersections - Paintings</NavLink></b></p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">February 28 - April 18, 2009</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2006</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><b><NavLink to="/exhibition_butler" className="exhibition-link">Breaking the Surface</NavLink></b></p>
                        <p className="exhibition-gallery-name"><b>Butler Institute of American Art</b>, Youngstown, Ohio</p>
                        <p className="exhibition-dates">February 26 - April 9, 2006</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2004</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Liquid States – Paintings and Drawings</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">May 1 - June 11, 2004</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2000</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Water-Works</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">April 29 - June 9, 2000</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1995</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Painted Pools</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">April 29 - May 27, 1995</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1991</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Recent Paintings</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">April 6 - May 4, 1991</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1988</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Paintings, Drawings and Quilts</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">March 5 - 31, 1988</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1985</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Quilts and Drawings</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">June 4 - July 3, 1985</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1983-84</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Paintings, Drawings and Quilts</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">December 3, 1983 - January 5, 1984</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1978</b></p>
                    <div className="exhibition-year-group">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Paintings and Watercolors</p>
                            <p className="exhibition-gallery-name"><b>Alpha Gallery</b>, Boston, Massachusetts</p>
                            <p className="exhibition-dates">December 3 - 31,1978</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1976</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Paintings and Drawings</p>
                        <p className="exhibition-gallery-name"><b>Rhode Island School of Design</b>, Providence, Rhode Island</p>
                        <p className="exhibition-dates">January 21 - 27, 1976</p>
                    </div>
                </div>
            </div>

            <div className="exhibition-section-type">
                <p className="exhibition-type-title"><b>Selected Group Exhibitions</b></p>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2021</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name"><a className="exhibition-link" href="https://nationalacademy.org/calendar/OutofMany_LorraineShemesh">e pluribus:  Out of Many, Digital Annual Exhibition</a></p>
                        <p className="exhibition-gallery-name"><b>National Academy of Design</b></p>
                        <p className="exhibition-dates">September 23 - December 31, 2021</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2020</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Abstract Allegories</p>
                        <p className="exhibition-gallery-name"><b>Spanierman Modern</b>, Miami Beach, Florida</p>
                        <p className="exhibition-dates">January 6 - February 8, 2020</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2019</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Art on Paper</p>
                        <p className="exhibition-gallery-name"><b>Spanierman Modern</b>, New York, New York</p>
                        <p className="exhibition-dates">March 7 - 10, 2019</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2018</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Women: Summer</p>
                        <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">June 21 - August 24, 2018</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2017-18</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Fool The Eye</p>
                        <p className="exhibition-gallery-name"><b>The Nassau County Museum of Art</b>, Arnold & Joan Saltzman Fine Art Building, Roslyn Harbor, New York</p>
                        <p className="exhibition-dates">November 18, 2017 - March 4, 2018</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2017</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Miami</p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Gallery & Spanierman Modern</b>, Miami, Florida</p>
                            <p className="exhibition-dates">December 5 - 10, 2017</p>
                        </div>
                    
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Market San Francisco</p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, Fort Mason Center for Arts & Culture, San Francisco, California</p>
                            <p className="exhibition-dates">April 27 - 30, 2017</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Philip Pearlstein: A Legacy of Influence</p>
                            <p className="exhibition-gallery-name"><b>Arts Council of Princeton</b>, Princeton, New Jersey</p>
                            <p className="exhibition-dates">January 7 - March 25, 2017</p>
                        </div>
                    </div>
                </div>

                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2015</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Depth of The Surface</p>
                            <p className="exhibition-gallery-name"><b>National Academy of Design Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">June 4 - August 23, 2015</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Armory Show</p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, New York, New York</p>
                            <p className="exhibition-dates">March 5 - 8, 2015</p>
                        </div>
                    </div>
                </div>

                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2014</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Miami</p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, Miami, Florida</p>
                            <p className="exhibition-dates">December 2 - 7, 2014</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Expo Chicago - The International Exposition of Contemporary & Modern Art</p>
                            <p className="exhibition-gallery-name"><b>Gerald Peters Gallery</b>, Chicago, Illinois</p>
                            <p className="exhibition-dates">September 18 - 21, 2014</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2012</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">art MRKT Contemporary & Modern Art Fair</p>
                            <p className="exhibition-gallery-name"><b>Dolby Chadwick Gallery</b>, San Francisco, California</p>
                            <p className="exhibition-dates">May 17 - 20, 2012</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Annual: 2012</p>
                            <p className="exhibition-gallery-name"><b>National Academy of Design Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">January 25 - April 29, 2012</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2011</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">The Collection of Allan Stone - Part 3</p>
                        <p className="exhibition-gallery-name"><b>Sotheby's</b>, New York, New York</p>
                        <p className="exhibition-dates">September 23, 2011</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2010</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Basel Miami Beach</p>
                            <p className="exhibition-gallery-name">Miami Beach, Florida</p>
                            <p className="exhibition-dates">December 2 - 5, 2010</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Armory Show Modern</p>
                            <p className="exhibition-gallery-name">New York, New York</p>
                            <p className="exhibition-dates">March 3 - 7, 2010</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2009</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Basel Miami Beach</p>
                            <p className="exhibition-gallery-name">Miami Beach, Florida</p>
                            <p className="exhibition-dates">December 3 - 6, 2009</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Reconfiguring The Body In American Art - 1820-2009</p>
                            <p className="exhibition-gallery-name"><b>National Academy of Design Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">July 8 - November 15, 2009</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">National Academy of Design 184th Annual Exhibition</p>
                            <p className="exhibition-gallery-name"><b>National Academy of Design Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">April 16 - June 10, 2009</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Art Show</p>
                            <p className="exhibition-gallery-name"><b>Park Avenue Armory</b>, New York, New York</p>
                            <p className="exhibition-dates">February 19 - 23, 2009</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2008</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Basel Miami Beach</p>
                            <p className="exhibition-gallery-name">Miami Beach, Florida</p>
                            <p className="exhibition-dates">December 4 - 7, 2008</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Chicago</p>
                            <p className="exhibition-gallery-name">Chicago, Illinois</p>
                            <p className="exhibition-dates">April 25 - 28, 2008</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2007</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Basel Miami Beach</p>
                            <p className="exhibition-gallery-name">Miami Beach, Florida</p>
                            <p className="exhibition-dates">December 6 - 9, 2007</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">National Academy of Design 182nd Annual Exhibition</p>
                            <p className="exhibition-gallery-name"><b>National Academy of Design Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">May 16 - June 24, 2007</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2006</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art Basel Miami Beach</p>
                            <p className="exhibition-gallery-name">Miami Beach, Florida</p>
                            <p className="exhibition-dates">December 7 - 10, 2006</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Recent Acquisitions: Contemporary Art by National Academicians</p>
                            <p className="exhibition-gallery-name"><b>National Academy Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">February 9 - April 30, 2006</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Art Show</p>
                            <p className="exhibition-gallery-name"><b>Seventh Regiment Armory</b>, New York, New York</p>
                            <p className="exhibition-dates">February 23 - 27, 2006</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2005</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Watershed Residency Recipients, Looking Back - 1997-2003</p>
                        <p className="exhibition-gallery-name"><b>Gallery 1448</b>, Baltimore, Maryland</p>
                        <p className="exhibition-dates">March 4 - 27, 2005</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2003</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Fire and Form</p>
                            <p className="exhibition-gallery-name"><b>Galerij Marc Van Meensel</b>, Zelem-Halen, Belgium</p>
                            <p className="exhibition-dates">April 26 - June 29, 2003</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Art Show</p>
                            <p className="exhibition-gallery-name"><b>Seventh Regiment Armory</b>, New York, New York</p>
                            <p className="exhibition-dates">February 20 - 24, 2003</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">San Francisco International Art Exposition</p>
                            <p className="exhibition-gallery-name"><b>Fort Mason Center</b>, San Francisco, California</p>
                            <p className="exhibition-dates">January 17 - 20, 2003</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2002</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Keramik-Ausstellung</p>
                            <p className="exhibition-gallery-name"><b>Gallery of Landesverband Bildender Kunstler</b>, Kiel, Germany</p>
                            <p className="exhibition-dates">September 23 - October 13, 2002</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The Perception of Appearance: A Decade of Drawing</p>
                            <p className="exhibition-gallery-name"><b>The Frye Art Museum</b>, Seattle, Washington</p>
                            <p className="exhibition-dates">June 29 - September 22, 2002</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">The 177th Annual: An Invitational Exhibition</p>
                            <p className="exhibition-gallery-name"><b>The National Academy of Design Museum</b>, New York, New York</p>
                            <p className="exhibition-dates">May 1 - June 9, 2002</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>2000</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Allan Stone Gallery Fortieth Anniversary</p>
                        <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                        <p className="exhibition-dates">November 4 - December 20, 2000</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1999</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">International Ceramic Competition</p>
                            <p className="exhibition-gallery-name"><b>Musee de Carouge</b>, Carouge, Switzerland</p>
                            <p className="exhibition-dates">October 2 - December 5, 1999</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Artists Remember Past Residencies</p>
                            <p className="exhibition-gallery-name"><b>Tryon Center For Visual Arts</b>, Charlotte, North Carolina</p>
                            <p className="exhibition-dates">September 16 - December 15, 1999</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Fire and Form</p>
                            <p className="exhibition-gallery-name"><b>Artspace</b>, Burgstein, Austria</p>
                            <p className="exhibition-dates">July 21 - August 14,1999</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1995</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Re-presenting Representation II</p>
                        <p className="exhibition-gallery-name"><b>Arnot Art Museum</b>, Elmira, New York</p>
                        <p className="exhibition-dates">September 8 - November 22, 1995</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1993</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">RISD Auction</p>
                        <p className="exhibition-gallery-name"><b>Sothebys</b>, New York, New York</p>
                        <p className="exhibition-dates">April 7, 1993</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1990</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Painters and Sculptors on View</p>
                        <p className="exhibition-gallery-name"><b>American Broadcasting Corporation</b>, New York, New York</p>
                        <p className="exhibition-dates">April 2 - 28, 1990</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1988</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">The Art of Sport</p>
                        <p className="exhibition-gallery-name"><b>The Bronx Museum of the Arts</b>, Bronx, New York</p>
                        <p className="exhibition-dates">June 16 - July 25, 1988</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1987</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Group Exhibit</p>
                            <p className="exhibition-gallery-name"><b>Akron Art Museum</b>, Akron, Ohio</p>
                            <p className="exhibition-dates">May 7 - June 3, 1987</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Group Exhibit</p>
                            <p className="exhibition-gallery-name"><b>Nasher Museum of Art at Duke University</b>, Durham, North Carolina</p>
                            <p className="exhibition-dates">March 21 - April 20, 1987</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1985-86</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">American Realism: Twentieth Century Drawings and Watercolors</p>
                        <p className="exhibition-gallery-name"><b>San Francisco Museum of Modern Art</b>, San Francisco, California</p>
                        <p className="exhibition-dates">November 7, 1985 - June 6, 1986</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1984</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Painting New York- Invitational</p>
                        <p className="exhibition-gallery-name"><b>Museum of the City of New York</b>, New York, New York</p>
                        <p className="exhibition-dates">October 4, 1983 - April 1, 1984</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1981-82</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">An Invitational of Festive Works</p>
                            <p className="exhibition-gallery-name"><b>A.I.R. Gallery</b>, New York, New York</p>
                            <p className="exhibition-dates">December 22, 1981 - January 9, 1982</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Group Show</p>
                            <p className="exhibition-gallery-name"><b>Staempfli Gallery</b>, New York, New York</p>
                            <p className="exhibition-dates">December 4 - 31, 1981</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">New Talent</p>
                            <p className="exhibition-gallery-name"><b>Allan Stone Gallery</b>, New York, New York</p>
                            <p className="exhibition-dates">June 2 - July 3, 1981</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Invitational</p>
                            <p className="exhibition-gallery-name"><b>Wistariahurst Museum</b>, Holyoke, Massachusetts</p>
                            <p className="exhibition-dates">April 4 - May 6, 1981</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Valley Artists Juried Exhibition</p>
                            <p className="exhibition-gallery-name"><b>Hampshire College Gallery</b>, South Amherst, Massachusetts</p>
                            <p className="exhibition-dates">March 3 - 29, 1981</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Art At Amherst</p>
                            <p className="exhibition-gallery-name"><b>Mead Art Museum</b>, Amherst College, Amherst, Massachusetts</p>
                            <p className="exhibition-dates">February 2 - 31, 1981</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1980</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Selections From The New England Drawing Competition Show</p>
                            <p className="exhibition-gallery-name"><b>University of Southern Maine Gallery</b>, Gorham, Maine</p>
                            <p className="exhibition-dates">October 1 -30, 1980</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-gallery-name"><b>Castleton State College Gallery</b>, Castleton, Vermont</p>
                            <p className="exhibition-dates">August 5 - September 1, 1980</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-gallery-name"><b>Plymouth State College Gallery</b>, Plymouth, New Hampshire</p>
                            <p className="exhibition-dates">June 1 - July 10, 1980</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-gallery-name"><b>Sharon Arts Center</b>, Peterborough, New Hampshire</p>
                            <p className="exhibition-dates">April 4 - May 9, 1980</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1979</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">New England Drawing Competition Show</p>
                            <p className="exhibition-gallery-name"><b>DeCordova Museum</b>, Lincoln, Massachusetts</p>
                            <p className="exhibition-dates">September 30 - October 25, 1979</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Contemporary Still-Life Invitational</p>
                            <p className="exhibition-gallery-name"><b>The Art Association of Newport</b>, Newport, Rhode Island</p>
                            <p className="exhibition-dates">February 24 - March 25, 1979</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">RISD Faculty Show</p>
                            <p className="exhibition-gallery-name"><b>Museum of The Rhode Island School of Design</b>, Providence, Rhode Island</p>
                            <p className="exhibition-dates">February 8 - March 4, 1979</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1977</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Collectors Collect Contemporary</p>
                            <p className="exhibition-gallery-name"><b>Institute of Contemporary Art</b>, Boston, Massachusetts</p>
                            <p className="exhibition-dates">June 1 - July 9, 1977</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Ten Painters At City Hall</p>
                            <p className="exhibition-gallery-name"><b>City Hall</b>, Providence, Rhode Island</p>
                            <p className="exhibition-dates">April 2 - 30, 1977</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">RISD Faculty Exhibition</p>
                            <p className="exhibition-gallery-name"><b>Museum of the Rhode Island School of Design</b>, Providence, Rhode Island</p>
                            <p className="exhibition-dates">February 3 - March 2, 1977</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1976</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Drawing Invitational</p>
                            <p className="exhibition-gallery-name"><b>Smith College Gallery</b>, Northampton, Massachusetts</p>
                            <p className="exhibition-dates">October 4 - November 3, 1976</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">RISD Faculty</p>
                            <p className="exhibition-gallery-name"><b>Bell Gallery</b>, Brown University, Providence, Rhode Island</p>
                            <p className="exhibition-dates">March 12 - 28, 1976</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1975</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Rhode Island Women, Invitational</p>
                            <p className="exhibition-gallery-name"><b>Hera Gallery</b>, Wakefield, Rhode Island</p>
                            <p className="exhibition-dates">November 5 - December 5, 1975</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Invitational</p>
                            <p className="exhibition-gallery-name"><b>Woods-Gerry Gallery</b>, Providence, Rhode Island</p>
                            <p className="exhibition-dates">June 6 - 20,1975</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">Works on Paper by Gallery Artists</p>
                            <p className="exhibition-gallery-name"><b>Alpha Gallery</b>, Boston, Massachusetts</p>
                            <p className="exhibition-dates">January 4 - 28, 1975</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1974</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">New Talent</p>
                            <p className="exhibition-gallery-name"><b>Alpha Gallery</b>, Boston, Massachusetts</p>
                            <p className="exhibition-dates">June 4 - July 3, 1974</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">RISD Faculty Show</p>
                            <p className="exhibition-gallery-name"><b>Museum of the Rhode Island School of Design</b>, Providence, Rhode Island</p>
                            <p className="exhibition-dates">April 17 - March 21, 1974</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1973</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Three Figurative Artists</p>
                        <p className="exhibition-gallery-name"><b>Smith College Gallery</b>, Northampton, Massachusetts</p>
                        <p className="exhibition-dates">October 1 - 31, 1973</p>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1972</b></p>
                    <div className="exhibition-content-right">
                        <div className="exhibition-container">
                            <p className="exhibition-name">Group Exhibit</p>
                            <p className="exhibition-gallery-name"><b>Tyler School of Art in Rome Gallery</b>, Rome, Italy</p>
                            <p className="exhibition-dates">April 2 - 29, 1972</p>
                        </div>
                        <div className="exhibition-container">
                            <p className="exhibition-name">USIS</p>
                            <p className="exhibition-gallery-name"><b>American Information Center in Rome</b>, Rome, Italy</p>
                            <p className="exhibition-dates">November 3 - 30, 1972</p>
                        </div>
                    </div>
                </div>
                <div className="exhibition-year-group">
                    <p className="exhibition-year"><b>1970</b></p>
                    <div className="exhibition-container">
                        <p className="exhibition-name">Group Exhibit</p>
                        <p className="exhibition-gallery-name"><b>Tanglewood Gallery</b>, Lenox, Massachusetts</p>
                        <p className="exhibition-dates">July 5 - 28, 1970</p>
                    </div>
                </div>
            </div>

        </div>)
}

export default Exhibitions;