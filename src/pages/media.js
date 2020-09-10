import React, { useEffect } from 'react';
import Header from '../components/header';
import VideoPlayer from '../components/videoPlayer';
import styled from 'styled-components';
import ImageGallery from '../components/imageGallery';
import { Helmet } from "react-helmet";

export default function Media(){
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Media Center</title>
          <meta name="Media Center" content="Take a tour of our campus and see the serene environment within which we are located" />
        </Helmet >
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