import React from 'react';
import styled from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import _ from 'lodash';
import ContentSection from './ContentSection';
import Hero from './Hero';
import MenuGroup from './MenuGroup';
import { below, categories } from '../utilities';

const GET_MENU = gql`
  query getMenu {
    menu {
      name
      description
      price
      category
      imageUrl
      slug
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  ${below.med`
    flex-direction: column;
    margin: auto;
  `};
`;

const FullMenu = () => {
  const context =
    process.env.NODE_ENV === 'development'
      ? { context: { uri: 'http://localhost:3000/api/graphql' } }
      : {};

  const { loading, error, data } = useQuery(GET_MENU, context);

  if (loading) return null;
  if (error) return null;

  const orderedMenuCategories = _.orderBy(categories, 'order');

  const groupedDinners = () => {
    return data.menu.reduce((r, a) => {
      r[a.category] = [...(r[a.category] || []), a];
      return r;
    }, {});
  };

  return (
    <ParallaxProvider>
      <>
        <Hero
          imagePath="/images/tacos-and-rings.jpg"
          heading="Sand Bar and Island Grill"
          href="tel:1-262-877-9500"
          label="Call for Reservations"
        />

        <ContentSection title="Menu">
          <Menu>
            {orderedMenuCategories.map(category => {
              return (
                <MenuGroup
                  title={category.title}
                  subtext={category.subtext}
                  items={groupedDinners()[category.key]}
                  key={category.key}
                />
              );
            })}
          </Menu>
        </ContentSection>
      </>
    </ParallaxProvider>
  );
};

export default React.memo(FullMenu);
