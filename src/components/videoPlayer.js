import React from 'react';
import ReactPlayer from 'react-player';
import campusVideo from '../images/campus-video.mp4';
import ImageGallery from './imageGallery';

const videoPlayer = () => {
    return (
        <>
            <ReactPlayer url={campusVideo} playing={false} controls={true} />
            <ImageGallery />
        </>
    );
}

export default videoPlayer;