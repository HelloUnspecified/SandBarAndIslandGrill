import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { DefaultSeo, LogoJsonLd, LocalBusinessJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import Modal from './Modal';
import Covid from './Covid';
import GlobalStyle from '../styles/globalStyle';
import baseTheme from '../styles/baseTheme';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import { defaultSeo } from '../utilities';

const StyledPage = styled.div`
  background: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.black};
`;

const CorePage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
`;

const InnerPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Page = ({ children }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);

  return (
    <ThemeProvider theme={baseTheme}>
      <>
        <GlobalStyle />
        <StyledPage>
          <Meta />
          <DefaultSeo
            {...defaultSeo}
            canonical={`https://sandbarandislandgrill.com/"${router.pathname}`}
          />
          <LogoJsonLd
            logo="https://sandbarandislandgrill.com/images/sand-bar-logo.png"
            url="https://sandbarandislandgrill.com/"
          />

          <LocalBusinessJsonLd
            type="Restaurant"
            id="https://sandbarandislandgrill.com/"
            name={defaultSeo.title}
            description={defaultSeo.description}
            url="https://sandbarandislandgrill.com/"
            telephone="+2628779500"
            address={{
              streetAddress: '3101 E. Lakeshore Dr.',
              addressLocality: 'Twin Lakes',
              addressRegion: 'WI',
              postalCode: '53181',
              addressCountry: 'US',
            }}
            geo={{
              latitude: '42.49754',
              longitude: '-88.2722',
            }}
            images={[
              'https://sandbarandislandgrill.com/images/sandbar-inside.jpg',
              'https://sandbarandislandgrill.com/images/tacos-and-rings.jpg',
              'https://sandbarandislandgrill.com/images/home-entrance.jpg',
            ]}
            openingHours={[
              {
                opens: '11:00',
                closes: '23:00',
                dayOfWeek: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                ],
                validFrom: '2020-04-01',
                validThrough: '2020-11-01',
              },
              {
                opens: '11:00',
                closes: '23:59',
                dayOfWeek: ['Friday', 'Saturday'],
                validFrom: '2020-04-01',
                validThrough: '2020-11-01',
              },
            ]}
          />

          <CorePage>
            <Modal showModal={showModal} setShowModal={setShowModal}>
              <Covid />
            </Modal>
            <Header />
            <InnerPage>{children}</InnerPage>
            <Footer modifiers="site" />
          </CorePage>
        </StyledPage>
      </>
    </ThemeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
