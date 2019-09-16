import React from 'react';
import App from 'next/app';

import Page from '../components/Page';

function apiUrl(path, { req }) {
  if (req && typeof window === 'undefined') {
    // this is running server-side, so we need an absolute URL
    const { host } = req.headers;
    if (host && host.startsWith('localhost')) {
      return `http://localhost:3000${path}`;
    }
    return `https://${host}${path}`;
  }
  // this is running client-side, so a relative path is fine
  return path;
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const apiHost = apiUrl('/', ctx);
    console.log('apiHost', apiHost);

    pageProps.apiHost = apiHost;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Page apiHost={pageProps.apiHost}>
        <Component {...pageProps} />
      </Page>
    );
  }
}
