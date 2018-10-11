const {ApolloServer, gql}  = require("apollo-server-express");
const {expressServer} = require("./../index.js");

const typeDefs = gql`
  type Query {
    hello : String
  }
`;

const resolvers = {
  Query: {
    hello : () => ("hello")
  }
}

const apolloServer = new ApolloServer({typeDefs, resolvers});


apolloServer.applyMiddleware({app : expressServer});

module.exports = {apolloServer};
