import { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import ContentSection from '../components/ContentSection'
import IconText from '../components/IconText'
import Map from '../components/Map'
import SocialLinks from '../components/SocialLinks'
import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import {above, below} from '../utitlies/breakpoint.js';

const HeroImageText = styled.div`
  color: #ffffff;
  font-size: 20px;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

const HeroImage = styled.div`
  height: 100vh;
  max-width: 100%;
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const HeroFooterContainer = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.light};

  div {
    width: 50%;
  }

  svg {
    margin: 7px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.light};

    ${below.med`
      height: 20px;
    `};
  }

  p {
    margin: 0;
    line-height: 1.2;
  }
`;

const BannerHeader = styled.div`
  position: absolute;
  top: 35%;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 7rem;
    margin: 0;
    line-height: 1.1;
    font-family: 'Great Vibes', cursive;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.light};
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.light};
    padding-top: 5px;
  }
`;

const home = props => (
  <ParallaxProvider>
    <Fragment>
      <HeroImage>
        <ParallaxBanner
          layers={[
            {
              image: "/static/images/sandbar-inside.jpg",
              amount: 0.1,
            },
          ]}
          style={{
            height: '100vh',
            opacity: 0.5,
          }}
        />
        <BannerHeader>
          <h1>Sandbar and Island Grill</h1>
          <h2>A Tropical Oasis in the Least Likely of Places!</h2>
        </BannerHeader>
        <HeroFooterContainer>
          <SocialLinks />
          <IconText icon="location">
            <p>
              3101 E. Lakeshore Dr., Twin Lakes, WI 53181
            </p>
          </IconText>
        </HeroFooterContainer>
      </HeroImage>

      <ContentSection
        image='../static/images/sandbar-inside.jpg'
        description="Come for the food, stay for the drinks, return for the friendship."
        title="A Tropical Oasis in the Least Likely of Places!"
        align='left'
      />

      <ContentSection
        image='../static/images/Gallery-Oysters2-1.jpg'
        description="Louisiana oysters, fresh shucked, topped with our Parmesan butter cheese filling and grilled to perfection"
        title="some kind of oyster something"
        align='right'
      />

      <FacebookProvider appId="249643311490">
        <Page href="https://www.facebook.com/SandBarAndIslandGrill" tabs="timeline" />
      </FacebookProvider>

      <Map />
    </Fragment>
  </ParallaxProvider>
);

export default home;
