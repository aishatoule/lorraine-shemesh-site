import React, {Component} from 'react';

class IndividualImage extends Component {
    render() {
    const { id } = this.props.match.params;
    const { imageInformation } = this.props.location.state;

    return(
        <> 
        <img key={imageInformation.link} src={imageInformation.name} className="individual-image-main" alt="The Space Between Us exhibition"/>
            {/* <img key={key} src={image.name} className="grid-image" alt="The Space Between Us exhibition"/> */}
        
        </>
        
    )
}
}
export default IndividualImage;