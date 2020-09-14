import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { allImagesDesktopOrderBts, allImagesDesktopOrderBts2, allImagesMobileOrderBts } from '../../../imageDataFiles/testImageData';

const BreakingTheSurface = () => {

    const openModal = () => {
        document.getElementById("myModal").style.display = "block";
    }
    
    const closeModal= () =>{
        document.getElementById("myModal").style.display = "none";
    }

    var slideIndex = 1;
    const showSlides = (n) =>{
        var i;
        // var slides = document.getElementsByClassName("mySlides");
        var slides = allImagesDesktopOrderBts;
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        // for (i = 0; i < slides.length; i++) {
        //     slides[i] = "none";
        // }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        console.log(slides)
        console.log(slideIndex)
        // slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
    }
    showSlides(slideIndex);

    const plusSlides = (n) => {
        showSlides(slideIndex += n);
    }

    const currentSlide=(n)=> {
        showSlides(slideIndex = n);
    }

    

    let mappedDesktopImages = allImagesDesktopOrderBts2.map((imageColumn, i) => {
        return(
            <div key={i} className="column">
                {imageColumn.map((image, index) => {
                    return (
                        <img key={index} src={image.name} className="grid-image" alt="Breaking the Surface series"/>
                    )                    
                })}
            </div>
        )
    })
    // console.log(allImagesDesktopOrderBts2)
    let mappedDesktopImages2 = allImagesDesktopOrderBts.map((image, i) => {
        return (
            <div className="row">
                <div className="column-modal">
                    <img src="img_nature.jpg" style="width:100%" 
                    onclick={() => {
                        openModal();
                        currentSlide(1)
                    }}className="hover-shadow cursor" />
                </div>
            </div>
        )
    })

    // let mappedMobileImages = allImagesMobileOrderBts.map((imageColumn, i) => {
    //     return(
    //         <div key={i} className="column">
    //         {imageColumn.map((image, index) => {
    //             return (
    //                 <div key={index} className="image-and-details-on-grid">
    //                     <img key={index} src={image.name} className="grid-image" alt="Breaking the Surface series"/>
    //                     <div className="gallery-individual-image-details">
    //                         <p>{image.artistName}</p>
    //                         <p><span className="italics">{image.title}</span>{image.year !== undefined && ", " + image.year}</p>
    //                         <p>{image.dimensions}</p>
    //                         <p>{image.privateCollection}</p>
    //                     </div>
    //                 </div>
    //             )                   
    //         })}
    //         </div>
    //     )
    // })

    return (
        <div>
            <div className="image-grid-container row">
                {mappedDesktopImages}
            </div>

            {/* MODAL CODE */}
            <div id="myModal" className="modal">
                <span className="close cursor" onclick={closeModal()}>&times;</span>
                <div className="modal-content">
                    {/* map the other set of images */}
                    <div className="mySlides">
                        <div className="numbertext">1 / 4</div>
                        <img src="img_nature_wide.jpg" style="width:100%"/>
                    </div>
                    <div className="mySlides">
                        <div className="numbertext">1 / 4</div>
                        <img src="img_nature_wide.jpg" style="width:100%"/>
                    </div>
                    
                    <a href="/hi" className="prev" onclick={plusSlides(-1)}>&#10094;</a>
                    <a href="/hi" className="next" onclick={plusSlides(1)}>&#10095;</a>
                    <div className="caption-container">
                        <p id="caption"></p>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default BreakingTheSurface;