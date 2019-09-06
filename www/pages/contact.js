import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import Hero from '../components/Hero';
import Map from '../components/Map';

const contact = props => (
  <ParallaxProvider>
    <>
      <Hero
        imagePath="/static/images/conversation.jpg"
        heading="Sandbar and Island Grill"
        subheading="Contact Us"
      />
      <p>Contact</p>
      <Map />
    </>
  </ParallaxProvider>
);

export default contact;
