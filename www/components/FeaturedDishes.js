import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import ContentSection from './ContentSection';

const FoodImage = styled.img`
  height: 160px;
  max-width: 250px;
  object-fit: cover;
`;

const GET_MENU_FEATURED = gql`
  query getMenuFeatured {
    menu(isFeatured: true) {
      name
      description
      imageUrl
    }
  }
`;

const FeaturedDishes = () => {
  const context =
    process.env.NODE_ENV === 'development'
      ? { context: { uri: 'http://localhost:3000/api' } }
      : {};

  const { loading, error, data } = useQuery(GET_MENU_FEATURED, context);

  if (loading) return null;
  if (error) return null;

  return (
    <ContentSection title="Featured Dishes" color="light">
      {data.menu.map(i => (
        <FoodImage src={i.imageUrl} />
      ))}
    </ContentSection>
  );
};

export default styled(FeaturedDishes)``;
