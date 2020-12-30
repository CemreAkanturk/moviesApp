<template>
<div class="seatvue">  

     <div class="ticketSeat">
            <div  class="satir" v-for="Code in Object.keys(setHalls[0].seating)" :key="Code">
 
              <p>{{Code}}</p>
                <button  :class="{'errorClass': !seat, 'seat': seat, 'selected':isSeatSelected(Code+seat) , 'butonSelect':contains(selectList, Code+seat)}" v-for="seat in setHalls[0].seating[Code]" :key="seat" :disabled='!seat||isSeatSelected(Code+seat)' @click="Select(Code+seat)">
                      
                       {{seat}}
                      
                </button>
            </div>
    
      </div>
{{selectList}}
</div>
  
  
</template>

<script>

import {mapState} from 'vuex'


        export default {
            
        name: "Seat",
        props:{
            
            seat:Object
        },
        computed:{
        ...mapState([
                'setHalls',
                'ticketdata'

            ]),
               


        },
        data(){

                return{

                    selectControl:false,
                    selectList: [],
                    
                } 
            },
        created(){
       
        this.$store.dispatch('fetchHalls',this.seat.hall.toUpperCase());    
        this.$store.dispatch('fetchsoldTickets',this.seat.movieid);   
         this.$store.dispatch('addTicket'); 
        

       

        
     

    },
    methods:{
          
            isSeatSelected(value){
            
               
              return this.ticketdata[0][this.seat.Session].indexOf(value) > -1

            },

            Select(value){  	
                
                if(this.selectList.indexOf(value) == -1){
                        this.selectList.push(value);
                    }
                    else
                    {
                        this.selectList.splice(this.selectList.indexOf(value), 1);
                    }

                   
                   
            },

            contains: function(arr, item)
                {
                return arr.indexOf(item) != -1;
                },
   
    }
  
        }
</script>

<style scope>

::selection {
    background-color:  rgb(236, 90, 26) ;
}



.seatvue{

    width: 100%;
    height: 100%;
   
}

.butonSelect{
    background-color: chartreuse !important; 
}


.ticketSeat{
    width:65%;
    display:flex;
    flex-direction: column;
    margin:10%;
    font-size:12px
    
 
}

.satir{
    width: 100%;
    margin:1%;
    display: flex;
    justify-content: space-between;

}

.satir>p{
    margin:0;
    width: 5%;
    font-size:12px;
    margin-right:2%;
    font-weight: bold;
    color:rgb(194, 189, 189);
    margin-top:5px;
    
}

.errorClass{
border-radius: 7px;
width: 7%;
margin-right:1%;
background-color: rgba(39, 37, 37, 0.308) !important;
border:none

}


.seat{
width: 7%;
margin-right:1%;
border:2px solid rgb(235, 232, 232);
background-color: transparent;
color:rgb(180, 179, 180);
border-radius: 7px;
outline: none;

}

.selected{
 border-radius: 7px;
width: 7%;
margin-right:1%;
color:rgb(250, 250, 250);
background-color: rgb(211, 14, 14) !important;
}

</style>