import router from 'next/router';
import nprogress from 'nprogress';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

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

const Header = ({ className }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setScrollY(window.pageYOffset);

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  });

  const scrolled = () => {
    return parseInt(scrollY) > 0 ? 'scrolled' : '';
  };

  return (
    <header className={[className, scrolled()].join(' ')}>
      <Nav />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 12px;
  background-color: transparent;
  z-index: 1;
  position: fixed;
  width: 100vw;

  &::before {
    content: '';
    background-color: white;
    transition: all 0.3s;
    transform: translateY(-100%);
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
  }

  &.scrolled {
    a {
      color: ${({ theme }) => theme.colors.dark};
      svg {
        fill: ${({ theme }) => theme.colors.dark};
      }

      &:hover {
        color: ${({ theme }) => theme.colors.orange};
      }
    }

    &::before {
      transform: translateY(0) !important;
    }
  }
`;
