import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import IconText from './IconText';
import SocialLinks from './SocialLinks';

const FOOTER_MODIFIERS = {
  site: ({ theme }) => `
    background-color: ${theme.colors.dark};
    color: ${theme.colors.fonts.light};
  `
};

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 11px;
  line-height: 18px;
`;

const Text = styled.p`
  margin: 0;
`;

const Title = styled.p`
  margin: 0;
  font-weight: 800;
  text-transform: uppercase;
`;

const FooterColumn = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Trademark = styled.p`
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
`;

const Footer = ({ className }) => (
  <footer className={className}>
    <section>
      <FooterColumn>
        <Heading>About Us</Heading>
        <Text>
          The Sand Bar & Island Grill is a waterfront, "open-air"
          establishment located in the Lake Elizabeth marina literally a few
          feet away from the shore. It was founded in 2009 by Carlo DiCarlo, a
          Twin Lakes resident who has spent a great deal of his time on
          Florida's Suncoast in the Tampa Bay/Clearwater area.
        </Text>
      </FooterColumn>

      <FooterColumn>
        <Heading>Contact Us</Heading>
        <IconText icon="location">
          <Text>
            3101 E. Lakeshore Dr.
            <br/>Twin Lakes, WI 53181
          </Text>
        </IconText>
        <IconText icon="phone">
          <Text>(262) 877-9500</Text>
        </IconText>
        <IconText icon="email">
          <Text>hello@sandbarandislandgrill.com</Text>
        </IconText>
        <SocialLinks />
      </FooterColumn>

      <FooterColumn>
        <Heading>Hours</Heading>
        <Title>Monday</Title>
        <Title>Tuesday</Title>
        <Title>Wednesday</Title>
        <Title>Thursday</Title>
        <Title>Friday</Title>
        <Title>Saturday</Title>
        <Title>Sunday</Title>
      </FooterColumn>
    </section>
    <Trademark>© 2019 Sand Bar And Island Grill ™, Made by Unspecified</Trademark>
  </footer>
);

// use that media query...
export default styled(Footer)`
  font-size: 13px;

  h1 {
    color: ${({ theme }) => theme.colors.orange};
  }

  section {
    margin: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  ${applyStyleModifiers(FOOTER_MODIFIERS)};
`;
