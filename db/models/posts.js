const {
  mongoose
} = require("../index")
const ObjectId = mongoose.Types.ObjectId;

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  nameUser: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  votes: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  }
});

let postModel = mongoose.model('Post', postSchema);

module.exports = {
  postModel: postModel
}