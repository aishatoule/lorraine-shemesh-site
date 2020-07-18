import React, {Component} from 'react';
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