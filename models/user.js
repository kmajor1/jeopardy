 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const userSchema = new Schema({
     name: {type:String, required: true},
     gamesPlayed: {type:Number, required: true},
     userScore: {type:Number, required: true}
 });

 const Users = mongoose.model("User", userSchema);

 module.exports = Users;
