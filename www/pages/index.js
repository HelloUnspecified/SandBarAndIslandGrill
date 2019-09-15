import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { FacebookProvider, Page } from 'react-facebook';
import ContentSection from '../components/ContentSection';
import FeaturedDishes from '../components/FeaturedDishes';
import Gallery from '../components/Gallery';
import NewsletterSignup from '../components/NewsletterSignup';
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

  ${below.med`
    margin: 0;
  `};
`;

const FeaturedImage = styled.img`
  object-fit: cover;
  width: auto;
  height: 200px;
  position: relative;

  -webkit-box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
  -moz-box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
  box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};

  ${below.small`
    max-width: 30rem;
  `};
`;

const PhoneNumber = styled.div`
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  order: 2;
  ${below.med`
    order: 1;
  `};
`;

const StackedSocialLinks = styled(SocialLinks)`
  order: 1;
  ${below.med`
    order: 2;
    max-height: 3rem;
  `};
`;

const StackedLocation = styled(IconText)`
  order: 3;
  a {
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
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
    width: 100%;
  `};
`;

const AccentImage = styled.img`
  position: absolute;
  left: -10rem;
  top: 18%;
`;

const home = props => (
  <ParallaxProvider>
    <>
      <Hero
        imagePath="/static/images/sandbar-inside.jpg"
        fullHeight="true"
        heading="Sand Bar and Island Grill"
        href="/menu"
        label="Menu"
      >
        <StackedSocialLinks />
        <PhoneNumber>
          <a href="tel:1-262-877-9500">(262) 877-9500</a>
        </PhoneNumber>
        <StackedLocation icon="location" align="center">
          <a href="https://goo.gl/maps/9fvZcNvVcsiJ82Hj6" target="_blank">
            3101 E. Lakeshore Dr., Twin Lakes, WI 53181
          </a>
        </StackedLocation>
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
      <NewsletterSignup />
      <Testimonials />
      <Gallery />
      <Map />
    </>
  </ParallaxProvider>
);

export default home;
