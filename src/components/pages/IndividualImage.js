import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { allImagesDesktopOrder2 } from '../../imageData';

const IndividualImage = () => {
    const [currentImageIndex, setcurrentImageIndex] = useState(0);
    const { id } = useParams();
    var idString = id;
    var idStringCut = idString.substr(1);
    const isMobile = window.innerWidth < 768;
    let location = useLocation();
    console.log(location.pathname);
    // array of images for this particular image
    var imageInformation;

    console.log(allImagesDesktopOrder2.length)

    useEffect(() => {
        console.log("entered useEffect")
        // find the image and its array from imageData
        for (let i = 0; i < allImagesDesktopOrder2.length; i++) {
            console.log("entered for i")
            for (let j = 0; j < allImagesDesktopOrder2[i].length; j++) {
                console.log("entered for j")
                console.log(allImagesDesktopOrder2[i])
                if(allImagesDesktopOrder2[i].link === idStringCut) {
                    imageInformation = allImagesDesktopOrder2[i];
                    console.log(imageInformation)
                }
            }
        }
    });

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         width: window.innerWidth,
    //         currentImageIndex: 0,
    //     }
    // }
    // componentDidMount() {
    //     window.addEventListener('resize', this.handleWindowSizeChange);
    //     window.scrollTo(0, 0);
    // }

    const handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    const getNewIndex = (index) => {
        this.setState({
            currentImageIndex: index
        })
    }

    
    // const { id } = this.props.match.params;
    // const { imageInformation } = this.props.location.state;
    // console.log(imageInformation)
    // const {from} = this.props.location.state;
    

    // const { width } = this.state; 
    // const isMobile = width <= 1000;

    // var thumbnailImages = imageInformation.map((image, i) => {
    //     // each thumbnail is a button that onClick, the image index increases (getNewIndex gets called)     
    //     var imageStyle = (i === this.state.currentImageIndex) ?
    //     'current-image-border'
    //     :
    //     'non-current-image-border';
    //     return (
    //         <div key={i} onClick={() => getNewIndex(i)}>
    //             <img className={'thumbnail-image ' + imageStyle} src={image.name} alt="painting"/>
    //         </div>
    //     )
    // })

    return(
        <div className="individual-image-content-container"> 
            {/* <img key={id} src={imageInformation[this.state.currentImageIndex].name} className="individual-image-main" alt={imageInformation[0].title}/>
            <div className="individual-image-details">
                <div className="image-detail-text">
                    <p>{imageInformation[0].artistName}</p>
                    <p><span className="italics">{imageInformation[0].title}</span>{imageInformation[0].year !== undefined && ", " + imageInformation[0].year}</p>
                    <p>{imageInformation[0].dimensions}</p>
                    <p>{imageInformation[0].privateCollection}</p>
                </div>
                <div className="thumbnail-section">
                    {thumbnailImages}
                </div>
            </div> */}
        </div>
    )
    
}
export default IndividualImage;