import service from '../services/service'



const state={
movies:[],
movieDetails:{},
moviesTime:[],

};

const getters={


   setNewMovies(state){
    
    var date = new Date();
    var lastWeekYear = date.getFullYear();

    var lastWeekDisplay = "01-01-" + lastWeekYear;

     return state.movies.filter(item => new Date(item.releaseDate)>=new Date(lastWeekDisplay)) 

   

   },

   setMoviesCount(state){

     return state.movies.length;

   }
  
     

};

const mutations={

    setMovies(state,movies){
      
          state.movies=movies

     

    },


    setMovieDetails(state,details){

           state.movieDetails=details;
    },


    setMovieTimes(state,moviesTimes){

      state.moviesTime=moviesTimes;
    }
};

const actions={

        fetchMovies(context){
          
          return service.fetchMovies().then(obj => {
                context.commit('setMovies',obj.data)
            
            })
        },

        fetchMovieDetail(context,moviesid){
          
          return service.fetchMovieDetails(moviesid).then(obj => {
              context.commit('setMovieDetails',obj.data)
            
          })
        },


        fetchMovieTime(context){
          
          return service.fetchMovieTime().then(obj => {
              context.commit('setMovieTimes',obj.data)
            
          })
        }

};




export default {

state,
getters,
mutations,
actions,


}