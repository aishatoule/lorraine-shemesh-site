import React, {Component} from 'react';

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

    getNewThumbnailList = (index) => {

    }

    render() {
        const { id } = this.props.match.params;
        const { imageInformation } = this.props.location.state;
        const {from} = this.props.location.state;
        const { width } = this.state; 
        const isMobile = width <= 1000;

        var thumbnailImages = imageInformation.map((image, i) => {
            // each thumbnail is a button that onClick, the image index increases (getNewIndex gets called)     
            var imageStyle = (i === this.state.currentImageIndex) ?
            'current-image-border'
            :
            'non-current-image-border';
            return (
                <div key={i} onClick={() => this.getNewIndex(i)}>
                    <img className={'thumbnail-image ' + imageStyle} src={image.name} alt="painting"/>
                </div>
            )
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