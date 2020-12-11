<template>
    <div class="home">
       <Loader v-if="isLoading"></Loader>
    </div>
</template>


<script>

import { mapState } from 'vuex';
import Loader from './loader'

export default {
    
    name:'HomeComp',
    components:{
        Loader
    },
    computed:{

       ...mapState([
           'movies'
       ])

    },
    data(){

        return{

            isLoading:true,

        }
    },
    created(){
        this.$store.dispatch("fetchMovies").then(()=>{

            this.isLoading=false;
        });
    }
}
</script>


<style scoped>


.home{
    height: 90vh;
    background-color: #020d18 ;
}

</style>

