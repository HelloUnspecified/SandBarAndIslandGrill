import { importSchema } from 'graphql-import';

const typeDefs = () => importSchema(`${__dirname}/schema.graphql`);

console.log('typeDef:', typeDefs());

export default typeDefs();
