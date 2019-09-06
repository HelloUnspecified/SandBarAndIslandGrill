import React from 'react';
import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import LinkButton from './LinkButton';
import { below } from '../utitlies/breakpoint.js';

const HeroImage = styled.div`
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : '60vh')};
  max-width: 100%;
  background-position: center;
  background-size: cover;
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
  top: ${({ fullHeight }) => (fullHeight ? '35%' : '25%')};
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

const Hero = props => {
  return (
    <HeroImage fullHeight={props.fullHeight}>
      <ParallaxBanner
        layers={[
          {
            image: props.imagePath,
            amount: 0.1,
          },
        ]}
        style={{
          height: props.fullHeight ? '100vh' : '60vh',
          opacity: 0.5,
        }}
      />
      <BannerHeader fullHeight={props.fullHeight}>
        <h1>{props.heading}</h1>
        {props.subheading && <h2>{props.subheading}</h2>}
        <LinkButton href={props.href} label={props.label} />
      </BannerHeader>
      <HeroFooterContainer>{props.children}</HeroFooterContainer>
    </HeroImage>
  );
};

export default Hero;
