import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as gtag from '../lib/gtag';
import { above, below } from '../utilities/breakpoint';

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 1.4rem;
  text-align: center;
  color: ${props =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.light};

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  ${below.med`
    flex-direction: column
    ${({ display }) =>
      display === 'desktop' &&
      `
      display: none;
    `}
    ${({ display }) =>
      display === 'mobile' &&
      `
      display: inline;
    `}
  `} ${above.med`
    flex-direction: column
    ${({ display }) =>
      display === 'desktop' &&
      `
      display: inline;
    `}
    ${({ display }) =>
      display === 'mobile' &&
      `
      display: none;
    `}
  `};
`;

const NavImage = styled.img`
  width: ${props => (props.imageWidth ? props.imageWidth : '7rem')};
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

const NavItem = ({
  color,
  display,
  href,
  image,
  imageWidth,
  onClick,
  style,
  title,
}) => {
  const clickTracking = () => {
    gtag.event({
      clientWindow: window,
      action: 'click',
      category: 'nav item',
      title,
    });
  };

  const displayedLink = () => {
    if (image) {
      return <NavImage src={image} imageWidth={imageWidth} style={style} />;
    }

    return title;
  };

  return (
    <Link href={href} passHref onClick={clickTracking}>
      <StyledLink display={display} onClick={onClick} color={color}>
        {displayedLink()}
      </StyledLink>
    </Link>
  );
};

NavItem.propTypes = {
  color: PropTypes.string,
  display: PropTypes.string,
  href: PropTypes.string,
  image: PropTypes.string,
  imageWidth: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
  title: PropTypes.string,
};

NavItem.defaultProps = {
  color: '',
  display: '',
  href: '',
  image: '',
  imageWidth: '',
  onClick: () => {},
  style: {},
  title: '',
};

export default NavItem;
