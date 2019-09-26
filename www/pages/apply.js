import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import ContentSection from '../components/ContentSection';
import Hero from '../components/Hero';
import Map from '../components/Map';

// const apply = props => {
class apply extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');

    script.src = 'https://static.airtable.com/js/embed/embed_snippet_v1.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <>
        <Head>
          <title key="title">Apply Online - Sand Bar and Island Grill</title>
        </Head>
        <ParallaxProvider>
          <>
            <Hero
              imagePath="/static/images/outside-night.jpg"
              heading="Sandbar and Island Grill"
              href="tel:1-262-877-9500"
              label="Call for Reservations"
            />
            <ContentSection title="Apply Online" />

            <iframe
              className="airtable-embed airtable-dynamic-height"
              src="https://airtable.com/embed/shrOAxp5AKqkIowZP?backgroundColor=pink"
              frameBorder="0"
              onmousewheel=""
              width="100%"
              height="3956"
              style={{
                background: 'transparent',
                border: '1px solid #ccc',
              }}
            />
            <Map />
          </>
        </ParallaxProvider>
      </>
    );
  }
}

export default apply;
