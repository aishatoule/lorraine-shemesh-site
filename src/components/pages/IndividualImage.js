import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { allImagesDesktopOrderTsbu } from '../../imageDataFiles/imageDataTsbu';
import { allImagesDesktopOrderIntersections } from '../../imageDataFiles/imageDataIntersections';
import { allImagesDesktopOrderIO } from '../../imageDataFiles/imageDataIO';
import { allImagesDesktopOrderBts } from '../../imageDataFiles/imageDataBTS';
import { allImagesDesktopOrderLs } from '../../imageDataFiles/imageDataLS';
import { allImagesDesktopOrderWw } from '../../imageDataFiles/imageDataWW';
import { allImagesDesktopOrderPp } from '../../imageDataFiles/imageDataPP';
import { allImagesDesktopOrderPaperPools } from '../../imageDataFiles/imageDataPaperPools';
import { allImagesDesktopOrderPaperSBU } from '../../imageDataFiles/imageDataPaperSBU';
import { allImagesDesktopOrderPaperInt } from '../../imageDataFiles/imageDataPaperInt';
import { allImagesDesktopOrderPaperObj } from '../../imageDataFiles/imageDataPaperObj';
import { allImagesDesktopOrderClayHB } from '../../imageDataFiles/imageDataClayHB';
import { allImagesDesktopOrderClayWT } from '../../imageDataFiles/imageDataClayWT';
import { allImagesDesktopOrderClaySC } from '../../imageDataFiles/imageDataClaySC';

const IndividualImage = () => {
    // const [setWidth] = useState(window.innerWidth);
    const width = useWindowWidth(); // Our custom Hook

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function useWindowWidth() {
        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
          const handleResize = () => setWidth(window.innerWidth);
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        });
        
        return width;
      }
    
    useEffect(() => {
        // window.addEventListener("resize", handleWindowSizeChange);
        window.scrollTo(0, 0);
    });
    
    // const handleWindowSizeChange = () => {
    //     setWidth(window.innerWidth);
    // };

    const getNewIndex = (index) => {
        setCurrentImageIndex(index)
    }
    
    let { id } = useParams();
    var currentGroup;
    var idWithoutDigits = id.replace(/[0-9]/g, '');

    if(idWithoutDigits === 'tsbu') {
        currentGroup = allImagesDesktopOrderTsbu;
    } else if (idWithoutDigits === 'int') {
        currentGroup = allImagesDesktopOrderIntersections;
    } else if (idWithoutDigits === 'io') {
        currentGroup = allImagesDesktopOrderIO;
    } else if( idWithoutDigits === 'bts') {
        currentGroup = allImagesDesktopOrderBts;
    } else if (idWithoutDigits === 'ls') {
        currentGroup = allImagesDesktopOrderLs;
    } else if (idWithoutDigits ==='ww') {
        currentGroup = allImagesDesktopOrderWw;
    } else if (idWithoutDigits ==='pp') {
        currentGroup = allImagesDesktopOrderPp;
    } else if (idWithoutDigits ==='paperpool') {
        currentGroup = allImagesDesktopOrderPaperPools;
    } else if (idWithoutDigits === 'papersbu') {
        currentGroup = allImagesDesktopOrderPaperSBU;
    } else if (idWithoutDigits === 'paperint') {
        currentGroup = allImagesDesktopOrderPaperInt;
    } else if (idWithoutDigits === 'paperobj') {
        currentGroup = allImagesDesktopOrderPaperObj;
    } else if (idWithoutDigits === 'clayhb') {
        currentGroup = allImagesDesktopOrderClayHB;
    } else if (idWithoutDigits === 'claywt') {
        currentGroup = allImagesDesktopOrderClayWT;
    } else if (idWithoutDigits === 'claysc') {
        currentGroup = allImagesDesktopOrderClaySC;
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
            <img src={imageInformation[currentImageIndex].name} className="individual-image-main" alt={imageInformation[currentImageIndex].title}/>
            <div className="individual-image-details" key={imageInformation[currentImageIndex].link}>
                <div className="image-detail-text" key={imageInformation[currentImageIndex].link}>
                    <p>{imageInformation[currentImageIndex].artistName}</p>
                    <p><span className="italics">{imageInformation[currentImageIndex].title}</span>{imageInformation[currentImageIndex].year !== undefined && ", " + imageInformation[currentImageIndex].year}</p>
                    <p>{imageInformation[currentImageIndex].dimensions}</p>
                    <p>{imageInformation[currentImageIndex].privateCollection}</p>
                </div>
                <div className="thumbnail-section">
                    {thumbnailImages}
                </div>
            </div>
        </div>
    )
    
}
export default IndividualImage;