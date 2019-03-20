const db = require('../models')

const gameInit =  function () {
  let gameboard = []
  return new Promise(resolve => {  db.Category.countDocuments().exec(function (err, count) {
      // Get a random entry
      var random = Math.floor(Math.random() * count)

      db.Category.findOne().skip(random).exec(
        function (err, result) {
          // push in object to gameboard 
          gameboard.push(result)
          resolve(result)
        })
    })
  })
    
}


module.exports = gameInit