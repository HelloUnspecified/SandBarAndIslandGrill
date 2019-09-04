const { ApolloServer } = require('apollo-server-micro');

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

module.exports = server.createHandler();
