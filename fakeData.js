/**
 *  Datos ficticios iniciales
 */

const faker = require('faker');

function generateFake(length){
  var fake = []
  for (var i=0;i<length;i++){
    var item = {
      id: faker.random.uuid(),
      title: faker.lorem.sentence(),
      img: faker.image.image(),
      nameUser: faker.internet.userName(),
      date: faker.date.recent(),
      description: faker.lorem.paragraph(),
      votes: faker.random.number(),
      category: faker.hacker.adjective()
    }
    fake.push(item)
  }

  return fake;

}

var postsData = generateFake(10)

module.exports = postsData;