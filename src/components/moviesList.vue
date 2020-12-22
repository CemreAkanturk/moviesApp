<template>
    <div>
        
          <div class="Search">
                     <p class="Baslik">IN GENERES</p>
                   
                    <input class="SearchInput" v-model.trim="searchVal" placeholder="Type to search" v-on:keyup="searchData">
                     <img class="icon" src="../assets/img/search.png">
                    

             </div>

          <div class="movies">
                      
                            <div class="movie" v-for="item in  searchData.slice(Slice-10,Slice)" :key="item.id">
                                                        <img class="movieposter" :src="item.posterurl" >
                                                        <div class="details">
                                                                <div class="row">
                                                                    <p class="genres" v-for="item in item.genres" :key="item.id"> {{item}}</p>
                                                                </div>
                                                                <p class="Head">{{item.title}}</p> 
                                                                <p class="">{{item.storyline}}</p> 
                                                                
                                                                
                                                                <div class="Time">
                                                                        <p style="margin:1%"><img src="../assets/img/time.png"> VIEWING TIMES</p>
                                                                        <div v-if="moviesTime[item.id]">
                                                                            <p class="times" v-for="time in moviesTime[item.id].times" :key="time"> {{time}}</p>
                                                                        </div>
                                                                        <div v-else>
                                                                            <p style="margin-top:8%">There is no session for this movie. </p>
                                                                        </div>
                                                                    
                                                                        <router-link class="getTicket " :to="'/movie/getTicket/'+item.id">Get Ticket <img src="../assets/img/next.png"></router-link>
                                                                </div>
                                                                
                                                                
                                                        </div>

                                                        

                                                </div>

                       
                        <div v-if="searchData.length==0" >
                             
                              <p>No movie found with your search.</p>
                            
                        </div>
                    
 
                  
                <paginate
                    :page-count="toplamPage"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="clickCallback"
                    :prev-text="'<<'"
                    :next-text="'>>'"
                    :prev-class="'Prev'"
                    :next-class="'Next'"
                    :container-class="'pagination'"
                    :page-class="'item'">
                </paginate>   

          </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters} from 'vuex';
import paginate from 'vuejs-paginate' 
export default {
     components: { 
         
         paginate,
         
     },
    data(){

        return {
            
            searchVal:"",
            PageCount:0,
            pageNumber:1,
            
        }
    },
    
    created(){
        this.$store.dispatch("fetchMovies").then(()=>{

            this.isLoading=false; 
            
        });

       this.$store.dispatch('fetchMovieTime');

     


     
    },
    computed:{

       ...mapState([
           
            'movies',
            'moviesTime'
       ]),

        ...mapGetters([
           'setMoviesCount',
       ]),

       toplamPage(){

           return parseInt(this.searchData.length/10)+1
       },

       Slice(){
 
              return this.pageNumber*10
       },


       searchData() {
 
           if(this.searchVal === '') {
               return this.movies
               }
            return this.movies.filter(movie => {
                return movie.title.toLowerCase().includes(this.searchVal.toLowerCase())
            }) 
       
        }
    },
   methods: {
    clickCallback: function(pageNum) {
      this.pageNumber=pageNum
    },    
  
    
   

    
  },


  
  
}
</script>

<style >

 
 .SearchInput{

   
    width: 60%;
    height: 45px;
    border-radius: 15px;
    border:1px solid #405266;
    outline: none;
    background-color:#020d18;
    color:white;
    font-size:20px;
    padding:15px;
    font-family: "Dosis";
    font-weight: 500;


 }

 .SearchInput:focus{

     border:1px solid #dcf836;
 }
 

.Time{

     width: 100%;
     display: flex;
     align-items: center;
     font-size:10px;
     font-weight: bold;


}

 .icon {
   padding: 15px;
   color: #dcf836;
   position: absolute;
   right:20%
}

.movies{

    width: 60%;
    height: 100%;
    margin:auto

}

.times{
    
    background-color: rgba(73, 71, 71, 0.144);
    font-size: 14px;
    display: inline-block;
    margin: 5px;
    padding: 7px 10px;
    letter-spacing: 0; 
    color: #717171;
    border-radius: 5px;
    border:1px solid #dde8f865;
    font-weight: 500;

}

.Search{
    width: 60%;
    display:flex;
    margin: auto;
    justify-content: space-between;
    border-bottom:1px solid #405266;
    
}

.Baslik{
    font-size: 27
    
    px;
    color: #ffffff;
    line-height: 36px;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    margin-top:1%;
    
}

.item {
    
   padding:0px 20px 0px 20px;
   color:rgb(160, 157, 157)
   
}



.pagination{

   float:right;
   margin-bottom:5%;
    margin-top:3%
}

a{
    outline: none;
}

.active{
    color: #dcf836
}
  
.Next a ,.Prev a{
       
      width: 50px !important;
      background-image: url("../assets/img/play.png");
      background-size: center;
      background-repeat: no-repeat;
      color:transparent;
      outline: none;
  }

  .Prev {
    
    transform: scaleX(-1);
    
  }

  .Next a:hover,.Prev a:hover{
      color:transparent
  }

 .movie{
     width: 100%;
     height: 20%;
     border-bottom:1px solid #405266;
     display: flex;
     align-items: center;
 }

 .movieposter{
     width: 13%;
     margin:3%;
     border-radius: 10px;
     box-shadow: 0px 1px 5px  rgba(0, 0, 0, 0.23), 0 1px 10px rgba(0, 0, 0, 0.16);
     
 }

 .details{
     width: 80%;
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: flex-start;
     /* border:1px solid red */
 }

 .genres{
 
       margin:5%;
       font-family: 'Dosis';
       font-weight: 500;
       text-transform: uppercase;
       font-size:14px;
        letter-spacing: 2px;
        color:#dbf836c7;
 }

.row{
    flex-wrap: nowrap;
}
  .Head{
            font-size: 22px;
            margin-bottom: 30px;
            font-family: "Dosis";
            font-weight: 500;
            color: white;
            text-align: left;

        }

        .getTicket{
            width: 15%;
            background-color: rgb(54, 114, 54);
            color:white;
            border-radius: 10px;
            padding:5px;
            margin-left:auto;
            font-size:14px;
        }
</style>