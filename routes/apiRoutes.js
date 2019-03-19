const axios = require("axios");
const router = require("express").Router();
const category = require('../controllers/category')

router.get("/category", (req, res) => {


  var number = Math.floor(Math.random() * 100 + 1) * 1;
  var categories = []
  axios.get("http://jservice.io/api/categories?count=100").then(response => {

    for (i = number; i < number + 5; i++) {
      categories.push(response.data[i].id)
    }
    return categories
  }).then(quesions = (categories) => {


    for (i = 0; i < categories.length; i++) {
      axios.get("http://jservice.io/api/category?id=" + categories[i]).then(response => {
        console.log(response.data.clues[0].question + " question 1")
        console.log(response.data.clues[0].answer)
        console.log("---------------------------------------------")
        
        console.log(response.data.clues[1].question + " question 2")
        console.log(response.data.clues[1].answer)
        console.log("---------------------------------------------")

        console.log(response.data.clues[2].question + " question 3")
        console.log(response.data.clues[2].answer)
        console.log("---------------------------------------------")

        console.log(response.data.clues[3].question + " question 4")
        console.log(response.data.clues[3].answer)
        console.log("---------------------------------------------")

        console.log(response.data.clues[4].question + " question 5")
        console.log(response.data.clues[4].answer)
      })
    }
  })
    // .then(response => res.end()) // instead of a console log here, pass response to a controller
    .catch(err => res.status(422).json(err))


});


module.exports = router;


