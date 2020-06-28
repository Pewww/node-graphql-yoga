const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./graphql/resolvers');

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers
});

server.start(() => {
  console.log('Server is running on 4000 port.');
});
