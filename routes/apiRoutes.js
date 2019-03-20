const axios = require("axios");
const router = require("express").Router();
const category = require('../controllers/category')
const question = require('../controllers/questions')


//

router.get("/category", (req, res) => {

  var categories = []
  axios.get("http://jservice.io/api/categories?count=100")
    .then(response => {
    // loop through response and place data into a categories array 
    for (i = 0; i < 25; i++) {
      categories.push(response.data[i])
    }
    return categories
  })
  .then(response => category(response))
  .then(response => {
  res.end()
  })
})


router.get("/questions/:categoryID", (req, res) => {
  let tiles = []
  let category = req.params.categoryID

  axios.get("http://jservice.io/api/category?id=" + category)
    .then(response => {
    // questions.push(response.data.clues[0].question)
    for (var i = 0; i < 5; i++){
      let tile = {}
      tile = response.data.clues[i]
      tiles.push(tile)
      
    }
   return(tiles)
  }).then(response => question(response))
  .catch(err => res.status(422).json(err))

})

router.get("/")

module.exports = router;


