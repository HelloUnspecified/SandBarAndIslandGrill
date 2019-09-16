import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { above, below } from '../utitlies/breakpoint.js';

const StyledLink = styled.a`
  text-transform: uppercase;
  font-size: 1.4rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};

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
  width: 70px;
  margin: 1rem;
`;

const NavItem = props => {
  const displayedLink = () => {
    if (props.image) {
      return <NavImage src={props.image} />;
    }

    return props.title;
  };

  return (
    <Link href={props.href} passHref>
      <StyledLink display={props.display}>{displayedLink()}</StyledLink>
    </Link>
  );
};

export default NavItem;
