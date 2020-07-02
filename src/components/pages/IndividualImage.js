import React, {Component} from 'react';
import { allImagesDesktopOrderTsbu } from '../../imageDataFiles/imageDataTsbu';
import { allImagesDesktopOrderIntersections } from '../../imageDataFiles/imageDataIntersections';
import { allImagesDesktopOrderIO } from '../../imageDataFiles/imageDataIO';
import { allImagesDesktopOrderBts } from '../../imageDataFiles/imageDataBTS';
import { allImagesDesktopOrderLs } from '../../imageDataFiles/imageDataLS';
import { allImagesDesktopOrderWw } from '../../imageDataFiles/imageDataWW';
import { allImagesDesktopOrderPp } from '../../imageDataFiles/imageDataPP';


class IndividualImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            currentImageIndex: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        window.scrollTo(0, 0);
    }

    handleWindowSizeChange = () => {
        this.setState({
            width: window.innerWidth
        });
    }

    getNewIndex = (index) => {
        this.setState({
            currentImageIndex: index
        })
    }

    render() {
        const { id } = this.props.match.params;
        console.log(id);
        var currentGroup;
        if(id.includes('tsbu') === true) {
            currentGroup = allImagesDesktopOrderTsbu;
        } else if (id.includes('int') === true) {
            currentGroup = allImagesDesktopOrderIntersections;
        } else if (id.includes('io') === true) {
            currentGroup = allImagesDesktopOrderIO;
        } else if( id.includes('bts') === true) {
            currentGroup = allImagesDesktopOrderBts;
        } else if (id.includes('ls') === true) {
            currentGroup = allImagesDesktopOrderLs;
        } else if (id.includes('ww') === true) {
            currentGroup = allImagesDesktopOrderWw;
        } else {
            currentGroup = allImagesDesktopOrderPp;
        }
        for(let i = 0; i < currentGroup.length; i++) {
            for(let j = 0; j < currentGroup[i].length; j++) {
                for(let k = 0; k < currentGroup[i][j].length; k++) {                    
                    if(currentGroup[i][j][0].link === id) {
                       var imageInformation = currentGroup[i][j];
                        console.log(imageInformation);
                    }   
                }
            }
        }

        const { width } = this.state; 
        const isMobile = width <= 1000;

        var thumbnailImages = imageInformation.map((image, i) => {
            // each thumbnail is a button that onClick, the image index increases (getNewIndex gets called)     
            if (i !== this.state.currentImageIndex) {
                return (
                        <div key={i} onClick={() => this.getNewIndex(i)}>
                            <img className='thumbnail-image' src={image.name} alt="painting"/>
                        </div>
                )
            }
        })

        return(
            <div className="individual-image-content-container"> 
                <img key={id} src={imageInformation[this.state.currentImageIndex].name} className="individual-image-main" alt={imageInformation[0].title}/>
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
                </div>
            </div>
        )
    }
}
export default IndividualImage;