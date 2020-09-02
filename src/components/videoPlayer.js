import React from 'react';
import ReactPlayer from 'react-player';
import campusVideo from '../images/campus-video.mp4';

const videoPlayer = () => {
    return (
        <ReactPlayer url={campusVideo} />
    )
}

export default videoPlayer;