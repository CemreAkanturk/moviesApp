<template>
  <div id="app">

    <appHeader></appHeader>
    
   <router-view></router-view>
    
  </div>
</template>

<script>
import appHeader from './components/header'

export default {
  name: 'App',
  components: {
    appHeader
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;400;500;600;700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  background-color: #020d18;
  min-height: 100vh;
  height: 100%;
}
</style>
