// import the db model necessary to add records 
const db = require('../models')

// just a test fn to log response 
const add = function(categories){
  
  let categoriesMongoose = []
 
  // get rid of extraneous key
  for (var i = 0; i < categories.length; i++){
    let categoryMongoose = {}
    categoryMongoose.jServiceID = categories[i].id 
    categoryMongoose.category = categories[i].title 
    categoriesMongoose.push(categoryMongoose)
  }
  // console.log(categoriesMongoose)
  // add to db 
  db.Category.create(categoriesMongoose)
    .then((response) => console.log(response))
}

module.exports = add 
 