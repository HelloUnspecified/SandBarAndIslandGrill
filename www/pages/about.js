import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fragment } from 'react';
import Hero from '../components/Hero'

const about = props => (
  <ParallaxProvider>
    <Fragment>
      <Hero
        imagePath="/static/images/home-entrance.jpg"
        heading="Sandbar and Island Grill"
        subheading="Our Story"
      />
      <p>About</p>
    </Fragment>
  </ParallaxProvider>
);

export default about;
