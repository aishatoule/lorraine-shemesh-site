import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { flatten } from 'lodash';



const Lightbox = ({ images, selectedIndex }) => {
    const imageGroups = flatten(images);
    const [groupIndex, setGroupIndex] = useState(selectedIndex);
    const [imageIndex, setImageIndex] = useState(0);
    const [hasChangedImageGroup, setChangedImageGroup] = useState(false);

    const currentGroup = imageGroups[groupIndex];
    const currentImage = currentGroup[imageIndex];
    const history = useHistory();

    const basePath = history.location.pathname.split('/')[1];

    useEffect(() => {
        const imagePath = `/${[basePath, currentGroup[0].link].join('/')}`;

        hasChangedImageGroup ? history.replace(imagePath) : history.push(imagePath);
    }, [groupIndex]);

    const handlePrevNext = (toIndex) => {
        setGroupIndex(toIndex);
        setImageIndex(0);
        setChangedImageGroup(true);
    }

    const makeThumbs = images => images.map((image, index) => (
        <div key={image.name} onClick={() => setImageIndex(index)}> {/* make accessible */}
            <img className='thumbnail-image' src={image.name} alt={image.title} />
        </div>
    ));

    return (
        <div class="overlay">
            <button class="overlay-previous" onClick={() => {
                handlePrevNext(groupIndex === 0 ? imageGroups.length - 1 : groupIndex - 1);

            }}></button>
            <div class="overlay-image-container">
                <div class="overlay-image-content">
                    <div class="overlay-image-wrappper">
                        <img class="overlay-image" src={currentImage.name} alt={currentImage.title} />
                    </div>
                    <div class="overlay-bottom-wrapper">
                        <div class="overlay-description">
                            <div className="image-detail-text">
                                <p>{currentImage.artistName}</p>
                                <p><span className="italics">{currentImage.title}</span>{currentImage.year !== undefined && ", " + currentImage.year}</p>
                                <p>{currentImage.dimensions}</p>
                                <p>{currentImage.privateCollection}</p>
                            </div>
                        </div>
                        <div class="overlay-details">
                            {currentGroup.length > 1 && (
                                <div class="thumbnail-section">
                                    {makeThumbs(currentGroup)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button class="overlay-next" onClick={() => {
                handlePrevNext(groupIndex === imageGroups.length - 1 ? 0 : groupIndex + 1);
            }}></button>
        </div >
    );
};

export default Lightbox;