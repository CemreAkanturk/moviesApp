import axios from 'axios'

 export default{


      async fetchMovies(){
        
      return await axios.get("http://localhost:3000/Movies",  {
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });

    }


    
 }