    <template>
    <div class="getticket">


    <div class="background" v-bind:style="{ 'background-image': 'url(' + movieDetails.posterurl + ')' }"></div>
    <div class="ticket">


            <div class="TicketData">
              <h4>Choose Ticket</h4>
        

                     <label :style="{ display: displayStyle }" class="place"><img src="../assets/img/seans.png"> Session</label>
                    <select  class="select"  required @change="changeLocation" >
                     <option value="cemre" disabled selected></option>
                     <option class="optionStyle" v-for="option in options" :key="option" :value="option">{{option}}</option>
                    </select>
             
            <label class="move"><img src="../assets/img/seans.png"> Movie Theater</label>
               <select  class="select" >
                  <option disabled selected ></option>
                  <option disabled>Salon 1</option>
                  <option disabled>Salon 2</option>
              </select >

             

              <p class="Prices">Ticket Prices</p>

              <div class="bilet"> 
                  <div class="d-flex">

                       <button class="buttons" @click="TamTicketMinus">-</button>

                       <div class="flex-column">
                           <p><label v-if="tamCount!=0">{{ tamCount}}</label> TAM</p>
                           <p v-if="tamCount!=0&&tamCount!=1">{{tambilet*tamCount}}.00 TL</p>
                           <p v-else>18.00 TL</p>

                       </div>
                           
                      <button class="buttons" @click="TamTicketPlus">+</button>
                  </div>
                   <div class="d-flex" >
                        <button class="buttons" @click="OgrTicketMinus">-</button>

                           <div class="flex-column">
                           <p><label v-if="ogrCount!=0">{{ ogrCount}}</label> OGRENCİ</p>
                           <p v-if="ogrCount!=0&&ogrCount!=1">{{ogrencibilet*ogrCount}}.00 TL</p>
                           <p v-else>14.00 TL</p>

                          </div>

                     <button class="buttons" @click="OgrTicketPlus">+</button>

                  </div>


              </div >

                 <div class="total" >
                             <h6>Total: {{total}}.00 TL</h6>
                             <button class="getTicket" @click="seat">Choose Seat <img src="../assets/img/next.png"></button>
                 </div>
                

               
           
                  

                        
              </div>

           
            <div class="image">
          
          
          <div v-if="seatControl==false" >
              

               <div class="right">
                     <img class="photo" :src="movieDetails.posterurl">

                  <div style="width:60%">
                       <h4>{{movieDetails.title}}</h4>
             
                       <p style="color:rgba(211, 211, 211, 0.815)">{{movieDetails.storyline}}</p>

                  </div>
                    

               </div>
          

          </div>

           <div v-else >

          </div>
             
              
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
           'movieDetails',
            'moviesTime'
           

       ]),

 
     options(){
        if(this.moviesTime[this.movieId]){
               return this.moviesTime[this.movieId].times;
        }
        
           return this.moviesTime
       },

       total(){

           return this.ogrCount*this.ogrencibilet+this.tamCount*this.tambilet
       }

       
       
    },
    data(){

        return{
            option:"",
            displayStyle:'block',
            ticketCount:0,
            tambilet:18,
            ogrencibilet:14,
            ogrCount:0,
            tamCount:0,
            seatControl:false

        } 
    },
    created(){
       
      this.$store.dispatch('fetchMovieDetail',this.movieId);

      this.$store.dispatch('fetchMovieTime');
      

    },
    mounted(){
        

    },
    methods: {

    changeLocation(){

        this.displayStyle="none"
    },

    OgrTicketPlus(){
        this.ogrCount++
    },
       
       OgrTicketMinus(){
           if(this.ogrCount>0)
            this.ogrCount--
       },

       TamTicketPlus(){
        this.tamCount++
    },
       
       TamTicketMinus(){
          if(this.tamCount>0)
            this.tamCount--
       },

       seat(){
            this.seatControl=true
       }
    
    
        

  }
}

</script>

    <style scoped>
     
        .background{
            background-size: 100% 100%;
            background-repeat: no-repeat;
            height: 87vh;
            filter:blur(40px) grayscale(50%) ;
        }

      
 
        .ticket{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
            height: 70%;
            margin:auto;
            position: absolute;
            top:15%;
            left:15%;
            background-color: #020d184d;
             border-radius: 10px;
        
        }

        .select {

            width: 90%;
            height: 11%;
            border-radius: 15px;
            font-size:20px;
            border:none;
            background:  url(../assets/img/down.png) #020d183d no-repeat  center ;
            background-position-x:95%;
            padding:10px;
            margin:5%;
            outline: none;
            appearance: none;            
             font-family: 'Roboto';
            color: rgba(168, 166, 166, 0.815);
            text-transform: uppercase;
        }

      

        .select:hover {
            background-color:rgb(255, 253, 253);
         
        }


        h4{

            color:rgb(248, 245, 245);
            text-transform: uppercase;
            font-family: 'Dosis';
            font-weight: bold;
            font-size:28px;
            text-align: left;
            padding:10px 10px 10px 30px;
        }

        h6{

            color:rgb(248, 245, 245);
            text-transform: uppercase;
            font-family: 'Roboto';
            font-weight: bold;
            font-size:20px;
            text-align: left;
            padding:10px 10px 10px 30px;

        }

        .TicketData{
                
                    width:30%;
                    height: 85%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

         .bilet{
                    width: 70%;
                    height: 25%;
               }

        .flex-column{
            width: 80%;
            text-align: center;
            font-size: 15px;
            margin:7%;
            color:rgba(219, 210, 210, 0.699);
            font-family: 'Roboto';
        }
        .flex-column>p{
            margin:-20px 0 20px 0;
            
        }

         .photo{

            box-shadow: 0px 2px 10px 2px rgba(63, 62, 62, 0.75);
            border-radius: 10px;
            width: 30%;
         }

         .image{
             width: 65%;
             height: 85%;
             display: flex;
             flex-direction: column;
             align-items: flex-start;
         }

         h2{
             color:White;
             text-transform: uppercase;
             font-weight: bold;
             font-size:30px;
             text-align: left;
         }

         .Prices{

             
            font-size:20px;
            color:rgba(211, 211, 211, 0.815);
            font-family: 'Roboto';
            padding:5px;
            text-transform: uppercase;

         }

         .place{

            padding: 0 7px;
            background: none;
            box-shadow: none;
            font-family: 'Roboto';
            color: rgba(211, 211, 211, 0.815);
            font-size: 20px;
            text-transform: uppercase;
            position: absolute;
            top:22%;
            left:3%;
         }

         .move{
            padding: 0 7px;
            background: none;
            box-shadow: none;
            font-family: 'Roboto';
            color: rgba(211, 211, 211, 0.815);
            font-size: 20px;
            text-transform: uppercase;
            position: absolute;
            top:38%;
            left:3%;

         }
 
        .icon{
            position: absolute;
            top:0
        }

        .optionStyle{
            font-family: 'Roboto';
            color: rgba(43, 42, 42, 0.815);
            font-size: 20px;
            text-transform: uppercase;
        }
 

        .buttons{
            width: 17%;
            height: 10%;
            border-radius: 50%;
            background-color: transparent;
            border:2px solid #020d1834;
            font-size:25px;
            color:rgba(211, 211, 211, 0.87);
            outline: none;
          

         }

         .getTicket{
             background-color:#020d183d ;
             border:none;
             width: 38%;
             font-size:15px;
             margin-right:5% ;
             font-family: 'Roboto';
             text-transform: uppercase;
             outline: none;
         }
        
       .total{

           width: 100%;
           display: flex;
           justify-content: flex-end;
           margin-top:5%;
           
       }

       .right{

           display: flex;
           flex-direction: row;
           justify-content: space-evenly;
           margin-top:10%;
           align-items: center;
       }
      
    </style>
  
