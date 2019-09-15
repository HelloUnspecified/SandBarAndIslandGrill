import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { below } from '../utitlies/breakpoint.js';

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  a {
    ${below.med`
      margin-bottom: 1rem;
    `};

    &:hover {
      svg {
        fill: ${({ theme }) => theme.colors.orange};
      }
    }
  }
`;

const SocialLinks = ({ className }) => {
  return (
    <SocialLinksContainer className={className}>
      <a href="https://www.facebook.com/sandbarandislandgrill/" target="_blank">
        <Icon icon="facebook" />
      </a>
      <a
        href="https://www.instagram.com/sandbarandislandgrill/"
        target="_blank"
      >
        <Icon icon="instagram" />
      </a>
      <a
        href="https://www.yelp.com/biz/sand-bar-and-island-grill-twin-lakes"
        target="_blank"
      >
        <Icon icon="tripAdvisor" />
      </a>
      <a
        href="https://www.tripadvisor.com/Restaurant_Review-g60341-d2224176-Reviews-Sand_Bar_and_Island_Grill-Twin_Lakes_Wisconsin.html"
        target="_blank"
      >
        <Icon icon="yelp" />
      </a>
    </SocialLinksContainer>
  );
};

export default styled(SocialLinks)``;
