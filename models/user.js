 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
     _id: Schema.Types.ObjectId,
     name: {type:String, required: true},
     gamesPlayed: {type:Number, required: true},
     userScore: {type:Number, required: true}
 });

 const User = mongoose.model("User", userSchema);

 module.exports = User;
