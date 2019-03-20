const db = require('../models')

const gameInit = function(){
  // get 5 random categories from db 
 Category.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)
  
    // Again query all users but only fetch one offset by our random #
    Category.findOne().skip(random).exec(
      function (err, result) {
        // Tada! random user
        console.log(result) 
      })
  })

}