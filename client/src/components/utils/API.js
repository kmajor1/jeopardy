import axios from 'axios' // this might not be needed

export default {
  initGame: (category, doubleJeopardy) => {
    return axios.get("/api/category");
  },

  loadBoard: (categories) => {
    // calls back-end to get questions given an array of categories
  }
}