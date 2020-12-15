<template>
    <div class="home">
       <Loader v-if="isLoading"></Loader>

              
            <div class="slider">
       
        <div class="container">
             <p class="Baslik">Bu yıl gosterime girenler</p>

              <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
 
                 <div class="carousel-inner" role="listbox">

              <div class="carousel-item active">

          <div class="row">
            <div class="col-md-3"  v-for="movie in setNewMovies.slice(0,4)" :key="movie.posterurl" >
              <div  class="card mb-2">
                  <div class="cardImg"  v-bind:style="{ 'background-image': 'url(' + movie.posterurl + ')' }"  >

                         <div class="Info">
                         

                           <div class="row">
                            <p class="movieGenre" style="background-color:#dd003f">{{movie.genres[0]}}</p>
                            <p class="movieGenre" style="background-color:#ec5a1a">{{movie.genres[1]}}</p>
                            <p v-if="movie.genres[2]" class="movieGenre" style="background-color:#dd003f">{{movie.genres[2]}}</p>
                           </div>

                             <p class="movieName">{{movie.title}}</p>

                                 
                              <div class="row">
                                  <p class="movieName"><img class="icon" src="../assets/img/starRating.png">{{movie.imdbRating}}/10</p>
                                  <router-link class="route" :to="'/movie/'+movie.id">Read More ></router-link>
                                  
                              </div> 

                           
                         </div>
                         
                  </div>
              
                
              </div>
            </div>
              
          </div>

        </div>
        <div class="carousel-item">

             <div class="row">
          
                 <div class="col-md-3"  v-for="movie in setNewMovies.slice(4,8)" :key="movie.posterurl" >
              <div  class="card mb-2">
                <div class="cardImg"  v-bind:style="{ 'background-image': 'url(' + movie.posterurl + ')' }"  >

                       <div class="Info">
                         

                           <div class="row">
                            <p class="movieGenre" style="background-color:#dd003f">{{movie.genres[0]}}</p>
                            <p v-if="movie.genres[1]" class="movieGenre" style="background-color:#ec5a1a">{{movie.genres[1]}}</p>
                            <p v-if="movie.genres[2]" class="movieGenre" style="background-color:#dd003f">{{movie.genres[2]}}</p>
                           </div>

                             <p class="movieName">{{movie.title}}</p>

                              
                              <div class="row">
                                  <p class="movieName"><img class="icon" src="../assets/img/starRating.png">{{movie.imdbRating}}/10</p>
                                  <router-link class="route" :to="'/movie/'+movie.id">Read More ></router-link>
                                  
                              </div> 

                           
                         </div>

                  </div>
                
              </div>
            </div>

            </div>
          </div>

        </div>
      
      </div>

      <ol class="carousel-indicators">
        <li data-target="#multi-item-example" data-slide-to="0" @click="active" :class="{ active: isActive }"></li>
        <li data-target="#multi-item-example" data-slide-to="1" @click="active" :class="{ active: !isActive }"></li>
      </ol>

    </div>

  </div>


            </div>

     
          
</template>


<script>

import { mapState } from 'vuex';
import { mapGetters} from 'vuex';
import Loader from './loader'

export default {
    
    name:'HomeComp',
    components:{
        Loader
    },
    computed:{

       ...mapState([
           'movies',
            'NewMovies'
       ]),

        ...mapGetters([
           'setNewMovies',
       ]),

      

    },
    data(){

        return{

            isLoading:true,
            isActive:true,

        }
    },
    created(){
        this.$store.dispatch("fetchMovies").then(()=>{

            this.isLoading=false; 
            
        });

      

    },
    mounted(){


    },
    methods: {
    active() {

       this.isActive = !this.isActive;

      
    }
  }
}
</script>


<style scoped>


.home{
    height: 100%;
    background-color: #020d18 ;
}

.card{
    background-color: transparent !important;
}

.carousel-indicators{
    position: relative;
    left: 75%;
    width: 100px;
}
.carousel-indicators .active{
        background-color:#dcf836 !important;
}

.cardImg{
    
    border-radius: 7px;
    height: 370px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
   

}

.movieGenre{

    font-size:11px;
    text-align: left;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    color:white;
    margin-left:8%;
    text-transform: uppercase;
    padding: 5px;
    border-radius: 5px;
    margin-top:5%;
    
}

.movieName{

    font-size:20px;
    text-align: left;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    color:white;
    margin-left:10%;
    text-transform: uppercase;
   

}

.route{

    text-transform: none;
    margin-left:15%;
    margin-top:1%

}

    .Info{

        background-color: rgba(0, 0, 0, 0.829);
        width: 100%;
        display: flex;
        flex-direction: column;
        transform: translateY(110%);
        transition: .2s ease-in;
       

    }

    .cardImg:hover .Info{
       
       transform: translateY(0%);
    }


    .icon{

         margin:0px 5px 5px 5px ;
    }
.container{
    background-color: rgba(0, 0, 0, 0.281);
     border-radius: 7px;
     height: 75%;
     margin-top:2%
}

.slider{

    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../assets/img/sliderbg.jpg");
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
}

.Baslik{
    font-size: 24px;
    color: #ffffff;
    line-height: 36px;
    text-align: left;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-top:1%;
    
}

img{
              width: 16px;
  }

@keyframes slide {
    0%{
        transform: translateY(110%);
    }

    100%{
        transform: translateY(0%);
    }
}

</style>

