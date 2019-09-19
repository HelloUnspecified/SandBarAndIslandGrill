import React, { useState } from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import HamburgerNav from './HamburgerNav';
import Icon from './Icon';
import IconText from './IconText';
import SocialLinks from './SocialLinks';
import { above, below } from '../utitlies/breakpoint.js';

const FOOTER_MODIFIERS = {
  site: ({ theme }) => `
    background-color: ${theme.colors.dark};
    color: ${theme.colors.fonts.light};
  `,
};

const SandBarLogo = styled.img`
  display: block;
  width: 40%;
  height: auto;
  margin: auto;
  max-width: 18rem;
`;

const Heading = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 2;
  color: ${({ theme }) => theme.colors.orange};
  border: 3px solid ${({ theme }) => theme.colors.orange};
  text-align: center;
  width: 100%;
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.highlight};

  a {
    color: ${({ theme }) => theme.colors.highlight};

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
      cursor: pointer;
    }
  }
`;

const FooterColumn = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 35rem;
  align-items: center;

  ${below.med`
    :not(:first-child) {
      padding-top: 1.4rem;
    }
  `};

  ${above.med`
    min-height: 10rem;
  `};
`;

const FooterSocials = styled(SocialLinks)`
  a {
    padding: 0 0.4rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.fonts.light};
    width: 2rem;
    margin: auto;
    position: relative;
    top: 1rem;
  }

  ${above.med`
    position: relative;
    top: -1rem;
  `};
`;

const Trademark = styled.p`
  text-align: center;
  font-size: 10px;
  margin-top: 0;

  ${below.med`
    padding-bottom: 7rem;
  `};
`;

const MobileFooter = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100vw;
  height: 7rem;

  a {
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

    svg:hover {
      fill: ${({ theme }) => theme.colors.tertiary};
    }
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
  }

  ${below.med`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `};
`;

const Footer = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <footer className={className}>
      <section>
        <SandBarLogo src="/static/images/sand-bar-logo.png" />
        <FooterColumn>
          <Heading>Phone</Heading>
          <Text>
            <a href="tel:1-262-877-9500">(262) 877-9500</a>
          </Text>
        </FooterColumn>
        <FooterColumn>
          <Heading>Address</Heading>
          <Text>
            <a href="https://goo.gl/maps/9fvZcNvVcsiJ82Hj6" target="_blank">
              3101 E. Lakeshore Dr.,
              <br />
              Twin Lakes, WI 53181
            </a>
          </Text>
        </FooterColumn>
        <FooterColumn>
          <Heading>Hours</Heading>
          <Text>
            Sunday - Thursday 11-11
            <br />
            Friday & Saturday 11-12
          </Text>
        </FooterColumn>
      </section>
      <FooterSocials />
      <Trademark>
        © 2019 Sand Bar And Island Grill ™, Made by Unspecified
      </Trademark>
      <MobileFooter>
        <a href="/menu">
          <Icon icon="foodDrink" height="80" width="80" />
          Menu
        </a>
        <a href="/contact">
          <Icon icon="quote" height="70" width="70" className="lower-little" />
          Contact Us
        </a>
        <a href="/menu">
          <Icon icon="hamburgerMenu" height="12" width="12" className="lower" />
          More
        </a>
        {/* <HamburgerNav
          onClick={() => setMenuOpen(!menuOpen)}
          menuOpen={menuOpen}
        /> */}
      </MobileFooter>
    </footer >
  );
};

// use that media query...
export default styled(Footer)`
  font-size: 1.3rem;
  position: relative;
  top: -1rem;

  section {
    margin: 2rem;
    display: flex;
    justify-content: center;

    ${below.small`
      flex-direction: column;
    `} ${above.small`
      flex-direction: row;
    `}

    ${above.med`
      margin-bottom: 0;
      align-items: center;
    `}

    svg {
      height: 2rem;

      padding-right: 1rem;
    }
  }

  ${applyStyleModifiers(FOOTER_MODIFIERS)};
`;
