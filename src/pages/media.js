import React, { useEffect } from 'react';
import Header from '../components/header';
import VideoPlayer from '../components/videoPlayer';

export default function Media(){
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <VideoPlayer />
    </>
  );
};
