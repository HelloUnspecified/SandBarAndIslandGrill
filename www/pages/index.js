import { Fragment } from 'react';
import styled from 'styled-components';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

const HeroImageText = styled.div`
  color: #ffffff;
  font-size: 20px;

  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto 10px minmax(320px, 1024px) 10px auto 1fr;

  > * {
    grid-column: 4 / -4;
  }
`;

const home = props => (
  <Fragment>
    <ParallaxProvider>
      <ParallaxBanner
        className="your-class"
        layers={[
          {
            image: '/static/images/testImage.jpg',
            amount: 0.1,
            slowerScrollRate: false
          }
        ]}
        style={{
          height: '600px'
        }}
      >
        <HeroImageText>
          <span>Sand Bar and Island Grill</span>
        </HeroImageText>
      </ParallaxBanner>
    </ParallaxProvider>

    <ContentSection>
      <article>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <figure>
          <figcaption>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </figcaption>
        </figure>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <footer>Some meta data Some meta data Some meta data</footer>
      </article>
      <article>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <figure>
          <figcaption>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </figcaption>
        </figure>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>
        <footer>Some meta data Some meta data Some meta data</footer>
      </article>
    </ContentSection>
  </Fragment>
);

export default home;
