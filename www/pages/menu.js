import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fragment } from 'react';
import Hero from '../components/Hero';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const menu = props => {

  const { loading, error, data } = useQuery(gql`
    {
      dinners {
        id
        name
      }
    }
  `);

  console.log(error);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  
  return (
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
  )
};

export default menu;
