const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random')

const questionSchema = new Schema({
  category_id:{
      type: Number,
      required:true }, 
  question: {
    type: String, 
    required: true
  },
  answer: {
    type: String, 
    required: true 
  }
})

questionSchema.plugin(random)

const question = mongoose.model('Question',questionSchema)
module.exports = question 

