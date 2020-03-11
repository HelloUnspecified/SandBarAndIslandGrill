import React from 'react';
import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import { ParallaxProvider } from 'react-scroll-parallax';

import ContentSection from '../components/ContentSection';
import Hero from '../components/Hero';
import IconText from '../components/IconText';
import Map from '../components/Map';
import SocialLinks from '../components/SocialLinks';
import ClosedForSeason from '../components/ClosedForSeason';
import NewsletterSignupForm from '../components/NewsletterSignupForm';
import { above, below } from '../utilities/breakpoint';

const DetailDiv = styled.div`
  

  ${below.small`
    width: 80%;
    min-width: 25rem;
  `};

  ${above.small`
    width: 50%;
  `};

  ${above.med`
    width: 30%;
  `};

  a {
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.dark};

    &:hover: ${({ theme }) => theme.colors.orange};
  }

  svg {
    height: 2rem;
    fill: ${({ theme }) => theme.colors.orange};
    padding-right: 1rem;
  }
`;

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-weight: 800;
  margin: 0 0 1rem 0;
  line-height: 1.7;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;

  ${below.med`
    margin-top: 4rem;
  `};
`;

const Socials = styled(SocialLinks)`
  padding-bottom: 3rem;
  a {
    padding: 0 0.4rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.fonts.dark};
    width: 3rem;
    margin: auto;
    position: relative;
    top: 1rem;
  }

  ${above.med`
    position: relative;
    top: -1rem;
  `};
`;

const StyledClosedForSeason = styled(ClosedForSeason)`
  h2 {
    font-size: 2.8rem;
    margin-bottom: 0.7rem;
  }

  h2,
  h3,
  p {
    text-align: center;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.dark};
  }

  h2,
  h3 {
    font-weight: 400;
  }
  p {
    padding-bottom: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.orange};
    max-width: 60rem;
    margin: auto;
  }

  margin-bottom: 8rem;
`;

const contact = () => (
  <>
    <NextSeo
      title="Contact Us - Sand Bar and Island Grill"
      description="Reach out to us here at Sand Bar and Island Grill."
    />
    <ParallaxProvider>
      <>
        <Hero
          imagePath="/images/conversation.jpg"
          heading="Sand Bar and Island Grill"
          href="tel:1-262-877-9500"
          label="Call for Reservations"
        />
        <ContentSection title="Contact Us">
          {/* <StyledClosedForSeason /> */}
          <DetailDiv>
            <Label>Email</Label>
            <IconText icon="email" align="center">
              <a href="mailto:eat@sandbarandislandgrill.com">
                eat@sandbarandislandgrill.com
              </a>
            </IconText>
          </DetailDiv>
          <DetailDiv>
            <Label>Phone</Label>
            <IconText icon="phone" align="center">
              <a href="tel:1-262-877-9500">(262) 877-9500</a>
            </IconText>
          </DetailDiv>
          <DetailDiv>
            <Label>Address</Label>
            <IconText icon="location" align="center">
              <a
                href="https://goo.gl/maps/9fvZcNvVcsiJ82Hj6"
                target="_blank"
                rel="noreferrer noopener"
              >
                3101 E. Lakeshore Dr.,
                <br />
                Twin Lakes, WI 53181
              </a>
            </IconText>
          </DetailDiv>
          <div style={{ padding: '7rem 0' }}>
            <h3>
              Signup for our newsletter toady and be the first to know when you
              can book a reservation!
            </h3>
            <NewsletterSignupForm />
          </div>
        </ContentSection>
        <Socials />
        <Map />
      </>
    </ParallaxProvider>
  </>
);

export default contact;
