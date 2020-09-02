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

        <PlayerContainerDesktop id="desktop">
            <ReactPlayer url={campusVideo} playing={false} controls={true} />
        </PlayerContainerDesktop>

        <PlayerContainerMobile id="mobile">
            <ReactPlayer url={campusVideo} width="320px" height="180px" playing={false} controls={true} />
        </PlayerContainerMobile>
        </Wrapper>
    );
}


const PlayerContainerDesktop = styled.div`
display: block;
margin: 0 auto; 

  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const PlayerContainerMobile = styled.div`
display: block;
margin: 0 auto; 

@media only screen and (min-width: 960px) {
    display: none;
  }
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
        padding-left: calc(50% - 320px);
      }
`;

export default videoPlayer;