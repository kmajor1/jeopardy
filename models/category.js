const mongoose = require('mongoose')
const random = require('mongoose-simple-random')
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

categorySchema.plugin(random)

const category = mongoose.model('Category',categorySchema)
module.exports = category 