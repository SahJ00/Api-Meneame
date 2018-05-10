const mongoose = require('mongoose');
let connString = "mongodb://team1:123456789@ds119160.mlab.com:19160/meneame-clone";
const db = mongoose.connection;
mongoose.connect(connString);

db.on('error',function(){
console.log("Error al conectarse a Mongo");
});
db.once('open', function() {
  console.log("Conectado a MongoDB");
});

module.exports ={
  mongoose:mongoose
}