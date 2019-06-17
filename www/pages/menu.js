import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fragment } from 'react';
import Hero from '../components/Hero'

const menu = props => (
  <ParallaxProvider>
    <Fragment>
      <Hero
        imagePath="/static/images/tacos-and-rings.jpg"
        heading="Sandbar and Island Grill"
        subheading="Menu"
      />
      <p>Menu</p>
    </Fragment>
  </ParallaxProvider>
);

export default menu;
