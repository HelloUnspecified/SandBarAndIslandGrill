const resolvers = {
  users: (parent, args, { dataSources }) => ({}),
  user: (parent, { id }, { dataSources }) => ({}),
  me: (parent, args, { dataSources, user }) => ({})
};

export const fieldResolvers = {
  Menu: {}
};

export default resolvers;
