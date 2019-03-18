import axios from 'axios' // this might not be needed

export default {
  initGame: (category, doubleJeopardy) => {
    console.log("initGame has been hit")
    axios.get("/api/category");
  },

  loadBoard: (categories) => {
    // calls back-end to get questions given an array of categories
  }
}