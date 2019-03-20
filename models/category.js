const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  jServiceID: {
    type: String, 
    required: true 
  },
  category: {
    type: String, 
    required: true 
  },
  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
})

const category = mongoose.model('Category',categorySchema)
module.exports = category 