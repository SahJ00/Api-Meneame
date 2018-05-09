let postsData = require("../fakeData");
const faker = require('faker');

module.exports = {
  getPost:function(arg){
    var id = arg.id
    return postsData.filter(item => {return item.id == id })[0] || null;
  },
  getPosts:function(){
    return postsData;
  },
  addPost:function({title, description}) {
    var id = faker.random.uuid();
    postsData.push({
      id:id,
      title: title,
      img: img,
      nameUser: nameUser,
      date: date,
      description: description,
      votes: {
        positiveVotes: positiveVotes,
        negativeVotes: negativeVotes
      },
      category: category
    })
    
    return postsData.filter(item => item.id === id) [0];
  }
}