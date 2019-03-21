import axios from 'axios' // this might not be needed
import { resolveAny } from 'dns';
const API = {
  Categories: Categories,
  Questions: Questions
}

function Categories(){
  
  return new Promise((resolve) => {
    
    axios.get('/api/category')
    .then((response) => {
      let board = []
      
      for (var i = 0; i < response.data.length; i++){
        let category = {
          id: response.data[i].id, 
          Category: response.data[i].title,
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
  // log the input to function
  return new Promise((resolve) => {
    
      axios.get('/api/questions/'+category)
        .then(function(response){
          // return the questions for that 
          console.log(response.data)
          resolve(response.data)
        })
        
      }
  )}

export default API
