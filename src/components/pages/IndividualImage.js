import React, {Component} from 'react';

class IndividualImage extends Component {
    constructor() {
        super();
        this.state = {
            width: window.innerWidth
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
    render() {
    const { id } = this.props.match.params;
    const { imageInformation } = this.props.location.state;
    const { width } = this.state; 
    const isMobile = width <= 1000;

    return(
        <div className="individual-image-content-container"> 
            <img key={id} src={imageInformation.name} className="individual-image-main" alt="The Space Between Us exhibition"/>
            <div className="invidual-image-details">
                <p>{imageInformation.artistName}</p>
                <p><span class="italics">{imageInformation.title}</span>, {imageInformation.year}</p>
                <p>{imageInformation.dimensions}</p>
                <p>{imageInformation.privateCollection}</p>
            </div>
        </div>
        
    )
}
}
export default IndividualImage;