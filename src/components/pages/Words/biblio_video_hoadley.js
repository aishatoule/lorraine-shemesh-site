import React, { useEffect } from "react";

const VideoHoadleyPages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    
    return (
    <div>
        <div className="iframe-container">
            <iframe title="Nerikomi: The Art of Colored Clay Pages Video" width="560" height="315" src="https://www.youtube.com/embed/QqQaUFIcuCA?autoplay=1&origin=http://lorraineshemesh.com&modestbranding=1&rel=0" allow="fullscreen; autoplay" allowFullScreen></iframe>
        </div>
    </div>
    );
}

export default VideoHoadleyPages;

