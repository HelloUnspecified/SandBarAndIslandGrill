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
`;

const SquareImage = styled.img`
  height: 240px;
  max-width: 250px;
  object-fit: cover;
  padding: 0.6rem;
`;

const RectangleImage = styled.img`
  height: 120px;
  max-width: 250px;
  object-fit: cover;
  padding: 0.6rem;
`;

const Gallery = ({ className }) => {
  return (
    <ContentSection title="Gallery">
      <ImageContainer>
        <ImageColumn>
          <RectangleImage src="/static/images/tacos-and-rings.jpg" />
          <RectangleImage src="/static/images/Gallery-Oysters2-1.jpg" />
        </ImageColumn>
        <ImageColumn>
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
