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

    },
    

    async fetchMovieDetails(moviesid){
        
      return await axios.get("http://localhost:3000/Movies/"+moviesid,  {
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;;charset=Shift_JIS',
        }
      })
    },


      async fetchMovieTime(){

        return await axios.get("http://localhost:3000/movieTimes",  {
        responseType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      });



        },

        async fetchHalls(hallsid){

          return await axios.get("http://localhost:3000/Halls?name="+hallsid, {
          responseType: 'json',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        });
  
  
  
          },


          async fetchsoldTickets(movieid){

            return await axios.get("http://localhost:3000/soldTickets?movieId="+movieid, {
            responseType: 'json',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          });
        },

       

          async addTickets(){

          var  params = {
              id: 6,
              first_name: 'Fred',
              last_name: 'Blair',
              email: 'freddyb34@gmail.com'
            }
    

            return await axios.post('http://localhost:3000/soldTickets/',  params)
            .then(function (response) {
              console.log(response);
            }).catch((error) => {
              console.log(error.message);
          })
          }
    
    
    
        }
  


      

    
    
 