import React from 'react';

const News = () => {
    return (
        <div>
            <div className="image-section">
                <img className="biography-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/HoodMuseumOfArt.jpg'} alt="Hood Museum of Art, Dartmouth"/>
            </div>
            <div className="biography-section-type">
                <p className="biography-type-title"><b>News</b></p>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2022</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p>Lorraine Shemesh's painting, <a class="biography-link" href="https://lorraineshemesh.com/spaceBetweenUs/tsbu29">Magnet</a>, from the solo exhibition at Dartmouth College titled, <i>Holding On</i>, has been acquired by the Hood Museum of Art for its Permanent Collection.</p>
                        </div>
                        <div className="biography-container">
                            <p>The National Academy of Design presents Lorraine Shemesh in conversation with the artist, Frances Barth, as part of their Exquisite Corpse Podcast.</p>
                        </div>
                    </div>
                </div>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2021</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p><a class="biography-link" href="https://nationalacademy.org/calendar/OutofMany_LorraineShemesh">Out of Many</a>:  Conversation with National Academician, Lorraine Shemesh and curator and cultural historian, Dr. Kelli Morgan</p>
                            <p>November 23, 2021, at 7:00 PM</p>
                        </div>
                        <div className="biography-container">
                            <p>Dartmouth College presents a solo exhibition of Lorraine Shemesh’s work titled, <i>Holding On</i>, September 21 - November 14, 2021, while she is the Artist-in-Residence there.</p>
                        </div>
                        <div className="biography-container">
                            <p>The painting, <a class="biography-link" href="https://lorraineshemesh.com/insideOut/io8">Crescent</a>, has entered the permanent collection of the Butler Institute of American Art.</p>
                        </div>
                    </div>
                </div>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2019</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p>2019 Artnet News named Lorraine Shemesh's show, <i>The Space Between Us</i>, one of the "10 Must-See Exhibitions During Santa Fe Art Week."</p>
                        </div>
                        <div className="biography-container">
                            <p>Guest of Honor</p>
                            <p>The Butler Institute of American Art, Youngstown, Ohio</p>
                            <p>May 5, 2019</p>
                        </div>
                    </div>
                </div>
                <div className="biography-year-group">
                    <p className="biography-year"><b>2018</b></p>
                    <div className="biography-content-right">
                        <div className="biography-container">
                            <p>2018 Work included in the exhibition:</p>
                            <p>Fool The Eye</p>
                            <p>The Nassau County Museum of Art</p>
                            <p>Roslyn Harbor, New York</p>
                            <p>November 18, 2017 - March 4, 2018</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
}

export default News;