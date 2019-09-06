import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

const config = {
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    fetch,
  }),
};

export default withData(config);
