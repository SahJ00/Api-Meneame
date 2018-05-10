let postsData = require("../fakeData");
const faker = require('faker');
const {postModel} = require("../db/models/posts")
module.exports = {
  getPost:function(arg){
    var id = arg.id;
    return postsData.filter(item => {return item.id == id })[0] || null;
  },
  getPosts:function(){
    return postsData;
  },
  addPost:function({title, img, nameUser, date, description, votes, category}) {
    let post = {
      title: title,
      img: img,
      nameUser: nameUser,
      date: date,
      description: description,
      votes: votes,
      category: category
    }
    let postDB = new postModel(post).save().then(function(res){
      return (res)
    }).catch(function(){
      return null
    })
    
   
  },
  deletePost:function(id) {
    var id = {_id : id};
    postModel.findByIdAndRemove(id, function(err, result) {
      if (err) throw err;
      if(result){
      console.log("Documento eliminado.");
      }
      });
    return true;
  }
}