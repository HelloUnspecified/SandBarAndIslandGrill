import React, { useState } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { NextSeo } from 'next-seo';
import Lightbox from 'fslightbox-react';
import { above } from '../utilities/breakpoint';

import ContentSection from '../components/ContentSection';
import Hero from '../components/Hero';

// import 'react-image-lightbox/style.css';

const GalleryImage = styled.img`
  max-height: 25rem;
  max-width: 25rem;
  object-fit: cover;

  ${above.med`
    max-height: 25rem;
    padding: 0.6rem;
  `};
`;

const ContentDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const IMAGES = [
  '/images/conversation.jpg',
  '/images/outside-night.jpg',
  '/images/bartender.jpg',
  '/images/fish.jpg',
  '/images/Gallery-Oysters2-1.jpg',
  '/images/home-entrance.jpg',
  '/images/Gallery-Toast-Sandwich.jpg',
  '/images/sandbar-inside.jpg',
  '/images/tacos-and-rings.jpg',
  '/images/aerial.jpg',
  '/images/grill.jpg',
  '/images/inside-wide.jpg',
];

const about = props => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const updateIndex = selectedIndex => {
    setPhotoIndex(selectedIndex);
    setLightboxOpen(!lightboxOpen);
  };

  return (
    <>
      <NextSeo
        title="Gallery - Sand Bar and Island Grill"
        description="Photos of our food and restaurant here at Sand Bar and Island Grill."
      />
      <ParallaxProvider>
        <>
          <Hero
            imagePath="/images/aerial.jpg"
            heading="Sand Bar and Island Grill"
            href="tel:1-262-877-9500"
            label="Call for Reservations"
          />

          <ContentSection title="Gallery">
            <ContentDetail>
              {IMAGES.map((item, index) => {
                return (
                  <GalleryImage
                    src={item}
                    onClick={() => {
                      updateIndex(index);
                    }}
                  />
                );
              })}
              <Lightbox
                toggler={lightboxOpen}
                sources={IMAGES}
                slide={photoIndex + 1}
              />
            </ContentDetail>
          </ContentSection>
        </>
      </ParallaxProvider>
    </>
  );
};

export default about;
