import { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import ContentSection from '../components/ContentSection'
import Map from '../components/Map'

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
  background-image: url('/static/images/testImage.jpg');
  background-position: center;
  background-size: cover;
`;

const home = props => (
  <Fragment>
    <HeroImage/>

    <ContentSection
      image='../static/images/Gallery-Oysters2-1.jpg'
      description="Louisiana oysters, fresh shucked, topped with our Parmesan butter cheese filling and grilled to perfection"
      title="some kind of oyster something"
    />

    <Map />
  </Fragment>
);

export default home;
