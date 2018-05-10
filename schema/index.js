/**
 * Esquema principal de la aplicación
 */

const { buildSchema } = require('graphql');
const schema = buildSchema(`
type Query {
  post(id: String!): Post
  posts: [Post]
}
type Mutation {
  addPost (title: String!, img: Boolean, nameUser: String!, date: String!, description: String!, votes: Int, category: String!):Post
}
type Post {
  id: String!
  title: String!
  img: Boolean
  nameUser: String!
  date: String!
  description: String!
  votes: Int
  category: String!
}
`);


module.exports = schema;