import React, { useEffect } from 'react';
import Header from '../components/header';
import VideoPlayer from '../components/videoPlayer';
import styled from 'styled-components';
import ImageGallery from '../components/imageGallery';

export default function Media(){
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
        <Header />
        <Container>
            <VideoPlayer />
            <ImageGallery />
        </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

const Container = styled.div`
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
`;