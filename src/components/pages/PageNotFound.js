import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="image-section">
                <img className="notFound-image" src={'https://lorraineshemeshsiteimgs.s3.us-east-2.amazonaws.com/blank_wall.jpg'} alt="Empty Space"/>
            </div>
			<div className="biography-section-type">
                <p className="biography-type-title">You found a 404 error because the page you were trying to load doesn't exist.</p>
                <p className="biography-type-title">Please try finding what you were looking for using the site menu.</p>
            </div>
        </div>
        )
}

export default NotFound;