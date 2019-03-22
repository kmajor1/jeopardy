// import the db model necessary to add records 
const db = require('../models')

// just a test fn to log response 
const addQuestions = function(questions){
  // console.log(questions)
  let questionsMongoose = []
 
  // console.log(questions[0].question)
  // get rid of extraneous key
  for (var i = 0; i < questions.length; i++){
    let questionMongoose = {}
    questionMongoose.question = questions[i].question 
    questionMongoose.answer = questions[i].answer
    questionMongoose.category_id = questions[i].category_id 
    questionsMongoose.push(questionMongoose)
   }
  // console.log(questionsMongoose)
  // add to db 
  db.Question.create(questionsMongoose)
    .then((response) => console.log(response))
}

module.exports = addQuestions
 