const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  jServiceID: {
    type: Number, 
    required: true 
  },
  category: {
    type: String, 
    required: true 
  }
})

const category = mongoose.model('Category',categorySchema)
module.exports = category 