import React from 'react'

const Video = () => {
    return (
    <div>
        <div className="iframe-container">
            <iframe title="Lorraine Shemesh Video" width="560" height="315" src="https://www.youtube.com/embed/QfIYcPv7d4s?autoplay=0&origin=http://lorraineshemesh.com&modestbranding=1&rel=0" allow="fullscreen; autoplay" allowFullScreen></iframe>
        </div>
        <div className="iframe-container">
            <iframe title="Lorraine Shemesh Video" width="560" height="315" src="https://www.youtube.com/embed/flLVIib5jlo?autoplay=0&origin=http://lorraineshemesh.com&modestbranding=1&rel=0" allow="fullscreen; autoplay" allowFullScreen></iframe>
        </div>
    </div>
    );
}

export default Video;