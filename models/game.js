const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gameID: {type:Number, required:true},
    players:[{
        playerOne:{type:String, required:true},
        score:{type:Number, required:true}
    },
    {
        playerTwo:{type:String, required:true},
        score:{type:Number, required:true}
    },
    {
        playerThree:{type:String, required:false},
        score:{type:Number,required:false}
    },
    {
        playerFour:{type:String, required:false},
        score:{type:Number,required:false}
    }]
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;