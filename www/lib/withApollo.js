// import React from 'react';
// import { withData } from 'next-apollo';
// import { HttpLink } from 'apollo-boost';
// import fetch from 'isomorphic-unfetch';

// const config = host => ({
//   link: new HttpLink({
//     uri: `${host}/graphql`,
//     fetch,
//   }),
// });

// export default Page => {
//   return class extends React.Component {
//     static getInitialProps(ctx) {
//       if (Page.getInitialProps) return Page.getInitialProps(ctx);
//     }

//     render() {
//       const { apiHost } = this.props;
//       console.log('page', Page);
//       const x = withData(config(apiHost))(Page);
//       console.log(x);
//       return x;
//     }
//   };
// };

import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

import withApollo from 'next-apollo-hook';
// import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

const getApiUrl = (path, headers) => {
  console.log('headers in func', headers.host);
  // const { host } = headers;
  // if (host && host.startsWith('localhost')) {
  //   // return `http://${host}${path}`;
  //   return `http://localhost:3000${path}`;
  // }
  // return `https://${host}${path}`;
};

export default withApollo(({ ctx, headers, initialState }) => {
  if (headers) console.log('no Headers', headers.host);

  const { host } = headers;
  let uriHost = `https://${host}`;

  if (host && host.startsWith('localhost')) {
    uriHost = `http://localhost:3000`;
  }

  return new ApolloClient({
    // uri: `${uriBase}graphql`,
    link: createHttpLink({ uri: `${uriHost}/graphql`, fetch }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
