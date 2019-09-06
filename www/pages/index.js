import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { FacebookProvider, Page } from 'react-facebook';
import ContentSection from '../components/ContentSection';
import FeaturedDishes from '../components/FeaturedDishes';
import Gallery from '../components/Gallery';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import IconText from '../components/IconText';
import Map from '../components/Map';
import SocialLinks from '../components/SocialLinks';

import { above, below } from '../utitlies/breakpoint.js';

const Title = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-top: 0;
  line-height: 1.2;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0.5rem;
`;

const Fancy = styled.span`
  font-size: 4.2rem;
  font-family: 'Great Vibes', cursive;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.orange};
`;

const ImageContainer = styled.div`
  order: ${({ align }) => (align === 'left' ? 0 : 2)};
  margin-left: ${({ align }) => (align === 'left' ? 0 : '30px')};
  margin-right: ${({ align }) => (align === 'left' ? '30px' : 0)};
  position: relative;
`;

const FeaturedImage = styled.img`
  object-fit: cover;
  width: auto;
  height: 200px;
  position: relative;

  -webkit-box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
  -moz-box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
  box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
`;

const ContentBlock = styled.div`
  margin: auto;
  max-width: 1000px;
`;

const ContentDetail = styled.div`
  display: flex;

  ${below.med`
    text-align: center;
    flex-direction: column;
  `};
`;

const AccentImage = styled.img`
  position: absolute;
  left: -10rem;
  top: 18%;
`;

const IMAGES = [
  {
    src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: 'After Rain (Jeshu John - designerspics.com)',
  },
  {
    src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
    thumbnail:
      'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
    thumbnail:
      'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

const home = props => (
  <ParallaxProvider>
    <>
      <Hero
        imagePath="/static/images/sandbar-inside.jpg"
        fullHeight="true"
        heading="Sandbar and Island Grill"
        href="/menu"
        label="Menu"
      >
        <SocialLinks />
        <IconText icon="location">
          <p>3101 E. Lakeshore Dr., Twin Lakes, WI 53181</p>
        </IconText>
      </Hero>

      <ContentSection
        title={[
          <span className="normal">A </span>,
          <span className="highlight">Tropical Oasis</span>,
          <span className="normal"> In The Least Likely Of Places</span>,
        ]}
      >
        <AccentImage src="../static/images/tiki-bar.png" />
        <ContentDetail>
          <p>
            The Sand Bar & Island Grill is a waterfront, "open-air"
            establishment located in the Lake Elizabeth marina literally a few
            feet away from the shore. It was founded in 2009 by Carlo DiCarlo, a
            Twin Lakes resident who has spent a great deal of his time on
            Florida's Suncoast in the Tampa Bay/Clearwater area.
          </p>
          <ImageContainer>
            <FeaturedImage src="../static/images/conversation.jpg" />
          </ImageContainer>
        </ContentDetail>
      </ContentSection>

      <FeaturedDishes />
      <Specials />
      <Testimonials />
      <Gallery />

      {/* <FacebookProvider appId="249643311490">
        <Page href="https://www.facebook.com/SandBarAndIslandGrill" tabs="timeline" />
      </FacebookProvider> */}

      <Map />
    </>
  </ParallaxProvider>
);

export default home;
