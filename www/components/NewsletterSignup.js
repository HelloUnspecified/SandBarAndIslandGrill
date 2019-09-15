import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';

const FoodImage = styled.img`
  height: 160px;
  max-width: 250px;
  object-fit: cover;
`;

const NewsletterSignUp = ({ className }) => {
  return (
    <ContentSection title="Newsletter Signup" color="light">

    </ContentSection>
  );
};

export default styled(NewsletterSignUp)``;
