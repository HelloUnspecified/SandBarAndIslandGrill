/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import withApolloClient from '../lib/withApolloClient';

import Page from '../components/Page';

class MyApp extends App {
  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Page>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Page>
    );
  }
}

export default withApolloClient(MyApp);
