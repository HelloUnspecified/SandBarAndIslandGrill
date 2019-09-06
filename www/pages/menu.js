import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Hero from '../components/Hero';
import withApollo from '../lib/withApollo';

const GET_DINNERS = gql`
  query getDinners {
    dinners {
      name
      price
    }
  }
`;

export default withApollo(props => {
  const { loading, error, data } = useQuery(GET_DINNERS);
  // if (error) return <p>Error :(</p>;
  if (data) {
    console.log(data);
    return (
      <ParallaxProvider>
        <>
          <Hero
            imagePath="/static/images/tacos-and-rings.jpg"
            heading="Sandbar and Island Grill"
            subheading="Menu"
          />
          <p>Menu</p>
        </>
      </ParallaxProvider>
    );
  }
  return <p>Loading...</p>;
});
