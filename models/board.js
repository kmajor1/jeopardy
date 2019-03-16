const mongoose = require('mongoose')
const Schema = mongoose.Schema

const boardSchema = Schema({
  _id: Schema.Types.ObjectId,
  game: {type: Schema.Types.ObjectId, ref: 'Game'},
  categories: [{type: Schema.Types.ObjectId, ref: 'Category'}]
})