const axios = require("axios");
const router = require("express").Router();
const category = require('../controllers/category')

//

router.get("/category", (req, res) => {
  var number = Math.floor(Math.random() * 100 + 1) * 1;
  var categories = []
  axios.get("http://jservice.io/api/categories?count=100")
    .then(response => {
    // loop through response and place data into a categories array 
    for (i = number; i < number + 5; i++) {
      categories.push(response.data[i].id)
    }
    return categories
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
      // console.log(response.data.clues[i].question + " question 1")
      // console.log(response.data.clues[i].answer)
      // console.log("---------------------------------------------")
    }
    res.json(tiles)
  })
  .catch(err => res.status(422).json(err))

})

router.get("/")

module.exports = router;


