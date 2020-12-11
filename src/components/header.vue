<template>
  <div class="appheader"> 

                <div class="headerLogo">

                           <div style="display:flex;align-items:center">
                           <img class="logoImg" src="../assets/img/film.png">
                           <p class="LogoTxt">Movies </p>

                           <div class="Menu">

                                 <router-link to="/" class="MenuLink"> Home </router-link>
                                 <router-link to="/" class="MenuLink"> Movies </router-link>
                                 <router-link to="/" class="MenuLink"> Hall </router-link>
                                 <router-link to="/" class="MenuLink"> News </router-link>



                           </div>

                           </div>

                       
                       
                        <div>

                                <router-link to="/" class="MenuLink"> My Account </router-link>
                                <router-link to="/" class="LoginBtn"> Log ın </router-link>


                        </div>
                          

                </div>
 </div>
        

</template>




<style  scoped>



.appheader{

    width:100%;
    height:10vh;
    background-color:#020d18 ;
    color:white;
    display: flex;
    justify-content: center;
}


.headerLogo{
        width: 60%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items:center ;


}

.logoImg{
    width: 4rem;
    height: 4rem;
}


.LogoTxt{

   font-size :1.5rem;
   text-transform: uppercase;
   font-weight: 500;
   margin-left:1.2rem;
   margin-top:1rem;
   font-family: 'Raleway', sans-serif;
   letter-spacing: 1px;
 

}

.Menu{

   
     width:15vw;
     display: flex;
     margin-left:3rem;
     justify-content: space-around;
    

}

.MenuLink{
        
          font-size:0.9rem;
          font-weight: bold;
          color:#abb7c4;
          font-family: 'Dosis', sans-serif;
          text-decoration: none;
          text-transform: uppercase;

}
.MenuLink:hover{
        
          color:#dcf836;

}
.MenuLink:active{
        
          color:#dcf836;

}

.LoginBtn{

       padding: 10px 15px;
       background-color: #dd003f;
       color: #ffffff;
       -webkit-border-radius: 20px;
       -moz-border-radius: 20px;
       border-radius: 20px;
       text-transform: uppercase;
       font-size: 14px;
       font-weight: 600;
       text-decoration: none;
       margin-left:1rem;
       font-family: 'Dosis', sans-serif;

}
</style>