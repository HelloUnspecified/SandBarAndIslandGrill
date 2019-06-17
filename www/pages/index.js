import { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import ContentSection from '../components/ContentSection'
import Hero from '../components/Hero'
import IconText from '../components/IconText'
import Map from '../components/Map'
import SocialLinks from '../components/SocialLinks'
import React, { Component} from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import {above, below} from '../utitlies/breakpoint.js';


const home = props => (
  <ParallaxProvider>
    <Fragment>
      <Hero
        imagePath="/static/images/sandbar-inside.jpg"
        fullHeight="true"
        heading="Sandbar and Island Grill"
        subheading="A Tropical Oasis in the Least Likely of Places!"
      >
        <SocialLinks />
        <IconText icon="location">
          <p>
            3101 E. Lakeshore Dr., Twin Lakes, WI 53181
          </p>
        </IconText>
      </Hero>

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
