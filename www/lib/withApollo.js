import { withData } from 'next-apollo';
// import { HttpLink } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

const config = {
  link: createHttpLink({
    uri: 'http://localhost:3000/graphql',
    fetch
  })
};

export default withData(config);
