import styled from 'styled-components';
import React, { useState } from 'react';
import HamburgerNav from './HamburgerNav';
import IconText from './IconText';
import NavItem from './NavItem';
import { above, below } from '../utitlies/breakpoint.js';

const NavList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  justify-content: flex-end;
  align-items: center;

  ${below.med`
    flex-direction: column
    ${({ menuOpen }) =>
      !menuOpen &&
      `
      display: none;
    `}
    ${({ menuOpen }) =>
      menuOpen &&
      `
      display: inline-block;
    `}
  `};
`;

const NavListItem = styled.div`
  text-align: right;
  padding-right: 2.5rem;
`;

const ButtonLink = styled.a`
  color: ${({ theme }) => theme.colors.highlight};
  padding: 1rem;
  font-size: 1.7rem;

  svg {
    height: 2rem;
    fill: ${({ theme }) => theme.colors.highlight};
    padding-right: 0.6rem;
  }

  ${above.med`
    display: none;
  `}
`;

const Nav = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={className}>
      <NavItem title="home" href="/" image="/static/images/sand-bar-logo.png" />

      <ButtonLink href="tel:1-262-877-9500">
        <IconText icon="phone" align="right">(262) 877-9500</IconText>
      </ButtonLink>

      <NavList menuOpen={menuOpen}>
        <NavListItem>
          <NavItem title="about" href="/about" />
        </NavListItem>
        <NavListItem>
          <NavItem title="menu" href="/menu" />
        </NavListItem>
        <NavListItem>
          <NavItem title="gallery" href="/gallery" />
        </NavListItem>
        <NavListItem>
          <NavItem title="contact" href="/contact" />
        </NavListItem>
      </NavList>
      {/* <HamburgerNav
        onClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      /> */}
    </nav>
  );
};

export default styled(Nav)`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  align-items: center;

  ${above.med`
    justify-content: center;
    
  `} ${below.med`
    justify-content: space-between;
  `}
);
`;
