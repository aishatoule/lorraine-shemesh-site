import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { flatten } from 'lodash';
import { useSwipeable } from 'react-swipeable';
import FocusTrap from 'focus-trap-react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const PreviousButtonSVG = () => (
    <svg className="lightbox-previous-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M25.47 38.64l.44-.44c.29-.29.29-.76 0-1.05L14.82 26.06h23.35c.41 0 .75-.33.75-.75v-.62c0-.41-.33-.75-.75-.75H14.82l11.09-11.09c.29-.29.29-.76 0-1.05l-.44-.44a.742.742 0 0 0-1.05 0L11.31 24.47c-.29.29-.29.76 0 1.05l13.11 13.11c.29.3.76.3 1.05.01z"></path>
    </svg>
);

const NextButtonSVG = () => (
    <svg className="lightbox-next-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M24.53 11.36l-.44.44c-.29.29-.29.76 0 1.05l11.09 11.09H11.83c-.41 0-.75.33-.75.75v.62c0 .41.33.75.75.75h23.35L24.09 37.14c-.29.29-.29.76 0 1.05l.44.44c.29.29.76.29 1.05 0l13.11-13.11c.29-.29.29-.76 0-1.05l-13.1-13.11a.754.754 0 0 0-1.06 0z"></path>
    </svg>
)

const CloseButtonSVG = () => (
    <svg className="lightbox-close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <path d="M27.92 25l8.84-8.84 1.82-1.82c.27-.27.27-.71 0-.97l-1.95-1.95a.682.682 0 0 0-.97 0L25 22.08 14.34 11.42a.682.682 0 0 0-.97 0l-1.95 1.95c-.27.27-.27.71 0 .97L22.08 25 11.42 35.66c-.27.27-.27.71 0 .97l1.95 1.95c.27.27.71.27.97 0L25 27.92l8.84 8.84 1.82 1.82c.27.27.71.27.97 0l1.95-1.95c.27-.27.27-.71 0-.97L27.92 25z"></path>
    </svg>
)


const Lightbox = ({ images, selectedIndex, onClose }) => {
    const imageGroups = flatten(images);
    const nextButtonRef = useRef(null);

    const handlePrevNext = (toIndex) => {
        setImageIndex(0);
        setGroupIndex(toIndex);
        setChangedImageGroup(true);
    }

    const handlePrevious = () => setTimeout(handlePrevNext(groupIndex === 0 ? imageGroups.length - 1 : groupIndex - 1), 100);
    const handleNext = () => setTimeout(handlePrevNext(groupIndex === imageGroups.length - 1 ? 0 : groupIndex + 1), 100);

    const handleClose = () => {
        history.replace(`/${basePath}`);
        onClose();
    }

    const [groupIndex, setGroupIndex] = useState(selectedIndex);
    const [imageIndex, setImageIndex] = useState(0);
    const [hasChangedImageGroup, setChangedImageGroup] = useState(false);
    const swipeHandlers = useSwipeable({
        onSwipedLeft: handlePrevious,
        onSwipedRight: handleNext,
    })

    const currentGroup = imageGroups[groupIndex];
    const currentImage = currentGroup[imageIndex];

    const history = useHistory();

    const basePath = history.location.pathname.split('/')[1];
    const imagePath = `/${[basePath, currentGroup[0].link].join('/')}`;

    useEffect(() => {
        // replace currentPath with next/previous slide, so back button works as expected
        hasChangedImageGroup ? history.replace(imagePath) : history.push(imagePath);
    }, [groupIndex]);

    useEffect(() => {
        const handleKeyEvents = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'Escape') handleClose();
        }
        document.addEventListener('keydown', handleKeyEvents);
        return () => document.removeEventListener('keydown', handleKeyEvents);
    })

    const makeThumbs = images => images.map((image, index) => (
        <button className="lightbox-thumbnail" key={image.name} onClick={() => {
            setImageIndex(index);
            nextButtonRef.current.focus();
        }} tabIndex={0} disabled={index === imageIndex}>
            <img className='lightbox-thumbnail-image' src={image.name} alt={image.title} />
        </button>
    ));

    let CurrentCaption;
    if (currentImage.captionln1) {
        CurrentCaption =
            <React.Fragment>
            <p dangerouslySetInnerHTML={{__html: currentImage.captionln1}}/>
            <p>{currentImage.captionln2}</p>
            <p>{currentImage.captionln3}</p>
            </React.Fragment>;
    } else if (currentImage.title) {
        CurrentCaption = 
            <React.Fragment>
            <p>{currentImage.artistName}</p>
            <p><span className="italics">{currentImage.title}</span>{currentImage.year !== undefined && ", " + currentImage.year}</p>
            <p>{currentImage.dimensions}</p>
            <p>{currentImage.privateCollection}</p>
            </React.Fragment>;
    } else {
        CurrentCaption = "";
    }

    return (
        <FocusTrap>
            <div className="lightbox-overlay">
                <button className="lightbox-next" onClick={handleNext} tabIndex={0} ref={nextButtonRef}>
                    <NextButtonSVG />
                </button>
                <div className="lightbox-image-container">
                    <SwitchTransition>
                        <CSSTransition
                            key={`${groupIndex}-${imageIndex}`}
                            classNames="fade"
                            addEndListener={(node, done) => {
                                node.addEventListener("transitionend", done, false);
                            }}
                        >
                            <div className="lightbox-image-content">
                                <div className="lightbox-image-wrapper" {...swipeHandlers}>
                                    <img className="lightbox-image" src={currentImage.name} alt={currentImage.title} />
                                </div>
                                <div className="lightbox-bottom-wrapper">
                                    <div className="lightbox-description">
                                        <div className="image-detail-text">
                                            {CurrentCaption}
                                        </div>
                                    </div>
                                    <div className="lightbox-details">
                                        {currentGroup.length > 1 && (
                                            <div className="lightbox-thumbnail">
                                                {makeThumbs(currentGroup)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
                <button className="lightbox-previous" onClick={handlePrevious} tabIndex={0}>
                    <PreviousButtonSVG />
                </button>
                <button className="lightbox-close" onClick={handleClose} tabIndex={0}>
                    <CloseButtonSVG />
                </button>
            </div >
        </FocusTrap>
    );
};

export default Lightbox;