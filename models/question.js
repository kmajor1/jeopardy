const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  _id: Schema.Types.ObjectId, 
  question: {
    type: String, 
    required: true
  },
  answer: {
    type: String, 
    required: true 
  }
})

const question = mongoose.model('Question',questionSchema)
module.exports = question 

