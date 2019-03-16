const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    _id: Schema.Types.ObjectId,
    board: {type: Schema.Types.ObjectId, ref: 'Board'},
    players:[{type: Schema.Types.ObjectId, ref: 'User'}]
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;