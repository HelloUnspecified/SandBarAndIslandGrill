import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { below } from '../utilities/breakpoint';
import * as gtag from '../lib/gtag';

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
  const iconHeight = '29';
  const iconWidth = '29';

  const clickTracking = label => {
    gtag.event({
      clientWindow: window,
      action: 'click',
      category: 'link button',
      label,
    });
  };

  return (
    <SocialLinksContainer className={className}>
      <a
        href="https://www.facebook.com/sandbarandislandgrill/"
        target="_blank"
        rel="noreferrer noopener"
        key="facebook"
        onClick={() => clickTracking('facebook')}
      >
        <Icon icon="facebook" height={iconHeight} width={iconWidth} />
      </a>
      <a
        href="https://www.instagram.com/sandbarandislandgrill/"
        target="_blank"
        rel="noreferrer noopener"
        key="instagram"
        onClick={() => clickTracking('instagram')}
      >
        <Icon icon="instagram" height={iconHeight} width={iconWidth} />
      </a>
      <a
        href="https://www.tripadvisor.com/Restaurant_Review-g60341-d2224176-Reviews-Sand_Bar_and_Island_Grill-Twin_Lakes_Wisconsin.html"
        target="_blank"
        rel="noreferrer noopener"
        key="tripAdvisor"
        onClick={() => clickTracking('tripAdvisor')}
      >
        <Icon icon="tripAdvisor" height={iconHeight} width={iconWidth} />
      </a>
      <a
        href="https://www.yelp.com/biz/sand-bar-and-island-grill-twin-lakes"
        target="_blank"
        rel="noreferrer noopener"
        key="yelp"
        onClick={() => clickTracking('yelp')}
      >
        <Icon icon="yelp" height={iconHeight} width={iconWidth} />
      </a>
    </SocialLinksContainer>
  );
};

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: '',
};

export default styled(SocialLinks)``;
