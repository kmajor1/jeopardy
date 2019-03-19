const axios = require("axios");
const router = require("express").Router();

router.get("/category", (req, res) => {


  var number = Math.floor(Math.random() * 100 + 1) * 1;
  var categories = []
  var stored = axios.get("http://jservice.io/api/categories?count=100").then(response => {

    for (i = number; i < number + 5; i++) {
      categories.push(response.data[i].id)
    }
    return categories
  }).then(stored => console.log(stored))
    .catch(err => res.status(422).json(err));


});

router.get("/")

module.exports = router;


