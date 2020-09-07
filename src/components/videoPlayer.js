import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import campusVideo from './assets/carousel-images/campus-video.mp4';
import styled from 'styled-components';
import bg from './assets/images/bg.jpg';

const VideoPlayer = () => {
  const [isDesktopView, setDesktopView] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setDesktopView(true);
    } else {
      setDesktopView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

    return (
        <Wrapper>
        <SmallTitle> See our campus</SmallTitle>
        <Title>Take A Tour</Title>

        { isDesktopView &&
        <PlayerContainerDesktop id="desktop">
            <ReactPlayer url={campusVideo} width="800px" height="450px" playing={true} controls={true} />
        </PlayerContainerDesktop>
}

        { !isDesktopView &&
        (<PlayerContainerMobile id="mobile">
            <ReactPlayer url={campusVideo} width="320px" height="180px" playing={true} controls={true} />
        </PlayerContainerMobile>) }
        </Wrapper>
    );
}


const PlayerContainerDesktop = styled.div`
display: block;
margin: 0 auto; 

`;

const PlayerContainerMobile = styled.div`
display: block;
margin: 0 auto; 

`;

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
  margin-bottom: 20%;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    margin: 0.75rem 0 1.875rem 0;
    background: #ae9142;
  }

  @media only screen and (min-width: 960px) {
    margin-bottom: 0%;
  }
`;

const Wrapper = styled.div`
    padding-top: 10%;
    background-image: url(${bg});
    width: 100%;
    padding-bottom: 15%;
    padding-left: calc(50% - 160px);

    @media only screen and (min-width: 960px) {
        padding-bottom: 5%;
        padding-top: 2%;
        padding-left: calc(50% - 400px);
      }
`;

export default VideoPlayer;