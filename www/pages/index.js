import { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import ContentSection from '../components/ContentSection'
import IconText from '../components/IconText'
import Map from '../components/Map'
import SocialLinks from '../components/SocialLinks'

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

const HeroFooterContainer = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ${({ theme }) => `
    color: ${theme.colors.light};
    svg {
      fill: ${theme.colors.light};
    }
  `}

  div {
    flex-grow: 1;
  }

  svg {
    margin: 7px;
    height: 30px;
  }
`;

const home = props => (
  <Fragment>
    <HeroImage>
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
      image='../static/images/Gallery-Oysters2-1.jpg'
      description="Louisiana oysters, fresh shucked, topped with our Parmesan butter cheese filling and grilled to perfection"
      title="some kind of oyster something"
    />

    <Map />
  </Fragment>
);

export default home;
