import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';

const FoodImage = styled.img`
  height: 160px;
  max-width: 250px;
  object-fit: cover;
`;

const FeaturedDishes = ({ className }) => {
  return (
    <ContentSection title="Featured Dishes" color="light">
      <FoodImage src="/static/images/tacos-and-rings.jpg" />
      <FoodImage src="/static/images/Gallery-Oysters2-1.jpg" />
      <FoodImage src="/static/images/Gallery-Toast-Sandwich.jpg" />
    </ContentSection>
  );
};

export default styled(FeaturedDishes)``;
