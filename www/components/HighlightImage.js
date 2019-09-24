import React from 'react';
import styled from 'styled-components';
import { above, below } from '../utitlies/breakpoint.js';

const HighlightBlock = styled.div`
  order: ${({ align }) => (align === 'left' ? 0 : 2)};
  margin-left: ${({ align }) => (align === 'left' ? 0 : '30px')};
  margin-right: ${({ align }) => (align === 'left' ? '30px' : 0)};
`;

const FeaturedImage = styled.img`
  object-fit: cover;
  width: auto;
  height: ${({ height }) => height || '20rem'};
  position: relative;

  -webkit-box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
  -moz-box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};
  box-shadow: 10px 10px 0px -2px ${({ theme }) => theme.colors.orange};

  ${below.small`
    max-width: 30rem;
  `};
`;

const HighlightImage = props => {
  return (
    <HighlightBlock className={props.className} align={props.align}>
      <FeaturedImage src={props.src} height={props.height} />
    </HighlightBlock>
  );
};

export default styled(HighlightImage)`
  position: relative;

  ${below.med`
    margin: 0;
  `};
`;
