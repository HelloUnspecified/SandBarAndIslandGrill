import React from 'react';
import App, { Container } from 'next/app';
import Page from '../components/Page';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import fetch from 'node-fetch'

const client = new ApolloClient({
  uri: "http://localhost:3000/graph",
  fetch: fetch
});

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ApolloProvider client={client}>
        <Container>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Container>
      </ApolloProvider >
    );
  }
}
