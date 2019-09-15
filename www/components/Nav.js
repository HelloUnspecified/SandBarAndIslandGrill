import styled from 'styled-components';
import React, { useState } from 'react';
import HamburgerNav from './HamburgerNav';
import NavItem from './NavItem';
import { above, below } from '../utitlies/breakpoint.js';

const NavList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  justify-content: flex-end;

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

const Nav = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={className}>
      <NavItem title="home" href="/" image="/static/images/sand-bar-logo.png" />
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
      <HamburgerNav
        onClick={() => setMenuOpen(!menuOpen)}
        menuOpen={menuOpen}
      />
    </nav>
  );
};

export default styled(Nav)`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;

  ${above.med`
    justify-content: center;
    align-items: center;
  `} ${below.med`
    justify-content: space-between;
  `}
);
`;
