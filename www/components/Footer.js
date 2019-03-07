import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const FOOTER_MODIFIERS = {
  site: ({ theme }) => `
    background-color: ${theme.colors.dark}; 
    color: ${theme.colors.fonts.light}; 
  `
};

const Footer = ({ className }) => (
  <footer className={className}>
    <section>
      <div>
        <h1>About Us</h1>
        <div>
          <p>
            The Sand Bar & Island Grill is a waterfront, "open-air"
            establishment located in the Lake Elizabeth marina literally a few
            feet away from the shore. It was founded in 2009 by Carlo DiCarlo, a
            Twin Lakes resident who has spent a great deal of his time on
            Florida's Suncoast in the Tampa Bay/Clearwater area.
          </p>
        </div>
      </div>

      <div>
        <h1>Contact Us</h1>
        <div>
          <p>3101 E. Lakeshore Dr. Twin Lakes, WI 53181 (262) 877-9500</p>
        </div>
      </div>

      <div>
        <h1>Hours</h1>
        <div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Some meta data Some meta
            data Some meta data
          </p>
        </div>
      </div>
    </section>
    <section>
      <p>© 2019 Sand Bar And Island Grill ™, Made by Unspecified</p>
    </section>
  </footer>
);

// use that media query...
export default styled(Footer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.colors.orange};
  }

  section {
    max-width: 1024px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    div {
      flex-basis: 30%;
    }
  }

  ${applyStyleModifiers(FOOTER_MODIFIERS)};
`;
