const db = require('../models')
const axios = require('axios')

// function to populate 
function populate(){
  // call the route that popuates categories 
  axios.get('/api/category')
    .then((response) => console.log(response))
}

module.exports = {
  populate: populate
}
