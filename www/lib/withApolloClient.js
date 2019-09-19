import React from 'react';
import Head from 'next/head';
import { getDataFromTree } from '@apollo/react-ssr';
import initApollo from './initApollo';

// function apiUrl(path, { req }) {
//   if (req && typeof window === 'undefined') {
//     // this is running server-side, so we need an absolute URL
//     const { host } = req.headers;
//     if (host && host.startsWith('localhost')) {
//       return `http://localhost:3000${path}`;
//     }
//     const nonDevPath = `https://${host}${path}`;
//     console.log('nonDevPath', nonDevPath);
//     return nonDevPath;
//   }

//   console.log('running client side');
//   // this is running client-side, so a relative path is fine
//   return path;
// }

export default App => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)';

    static async getInitialProps(ctx) {
      const { AppTree } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo();
      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <AppTree {...appProps} apolloClient={apollo} />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
