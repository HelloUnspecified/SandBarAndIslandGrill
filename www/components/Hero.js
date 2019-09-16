import React from 'react';
import styled from 'styled-components';
import { ParallaxBanner } from 'react-scroll-parallax';
import Icon from './Icon';
import LinkButton from './LinkButton';
import { below } from '../utitlies/breakpoint.js';

const HeroImage = styled.div`
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : '35vh')};
  max-width: 100%;
  background-position: center;
  background-size: cover;
  background-color: ${({ theme }) => theme.colors.black};

  ${below.med`
    height: ${({ fullHeight }) => (fullHeight ? 'calc(100vh - 7rem)' : '35vh')};
  `};
`;

const HeroFooterContainer = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};

  ${below.med`
    flex-direction: column;
    margin-bottom: 9rem;
  `};

  div {
    width: 50%;

    ${below.med`
      width: 100%;
    `};
  }

  svg {
    margin: 7px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.light};

    ${below.med`
      height: 2.2rem;
    `};
  }

  p {
    margin: 0;
    line-height: 1.2;
  }
`;

const BannerHeader = styled.div`
  position: absolute;
  top: ${({ fullHeight }) => (fullHeight ? '35%' : '12%')};
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${below.med`
    top: ${({ fullHeight }) => (fullHeight ? '37%' : '9%')};
  `};

  h1 {
    font-size: 7rem;
    margin: 0;
    line-height: 1.1;
    font-family: 'Great Vibes', cursive;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.light};

    ${below.med`
      font-size: 5rem;
      margin: 0 2rem;
    `};
  }
  h2 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.light};
    padding-top: 5px;
  }

  svg {
    fill: ${({ theme }) => theme.colors.light};
    width: 3rem;
    margin: auto;
    position: relative;
    top: 1rem;
    height: auto;
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
        {props.href && <LinkButton href={props.href} label={props.label} />}
        {props.fullHeight && (
          <Icon icon="arrow" className="down" height="29" width="29" />
        )}
      </BannerHeader>
      <HeroFooterContainer>{props.children}</HeroFooterContainer>
    </HeroImage>
  );
};

export default Hero;
