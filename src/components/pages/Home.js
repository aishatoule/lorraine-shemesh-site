import React, { Component } from 'react';
import { connect } from 'react-redux';
import tsbu1 from '../../images/paint-sbu/tsbu1.jpg';
import tsbu2 from '../../images/paint-sbu/tsbu2.jpeg';
import tsbu3 from '../../images/paint-sbu/tsbu3.jpeg';
import tsbu4 from '../../images/paint-sbu/tsbu4.jpg';
import tsbu5 from '../../images/paint-sbu/tsbu5.jpg';
import tsbu6 from '../../images/paint-sbu/tsbu6.jpg';
import tsbu7 from '../../images/paint-sbu/tsbu7.jpg';
import tsbu8 from '../../images/paint-sbu/tsbu8.jpg';
import tsbu9 from '../../images/paint-sbu/tsbu9.jpeg';
import tsbu10 from '../../images/paint-sbu/tsbu10.jpg';
import tsbu11 from '../../images/paint-sbu/tsbu11.jpeg';
import tsbu12 from '../../images/paint-sbu/tsbu12.jpg';
import tsbu13 from '../../images/paint-sbu/tsbu13.jpg';
import tsbu14 from '../../images/paint-sbu/tsbu14.jpg';
import tsbu15 from '../../images/paint-sbu/tsbu15.jpg';
import tsbu16 from '../../images/paint-sbu/tsbu16.jpg';
import tsbu17 from '../../images/paint-sbu/tsbu17.jpg';
import tsbu18 from '../../images/paint-sbu/tsbu18.jpg';
import tsbu19 from '../../images/paint-sbu/tsbu19.jpg';
import tsbu20 from '../../images/paint-sbu/tsbu20.jpg';
import tsbu21 from '../../images/paint-sbu/tsbu21.jpg';
import studioShot from '../../images/paint-sbu/DSC_1326-cropped.jpeg';
import { bindActionCreators } from 'redux';
import * as imageActions from '../../redux/actions/imageActions';
import HomeImage from '../../images/paint-sbu/tsbu1.jpg';


class Home extends Component {
    componentDidMount() {

        const { actions } = this.props;
        const desktopImages = [
            [{
                name: tsbu1,
                details: "01a. Accordion painting.jpg",
                link: "tsbu1"
            }, 
            {
                name: tsbu4,
                details: "02a. Attached painting.jpg",
                link: "tsbu1"
            },
            {
                name: tsbu7,
                details: "03. Sway painting.jpg",
                link: "tsbu1"
            },
            {
                name: tsbu10,
                details: "04c. Hinge detail (feet).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu13,
                details: "05b. The Space Between Us detail (female head).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu16,
                details: "06c. Inseparable detail (female hands).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu19,
                details: "08. Interlock painting.jpg",
                link: "tsbu1"
            }],
            [{
                name: tsbu2,
                details: "01b. Accordion detail (head).jpeg",
                link: "tsbu1"
            }, 
            {
                name: tsbu5,
                details: "02b. Attached detail (heads _ hands).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu8,
                details: "04a. Hinge painting.jpg",
                link: "tsbu1"
            },
            {
                name: tsbu11,
                details: "04d. Hinge detail (hand).jpeg",
                link: "tsbu1"
            },
            {
                name: tsbu14,
                details: "06a. Inseparable painting.jpg",
                link: "tsbu1"
            },
            {
                name: tsbu17,
                details: "07a. Riddle painting.jpg",
                link: "tsbu1"
            },
            {
                name: tsbu20,
                details: "09. Enclosure painting.jpg",
                link: "tsbu1"
            }],
            [{
                name: tsbu3,
                details: "01c. Accordion detail (hand).jpeg",
                link: "tsbu1"
            }, 
            {
                name: tsbu6,
                details: "02c. Attached detail (foot).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu9,
                details: "04b Hinge detail (head).jpeg",
                link: "tsbu1"
            },
            {
                name: tsbu12,
                details: "05a. The Space Between Us.jpg",
                link: "tsbu1"
            },
            {
                name: tsbu15,
                details: "06b. Inseparable detail (male head).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu18,
                details: "07b. Riddle detail (center calf _ arm).jpg",
                link: "tsbu1"
            },
            {
                name: tsbu21,
                details: "10. Puzzle painting.jpg",
                link: "tsbu1"
            }]     
        ]

        if(desktopImages.length === 0) {
            actions.desktopImages().catch(error => {
                alert("Loading desktop images failed" + error);
            })
        }

    }
    render() {
        return( 
            <div className="image-container">
                <img className="individual-image-main" src={studioShot} alt="home page"/>  
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            desktopImages: bindActionCreators(imageActions.addDesktopImages, dispatch),
            mobileImages: bindActionCreators(imageActions.addMobileImages, dispatch)
        }
    };
}

export default connect(mapDispatchToProps)(Home);