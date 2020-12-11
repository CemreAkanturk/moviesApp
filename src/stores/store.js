import service from '../services/service'



const state={
movies:[]

};

const getters={};

const mutations={

    setMovies(state,movies){
      
          state.movies=movies

     

    }
};

const actions={

 fetchMovies(context){
   
   return service.fetchMovies().then(obj => {
        context.commit('setMovies',obj.data)
    })
 }

};


export default {

state,
getters,
mutations,
actions

}