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
  addPost: async function({title, img, nameUser, date, description, votes, category}) {
    let post = {
      title: title,
      img: img,
      nameUser: nameUser,
      date: date,
      description: description,
      votes: votes,
      category: category
    }
    try {
      let myPostModel = new postModel(post)
      var result = await myPostModel.save()
      return result
    }catch(err) {
      return false
    }
  },
  deletePost: async function(id) {
    try{
      var result = await postModel.findByIdAndRemove(id)
      return true
    }catch(err){
      return false
    }
  
  }
}