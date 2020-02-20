import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import ContentSection from '../components/ContentSection';
import Hero from '../components/Hero';
import IconText from '../components/IconText';
import Map from '../components/Map';
import SocialLinks from '../components/SocialLinks';

import { above, below } from '../utilities/breakpoint.js';

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

const contact = props => (
  <>
    <Head>
      <title key="title">Contact Us - Sand Bar and Island Grill</title>
    </Head>
    <ParallaxProvider>
      <>
        <Hero
          imagePath="/static/images/conversation.jpg"
          heading="Sand Bar and Island Grill"
          href="tel:1-262-877-9500"
          label="Call for Reservations"
        />
        <ContentSection title="Contact Us">
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
        </ContentSection>
        <Socials />
        <Map />
      </>
    </ParallaxProvider>
  </>
);

export default contact;
