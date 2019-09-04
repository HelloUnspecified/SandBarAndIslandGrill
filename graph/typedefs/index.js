const { importSchema } = require('graphql-import');
const typeDefs = () => importSchema(`${__dirname}/schema.graphql`);

module.exports = typeDefs();
