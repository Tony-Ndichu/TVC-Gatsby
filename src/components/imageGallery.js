import React, { useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/assets/photos";
import styled from 'styled-components';

const ImageGallery = () => {

      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
      const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
      
     return (
        <Wrapper>
         <Container>
            <SmallTitle>Gallery</SmallTitle>
            <TitleSpecial>Click on any image to zoom</TitleSpecial>
          <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway>
      </Container>
      </Wrapper>
      );
      
}

const Wrapper = styled.div`
background-color: #0c2340;
padding: 5%;
padding-top: 20%;

@media only screen and (min-width: 960px) {
    padding: 5%;
}
`;

const Container = styled.div`
display: block;
margin: 0 auto;
width: 320px;

@media only screen and (min-width: 960px) {
  width: 800px;
}
`;

const SmallTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 15px;
  color: #d2d2d2;
`;

const TitleSpecial = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2em;
  color: #fff;
  margin-top: 3%;
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
    margin-top: 2%;
    margin-bottom: 0%;
  }
`;


export default ImageGallery;
