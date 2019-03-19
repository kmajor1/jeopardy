const axios = require("axios");
const router = require("express").Router();

router.get("/category", (req, res) => {


  var number = Math.floor(Math.random() * 100 + 1) * 1;
  var categories = []
  var stored = axios.get("http://jservice.io/api/categories?count=100").then(response => {

    for (i = number; i < number + 5; i++) {
      categories.push(response.data[i])
    }
    return categories
  }).then(stored => console.log(stored)) // instead of a console log here, pass response to a controller
    .catch(err => res.status(422).json(err));


});

router.get("/")

module.exports = router;


let promiseResponse;
let fourPackProducts = axios.get('URL').then(response => {
  promiseResponse = response.data;
  console.log(promiseResponse);
  return promiseResponse;
})