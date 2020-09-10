import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allImagesDesktopOrderExhInsideOut, allImagesMobileOrderExhInsideOut } from '../../../imageDataFiles/imageDataExhInsideOut';

class Exhibition_insideout_slideshow extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);   
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    render() {

    let mappedDesktopImages = allImagesDesktopOrderExhInsideOut.map((imageColumn, i) => {

        var slideIndex = 1;

        function openSlideShow(i,link,e) {
            e.preventDefault();
            console.log('slideshow opening with image ' + i + ": " + link);
            slideIndex = i;
        }

        // Next/previous controls
        function plusSlides(n) {
          showSlides(slideIndex += n);
        }

        function showSlides(n) {
          
          console.log('slideshow changing to image ' + n);

          /*var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("demo");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
          captionText.innerHTML = dots[slideIndex-1].alt;*/
        }

        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                return (
                    <a href="#" onClick={(e) => openSlideShow(i,image[0].link,e)}><img key={index} src={image[0].name} className="grid-image" alt="Inside Out exhibition, Gerald Peters Gallery, New York"/></a>
                )                    
            })}
            </div>
        )
    })

    let mappedMobileImages = allImagesMobileOrderExhInsideOut.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
            {imageColumn.map((image, index) => {
                return (
                    <div key={index} className="image-and-details-on-grid">
                        <img key={index} src={image.name} className="grid-image" alt="Inside Out exhibition, Gerald Peters Gallery, New York"/>
                        <div className="gallery-individual-image-details">
                            <p dangerouslySetInnerHTML={{__html: image.captionln1}}/>
                            <p>{image.captionln2}</p>
                            <p>{image.captionln3}</p>
                        </div>
                    </div>
                )                   
            })}
            </div>
        )
    })
    const { width } = this.state; 
    const isMobile = width <= 1000;
    const mappedImages = (isMobile) 
    ? 
    mappedMobileImages
    :
    mappedDesktopImages

    return (
        <div>
            <div className="image-grid-container">
                {mappedImages}
            </div>
        </div>
    )
    }
}

export default Exhibition_insideout_slideshow   ;