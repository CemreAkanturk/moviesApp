<template>
<div id="movieDetail">
    <div class="movieDetails">
        
       <div >
          
              <img class="poster" :src="movieDetails.posterurl">
              
              <div class="image">
                   
                 
                   <router-link  to="/" class="trailerBtn">  <img style="padding:10px" src="../assets/img/play.png"> Watch Trailer</router-link>

              </div>

       </div>
      

        <div class="Details">
 
          <p class="Head">{{movieDetails.title}}</p>

          <div class="rating">
               
              <div class="flexRow">
                  <img src="../assets/img/starRating.png">
                  <p>{{movieDetails.imdbRating}}/10</p>

              </div>
           
            <div class="flexRow">
                <p>Rate This Movie:</p>

              
                        <div  v-for="item in 10-this.Star" :key="item.id">
                            <img src="../assets/img/starRating.png">
                     </div>

          
               
               <div v-for="item in this.Star" :key="item.id">
                        <img src="../assets/img/starWhite.png">
               </div> 

            </div>
               
                
          </div>

          <div class="flexRow">
                <div class="right">

                            {{movieDetails.storyline}}

                            <h4>Salon 1</h4>

                            <div class="hallsTime">
                                 10:00

                            </div>

                           


                </div>

                <div class="left">

                    <div>
                    <h6>Release Date:</h6>
                    {{movieDetails.releaseDate}}
                    </div>

                     
                    
                    <div >
                    <h6>Actors:</h6>
                    <li v-for="item in movieDetails.actors" :key="item.id"> {{item}}</li>
                    </div>

                    <div>
                    <h6>Genres:</h6>
                     <li v-for="item in movieDetails.genres" :key="item.id"> {{item}}</li>
                    </div>

                    <div>
                    <h6>Duration:</h6>
                    {{movieDetails.duration}}
                    </div>

                    <div>
                    <h6>Average Rating:</h6>
                    {{movieDetails.averageRating}}
                    </div>
                 
                  <router-link class="getTicket " :to="'/movie/getTicket/'+movieDetails.id">Get Ticket <img src="../assets/img/next.png"></router-link>

                </div>
               

          </div>
           
        </div>

    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex'

export default {

    
    name:'movieDetails',
    components:{
    },
    computed:{

         movieId() {

            return this.$route.params.id;
        },

        Star(){

           var puan=0;

           if(this.movieDetails.imdbRating){
                 
               puan=this.movieDetails.imdbRating
               
           }

         
           return 10-parseInt(puan)

        },

      ...mapState([
           'movieDetails'
       ]),
       
    },
    data(){

        return{
            

        }
    },
    created(){
       
      this.$store.dispatch('fetchMovieDetail',this.movieId);
     


    },
    mounted(){
        
      

    },
    methods: {


  }
}

</script>


<style scoped>


        #movieDetail{

            background-image:url("../assets/img/sliderbg.jpg");
            background-size: 100% 70%;
            background-repeat: no-repeat;
             height: 87vh;
         
        }
        

        .getTicket{
            width: 70%;
            background-color: rgb(54, 114, 54);
            color:white;
            border-radius: 10px;
            padding:5px;
            margin:auto;
            font-size:14px;
        }
        .movieDetails{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 70%;
            margin:auto;
            margin-top:5%;
        }

        .Details{
            width: 65%;
            height: 95%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left:5%;
        }

        .image{
            border: 3px solid #0c1c2c;
            width: 18vw;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #07101a;
        }

        .poster{

            width:18vw;
            border-radius: 10px;

        }

        .trailerBtn{

            background-color: #dd003f;
            width: 80%;
            height: 60%;
            border-radius: 15px;
            font-family: 'Dosis', sans-serif;
            font-size: 14px;
            color: #ffffff;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 4%;
        }

        .trailerBtn:hover{
            font-size: 16px;
        }

        .Head{
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 30px;
            font-family: "Dosis";
            font-weight: bold;
            color: white;

        }

        .rating{

            width: 100%;
            display: flex;
            align-items: center;
            height: 60px;
            border-top: 1px solid #405266;
            border-bottom: 1px solid #405266;
            font-size: 18px;
            text-transform: capitalize;
            font-weight: bold;
        }

        .flexRow{

            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        .flexRow:first-child{
            width: 12% ;
            height: 100%;
            border-right: 1px solid #405266;
            margin-left:0%

        }

        .flexRow p{

            margin:3%;
            word-wrap: normal;
            
        }

         h4{

            font-size: 14px;
            text-transform: uppercase;
            font-family: Dosis;
            font-weight: bold;
            color: #fff;
            border-bottom: 1px solid #405266;
            text-align: left;
        }

        h6{

            font-size: 14px;
            font-family: "Dosis";
            font-weight: bold;
            color: #abb7c4;
            text-align: left;
        }

        .right{
            width: 75%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;


         }

        .left{

            width: 25%;
            height: 100%;
            font-size: 13px;
            color: #ffffff;
            font-family: "Dosis";
            text-align: left;
            margin-left:5%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            font-weight: bold;

        }
  

        .trailerBtn img{
            width: 32px;
            margin:0px;
        }
        img{
                    width: 25px;
                    margin-right:3%
        }

        li{

        list-style-type:none;
        }
</style>