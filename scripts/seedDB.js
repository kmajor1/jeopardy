const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB._URI ||
    "mongodb://localhost/jeopardy"
);
// Seeds for users collection
const userSeed = [
    {
        name:"Arjun",
        gamesPlayed:1,
        userScore:0
    },
    {
        name:"Kevin",
        gamesPlayed:1,
        userScore:0
    },
    {
        name:"John",
        gamesPlayed:1,
        userScore:0
    },
    {
        name:"Ziyad",
        gamesPlayed:1,
        userScore:0
    }
];
// Seeds for Game collection
const gameSeed = [
  {
      gameID:1,
      players:[
        {
          playerOne:"Arjun",
          score:0,
        },
        {
            playerTwo:"John",
            score:0
        },
        {
            playerThree:"Ziyad",
            score:0
        },
        {
            playerFour:"Kevin",
            score:0
        }]
  }
];
db.Game
    .remove({})
    .then(() =>db.Game.collection.insertMany(gameSeed))
    .then(data =>{
        console.log(data.result.n + "records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Users
    .remove({})
    .then(() =>db.Users,collection.insertMany(userSeed))
    .then(data =>{
        console.log(data.result.n +"records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });