import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allImagesDesktopOrderExhTBSUSF } from '../../imageDataFiles/imageDataExhTBSUSF';
import { allImagesDesktopOrderExhTBSUNYC } from '../../imageDataFiles/imageDataExhTBSUNYC';

const IndividualPhoto = () => {
    const [setWidth] = useState(window.innerWidth);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        window.scrollTo(0, 0);
    });
    
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };
    
    const getNewIndex = (index) => {
        setCurrentImageIndex(index)
    }
    
    let { id } = useParams();
    var currentGroup;
    var idWithoutDigits = id.replace(/[0-9]/g, '');

    if(idWithoutDigits === 'tbsu_nyc') {
        currentGroup = allImagesDesktopOrderExhTBSUNYC;
    } else if (idWithoutDigits === 'tbsu_sf') {
        currentGroup = allImagesDesktopOrderExhTBSUSF;
    } else {
        currentGroup = null;
    }

    for(let i = 0; i < currentGroup.length; i++) {
        for(let j = 0; j < currentGroup[i].length; j++) {
            for(let k = 0; k < currentGroup[i][j].length; k++) {                    
                if(currentGroup[i][j][0].link === id) {
                    var imageInformation = currentGroup[i][j];
                }   
            }
        }
    }

    var thumbnailImages = imageInformation.map((image, i) => {
        // each thumbnail is a button that onClick, the image index increases (getNewIndex gets called) 
        if (i !== currentImageIndex) {
            return (
                <div key={i} onClick={() => getNewIndex(i)}>
                    <img className='thumbnail-image' src={image.name} alt={image.title} />
                </div>
            )
        } else {
            return <div key={i}></div>;
        }
    })

    return(
        <div className="individual-image-content-container" key={imageInformation[currentImageIndex].link}> 
            <img src={imageInformation[currentImageIndex].name} className="individual-image-main" alt={imageInformation[0].title}/>
            <div className="individual-image-details" key={imageInformation[currentImageIndex].link}>
                <div className="image-detail-text" key={imageInformation[currentImageIndex].link}>
                    <p>{imageInformation[0].caption1}</p>
                    <p>{imageInformation[0].caption2}</p>
                    <p>{imageInformation[0].caption3}</p>
                </div>
                <div className="thumbnail-section">
                    {thumbnailImages}
                </div>
            </div>
        </div>
    )
    
}
export default IndividualPhoto;