const axios = require("axios");
const router = require("express").Router();
const category = require('../controllers/category')
const question = require('../controllers/questions')
const gameInit = require('../controllers/gameInit')


// // game init route 
// router.get('/gameInit',  async function(req,res) {
//   let gameboard = await gameInit()
//   console.log(gameboard)
//   res.send(gameboard)
  
// })

// game init route 
router.get('/gameInit',   function(req,res) {
  let gameboard = []
  // get some categories 
   gameInit.findCategories().then(function(categories) {
    // console.log(categories)
    return categories 
   })
   .then(function(categories){
     for (var i = 0; i < categories.length ; i++) {
      gameInit.getQuestionsForCategory(categories[i].category_id)
      .then(function(questions){
        // console.log(questions)
      })
     }

   })
   .then(
     res.send('done')
   )
  
  
})

router.get("/category", (req, res) => {
  console.log('category route running')

  var categories = []
  axios.get("http://jservice.io/api/categories?count=100")
    .then(response => {
    // loop through response and place data into a categories array 
    for (i = 0; i < 5; i++) {
      categories.push(response.data[i])
    }
    return categories
  })
  .then(response => {
    console.log('category route done')
    res.json(response)
  })
  
})


router.get("/questions/:categoryID", (req, res) => {
  console.log('questions route running')
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
    console.log('questions route done running')
   return(tiles)
  }).then(response => res.json(response))
  .catch(err => res.status(422).json(err))

})



router.get("/")

module.exports = router;


