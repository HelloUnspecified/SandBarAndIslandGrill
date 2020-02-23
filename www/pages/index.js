import React, { useState } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import ContentSection from '../components/ContentSection';
import FeaturedDishes from '../components/FeaturedDishes';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import HighlightImage from '../components/HighlightImage';
import IconText from '../components/IconText';
import Map from '../components/Map';
import NewsletterSignup from '../components/NewsletterSignup';
import SocialLinks from '../components/SocialLinks';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Modal from '../components/Modal';
import ClosedForSeason from '../components/ClosedForSeason';
import { below } from '../utilities/breakpoint';

const PhoneNumber = styled.div`
  text-align: center;
  order: 2;

  a {
    color: ${({ theme }) => theme.colors.light};
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  ${below.med`
    display: none;
  `};

  ${below.large`
    order: 1;
    padding-bottom: 0.7rem;
  `};
`;

const StackedSocialLinks = styled(SocialLinks)`
  order: 1;

  ${below.med`
    max-height: 3rem;
  `};

  ${below.large`
    order: 2;
    max-height: 4rem;
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

const HeroImages = [
  '/static/images/sandbar-inside.jpg',
  '/static/images/inside-bar.jpg',
  '/static/images/inside-night.jpg',
];

const home = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <ParallaxProvider>
      <>
        <Hero
          imagePath={HeroImages[Math.floor(Math.random() * HeroImages.length)]}
          fullHeight="true"
          heading="Sand Bar and Island Grill"
          href="/menu"
          label="Menu"
        >
          <StackedSocialLinks />
          <PhoneNumber>
            <a href="tel:1-262-877-9500">(262) 877-9500</a>
          </PhoneNumber>
          <StackedLocation icon="location" align="center" key="location">
            <a
              href="https://goo.gl/maps/9fvZcNvVcsiJ82Hj6"
              target="_blank"
              rel="noreferrer noopener"
            >
              3101 E. Lakeshore Dr., Twin Lakes, WI 53181
            </a>
          </StackedLocation>
        </Hero>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ClosedForSeason />
        </Modal>
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
              feet away from the shore. It was founded in 2009 by Carlo DiCarlo,
              a Twin Lakes resident who has spent a great deal of his time on
              Florida's Suncoast in the Tampa Bay/Clearwater area.
            </p>
            <HighlightImage src="../static/images/conversation.jpg" />
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
};

export default home;
