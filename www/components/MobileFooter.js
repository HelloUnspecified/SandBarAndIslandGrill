import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import NavItem from './NavItem';
import SocialLinks from './SocialLinks';
import { above, below } from '../utitlies/breakpoint.js';

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: 1.4rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
    cursor: pointer;
  }

  svg {
    fill: ${({ theme }) => theme.colors.highlight};
    height: 3.3rem;
    width: 3.3rem;

    &.lower-little {
      position: relative;
      top: 0.7rem;
    }

    &.lower {
      position: relative;
      top: 1rem;
    }

    &:hover {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

const FullNav = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 45rem;
  padding: 2rem;
  z-index: 100;

  a {
    font-size: 1.7rem;
    padding: 0.7rem;
  }
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  height: 3rem;
  right: 0;
  top: 2rem;
  fill: ${({ theme }) => theme.colors.highlight};
`;

const MobileSocialLinks = styled(SocialLinks)`
  padding-top: 3rem;
  height: 9rem;

  a {
    padding: 0.3rem;

    &:hover {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
  }

  svg {
    fill: ${({ theme }) => theme.colors.highlight};
    width: 3rem;
  }
`;

const MobileFooter = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={className}>
      <NavLink href="/menu">
        <Icon icon="foodDrink" height="80" width="80" />
        Menu
      </NavLink>
      <NavLink href="/contact">
        <Icon icon="quote" height="70" width="70" className="lower-little" />
        Contact Us
      </NavLink>
      <NavLink onClick={() => setMenuOpen(!menuOpen)}>
        <Icon icon="hamburgerMenu" height="12" width="12" className="lower" />
        More
      </NavLink>
      <FullNav menuOpen={menuOpen}>
        <NavItem
          title="home"
          href="/"
          image="/static/images/sand-bar-logo.png"
          imageWidth="13rem"
        />
        <CloseIcon
          icon="close"
          height="80"
          width="80"
          onClick={() => {
            setMenuOpen(false);
          }}
        />
        <NavItem
          title="about"
          color="highlight"
          href="/about"
          onClick={() => setMenuOpen(false)}
        />
        <NavItem
          title="menu"
          color="highlight"
          href="/menu"
          onClick={() => setMenuOpen(false)}
        />
        <NavItem
          title="gallery"
          color="highlight"
          href="/gallery"
          onClick={() => setMenuOpen(false)}
        />
        <NavItem
          title="contact"
          color="highlight"
          href="/contact"
          onClick={() => setMenuOpen(false)}
        />
        <MobileSocialLinks />
      </FullNav>
    </div>
  );
};

export default styled(MobileFooter)`
  display: none;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100vw;
  height: 7rem;

  ${below.med`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `};
`;
