import axios from 'axios' // this might not be needed
import { resolveAny } from 'dns';
const API = {
  Categories: Categories
}

function Categories(){
  
  return new Promise((resolve) => {
    
    axios.get('/api/category')
    .then((response) => {
      let board = []
      
      for (var i = 0; i < response.data.length; i++){
        let category = {
          id: response.data[i].id, 
          category: response.data[i].title,
          tiles: [] 
        }
        board.push(category)
      }
      
      resolve(board)
    })
    
  })
}

function Questions(category){
  // populate tiles array 
}

export default API
