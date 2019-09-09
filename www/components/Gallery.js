import React from 'react';
import styled from 'styled-components';
import ContentSection from './ContentSection';
import { above, below } from '../utitlies/breakpoint.js';

const ImageContainer = styled.div`
  display: flex;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.large {
    flex-grow: 2;
  }
`;

const SquareImage = styled.img`
  max-height: 28rem;
  object-fit: cover;
  padding: 0.6rem;
`;

const RectangleImage = styled.img`
  max-height: 14rem;
  object-fit: cover;
  padding: 0.6rem;
`;

const Gallery = ({ className }) => {
  return (
    <ContentSection title="Gallery" color="light">
      <ImageContainer>
        <ImageColumn>
          <RectangleImage src="/static/images/tacos-and-rings.jpg" />
          <RectangleImage src="/static/images/Gallery-Oysters2-1.jpg" />
        </ImageColumn>
        <ImageColumn className="large">
          <SquareImage src="/static/images/Gallery-Toast-Sandwich.jpg" />
        </ImageColumn>
        <ImageColumn>
          <RectangleImage src="/static/images/tacos-and-rings.jpg" />
          <RectangleImage src="/static/images/Gallery-Oysters2-1.jpg" />
        </ImageColumn>
      </ImageContainer>
    </ContentSection>
  );
};

export default styled(Gallery)``;
