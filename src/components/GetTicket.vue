    <template>
    <div class="getticket">


    <div class="background" v-bind:style="{ 'background-image': 'url(' + movieDetails.posterurl + ')' }"></div>
    <div class="ticket">

            <div>
          
              <img class="photo" :src="movieDetails.posterurl">
              
           

           </div>


          <div class="TicketData">
                        
          </div>

    </div>

    </div>
        
    </template>




    
<script>
import {mapState} from 'vuex'

export default {

    
    components:{
    },
    computed:{

         movieId() {

            return this.$route.params.id;
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
     
        .background{
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 87vh;
            filter:blur(90px) grayscale(50%) ;
        }

        .ticket{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 70%;
            margin:auto;
            margin-top:5%;
            position: absolute;
            top:15%;
        
        }


         .photo{

            box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.75);
            border-radius: 10px;
            min-width: 18vw;
         }

         
         .trailerBtn{
            background-color: #0c1c2c;
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
      
       .image{
            border: 3px solid #0c1c2c;
            width: 18vw;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #0f1c277c;
        }

        .TicketData{
        
            background-color: brown;
            
        }

        
      
    </style>
  
