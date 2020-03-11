import queries from './queries';

// create the Apollo Server
export default {
  Query: {
    ...queries,
  },
};
