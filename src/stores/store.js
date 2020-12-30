import service from '../services/service'



const state={
movies:[],
movieDetails:{},
moviesTime:[],
setHalls:{},
ticketdata:{}

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
    },


    setMovieTimes(state,moviesTimes){

      state.moviesTime=moviesTimes;

    },

    setHalls(state,hallsData){

      state.setHalls=hallsData;

    },

    soldTickets(state,TicketsData){

      state.ticketdata=TicketsData;

    },


  

    

    
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
        },

        fetchHalls(context,id){
          
          return service.fetchHalls(id).then(obj => {
              context.commit('setHalls',obj.data)
            
          })
        },


        fetchsoldTickets(context,id){

          return service.fetchsoldTickets(id).then(obj => {
              context.commit('soldTickets',obj.data)
            
          })
        },
         

        addTicket(){
          
          alert("cecece")
          return service.addTickets()
             
            
        }

        

};




export default {

state,
getters,
mutations,
actions,


}