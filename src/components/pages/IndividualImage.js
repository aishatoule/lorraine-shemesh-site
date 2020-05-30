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
        // const { imageInformation } = this.props.location.state;
        // console.log("index before", this.state.currentImageIndex)
        // var currIndex = index;
        // if (index === imageInformation.length-1) {
        //     currIndex=0;
        // } else {
        //     currIndex++;
        // }
        // console.log("index after", currIndex)
        this.setState({
            currentImageIndex: index
        })
    }

    getNewThumbnailList = (index) => {

    }
    // get the index of the one that you just clicked, i. take the list (with all images, first one included) 
    // return a new array with that element cut out of it. 
    // var imageList = imageInformation
    // var updatedThumbnailList = imageList.splice(i, 1)
    //that is the new thumbnail list. 

    // need to map over a new array every time a thumbnail image is clicked
    render() {
        const { id } = this.props.match.params;
        const { imageInformation } = this.props.location.state;
        const {from } = this.props.location.state;
        const { width } = this.state; 
        const isMobile = width <= 1000;

        // console.log(imageInformation.length)
        // var thumbnailImageList =  imageInformation.slice(1);

        var thumbnailImages = imageInformation.map((image, i) => {
            // each thumbnail is a button that onClick, the image index increases (getNewIndex gets called)
            var copiedArray =[...imageInformation];

            // removes 1 element at index 0
            // var testSlice = copiedArray.splice(i, 1)

            // copied array returns one less element
        
            return (
                <div key={i} onClick={() => this.getNewIndex(i)}>
                    <img className="thumbnail-image" src={image.name} alt="painting"/>
                </div>
            )
        })
        return(
            <div className="individual-image-content-container"> 
                <img key={id} src={imageInformation[this.state.currentImageIndex].name} className="individual-image-main" alt={imageInformation[0].title}/>
                <div className="individual-image-details">
                    <div className="thumbnail-section">
                        {thumbnailImages}
                    </div>
                    <div className="image-detail-text">
                        <p>{imageInformation[0].artistName}</p>
                        <p><span className="italics">{imageInformation[0].title}</span>{imageInformation[0].year !== undefined && ", " + imageInformation[0].year}</p>
                        <p>{imageInformation[0].dimensions}</p>
                        <p>{imageInformation[0].privateCollection}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default IndividualImage;