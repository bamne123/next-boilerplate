/* eslint-disable import/no-extraneous-dependencies */

const { gql } = require('apollo-server-koa');

const typeDefs = gql`
  type Person {
    lastname: String
    firstname: String
    jobType: String
  }
  type Query {
    persons: [Person]
  }
`;

module.exports = { typeDefs };
