import React from 'react';
import ReactPlayer from 'react-player';
import campusVideo from '../images/campus-video.mp4';
import styled from 'styled-components';
import bg from './assets/images/bg.jpg';

const videoPlayer = () => {
    return (
        <Wrapper>
        <SmallTitle> See our campus</SmallTitle>
        <Title>Take A Tour</Title>
            <ReactPlayer width="100%" url={campusVideo} playing={false} controls={true} />
        </Wrapper>
    );
}

const SmallTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2em;
  color: #0c2340;
  margin-top: 0;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    margin: 0.75rem 0 1.875rem 0;
    background: #ae9142;
  }
`;

const Wrapper = styled.div`
    display: block;
    margin: 0 auto;
    margin-top: 2%;
    background-image: url(${bg});
`;

export default videoPlayer;