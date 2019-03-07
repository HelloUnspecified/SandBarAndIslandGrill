import router from 'next/router';
import nprogress from 'nprogress';
import styled from 'styled-components';

import Nav from './Nav';

router.onRouteChangeStart = () => {
  nprogress.start();
};

router.onRouteChangeComplete = () => {
  nprogress.done();
};

router.onRouteChangeError = () => {
  nprogress.done();
};

const Header = ({ className }) => (
  <header className={className}>
    <div>
      <p>HEADER</p>
    </div>
    <Nav />
  </header>
);

export default styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
