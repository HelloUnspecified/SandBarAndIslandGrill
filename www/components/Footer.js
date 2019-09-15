import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import IconText from './IconText';
import SocialLinks from './SocialLinks';
import { above, below } from '../utitlies/breakpoint.js';

const FOOTER_MODIFIERS = {
  site: ({ theme }) => `
    background-color: ${theme.colors.dark};
    color: ${theme.colors.fonts.light};
  `,
};

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.orange};
`;

const Text = styled.p`
  margin: 0;
  line-height: 1.5;

  a {
    color: ${({ theme }) => theme.colors.fonts.light};
  }
`;

const Title = styled.p`
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
  float: left;
  padding-right: 1.2rem;
`;

const FooterColumn = styled.div`
  padding: 0 2rem;
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  ${below.small`
    &:not(:first-child) {
      padding-top: 20px;
    }
  `};
`;

const FooterRow = styled.div`
  padding-bottom: 1rem;
`;

const HoursRow = styled.div`
  padding-bottom: 1rem;
  line-height: 1;
  display: flex;
  width: 100%;
  max-width: 20rem;
  justify-content: space-between;
`;

const Hours = styled.p`
  margin: 0;
`;

const Trademark = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
`;

const Footer = ({ className }) => (
  <footer className={className}>
    <section>
      {/* <FooterColumn>
        <Heading>About Us</Heading>
        <Text>
          The Sand Bar & Island Grill is a waterfront, "open-air" establishment
          located in the Lake Elizabeth marina literally a few feet away from
          the shore. It was founded in 2009 by Carlo DiCarlo, a Twin Lakes
          resident who has spent a great deal of his time on Florida's Suncoast
          in the Tampa Bay/Clearwater area.
        </Text>
      </FooterColumn> */}

      <FooterColumn>
        <Heading>Hours</Heading>
        <HoursRow>
          <Title>Monday</Title>
          <Hours>11am - 9pm</Hours>
        </HoursRow>
        <HoursRow>
          <Title>Tuesday</Title>
          11am - 9pm
        </HoursRow>
        <HoursRow>
          <Title>Wednesday</Title>
          11am - 9pm
        </HoursRow>
        <HoursRow>
          <Title>Thursday</Title>
          11am - 9pm
        </HoursRow>
        <HoursRow>
          <Title>Friday</Title>
          11am - 9pm
        </HoursRow>
        <HoursRow>
          <Title>Saturday</Title>
          11am - 9pm
        </HoursRow>
        <HoursRow>
          <Title>Sunday</Title>
          11am - 9pm
        </HoursRow>
      </FooterColumn>

      <FooterColumn>
        <Heading>Contact Us</Heading>
        <FooterRow>
          <IconText icon="location">
            <Text>
              3101 E. Lakeshore Dr.
              <br />
              Twin Lakes, WI 53181
            </Text>
          </IconText>
        </FooterRow>
        <FooterRow>
          <IconText icon="phone">
            <Text>
              <a href="tel:1-262-877-9500">(262) 877-9500</a>
            </Text>
          </IconText>
        </FooterRow>
        <FooterRow>
          <IconText icon="email">
            <Text>
              <a href="mailto:eat@sandbarandislandgrill.com">
                eat@sandbarandislandgrill.com
              </a>
            </Text>
          </IconText>
        </FooterRow>
        <SocialLinks />
      </FooterColumn>
    </section>
    <Trademark>
      © 2019 Sand Bar And Island Grill ™, Made by Unspecified
    </Trademark>
  </footer>
);

// use that media query...
export default styled(Footer)`
  font-size: 1.3rem;
  position: relative;
  top: -1rem;

  section {
    margin: 2rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    ${below.small`
      flex-direction: column;
    `} ${above.small`
      flex-direction: row;
    `}

    svg {
      height: 2rem;

      padding-right: 1rem;
    }
  }

  ${applyStyleModifiers(FOOTER_MODIFIERS)};
`;
