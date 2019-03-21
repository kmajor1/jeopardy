const db = require('../models')

const findCategories =  function () {
  let categories = []
  return new Promise(resolve => {
    db.Category.findRandom({},{},{limit: 5},function(err, results){
      for (var i = 0; i < results.length; i++){
        let category = {category_id: results[i].jServiceID, category: results[i].category}
        categories.push(category)
      }
      resolve(categories)
    })
  
  })
}

 function getQuestionsByCategory(category){
  
  return new Promise(resolve => {
    db.Question.findRandom({category_id: category}, {_id: 0, question:1, answer:1}, {limit: 5}, function(err,questions){
      console.log(questions)
      
      resolve(questions)
    })
    
  })
  
}
    



module.exports = {
  findCategories: findCategories,
  getQuestionsForCategory: getQuestionsByCategory
}