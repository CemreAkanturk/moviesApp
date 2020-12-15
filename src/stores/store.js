import service from '../services/service'



const state={
movies:[],
movieDetails:{},

};

const getters={


   setNewMovies(state){
    
    var date = new Date();
    var lastWeekYear = date.getFullYear();

    var lastWeekDisplay = "01-01-" + lastWeekYear;

     return state.movies.filter(item => new Date(item.releaseDate)>=new Date(lastWeekDisplay)) 

   

   },
  
     

};

const mutations={

    setMovies(state,movies){
      
          state.movies=movies

     

    },


    setMovieDetails(state,details){

           state.movieDetails=details;
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
        }

};




export default {

state,
getters,
mutations,
actions,


}