const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedLocations: [Location]!
  }

  type Location {
    locationId: ID
    name: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveLocation(name: String!, locationId: ID!, image: String!): User
    removeLocation(locationId: ID!): User
  }
`;

module.exports = typeDefs;
