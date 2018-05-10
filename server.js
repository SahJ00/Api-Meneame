const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require("./schema");
const {getPost, getPosts, addPost} = require("./managers/post");
const mongoose = require('mongoose');
let connString = "mongodb://127.0.0.1";
const db = mongoose.connection;
const app = express();

/**
 * Vinclulacion de Root Query y mutations con sus respectivas funciones JS
 */
var root = {
  posts: getPosts,
  post: getPost,
  addPost: addPost
}

/**
 * Añadimos el middleware que controla GraphQL y lo asignamos a la ruta /grapql
 * Incluimos en el middleware otro middleware para controlar CORS (https://www.npmjs.com/package/cors)
 * Vinculamos el schema y  las asignaciones de funciones
 * Activamos el editor gráfico de Queries (GraphiQL)
 */
app.use('/graphql', cors(), graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('Now browse to localhost:3000/graphql'));

mongoose.connect(connString);
db.on('error',function(){
console.log("Error al conectarse a Mongo");
});
db.once('open', function() {
console.log("Conectado a MongoDB");
});

