import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import pages from './queries/pages';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      pages,
    },
  }),
});

export default schema;
