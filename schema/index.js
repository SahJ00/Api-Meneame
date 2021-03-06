/**
 * Esquema principal de la aplicación
 */

const { buildSchema } = require('graphql');
const schema = buildSchema(`
type Query {
  post(_id: String!): Post
  posts: [Post]
}
type Mutation {
  addPost (title: String!, img: String, nameUser: String, date: String, description: String!, votes: Int, category: String!):Post
  deletePost (_id: String!):Boolean
}
type Post {
  _id: String
  title: String!
  img: String
  nameUser: String
  date: String
  description: String!
  votes: Int
  category: String!
}
`);


module.exports = schema;