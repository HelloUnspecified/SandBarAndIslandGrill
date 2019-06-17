import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fragment } from 'react';
import Hero from '../components/Hero'
import Map from '../components/Map'

const contact = props => (
  <ParallaxProvider>
    <Fragment>
      <Hero
        imagePath="/static/images/conversation.jpg"
        heading="Sandbar and Island Grill"
        subheading="Contact Us"
      />
      <p>Contact</p>
      <Map />
    </Fragment>
  </ParallaxProvider>
);

export default contact;
