import styled from 'styled-components';

import NavItem from './NavItem';

const Nav = ({ className }) => (
  <nav className={className}>
    <NavItem
      title="about us"
      href="/about"
    />
    <NavItem
      title="menu"
      href="/menu"
    />
    <NavItem
      title="reservation"
      href="/"
    />
    <NavItem
      title="home"
      href="/"
      image='/static/images/sand-bar-logo.png'
    />
    <NavItem
      title="news & events"
      href="/contact"
    />
    <NavItem
      title="gallery"
      href="/gallery"
    />
    <NavItem
      title="contact us"
      href="/contact"
    />
  </nav>
);

export default styled(Nav)`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  width: 100%;
  align-items: center;
`;
