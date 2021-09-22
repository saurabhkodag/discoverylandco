<template>
  <div class="nav"> 
    <!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 433.6 97.1" style="enable-background:new 0 0 433.6 97.1;" xml:space="preserve"> -->
    <div class="left_nav">
      <h1>Gallery</h1>
    </div>
    <div class="rigth_nav">
    <router-link to="/about">About DLC</router-link>  
    <router-link to="/ourWorlds">Our Worlds</router-link> 
    <router-link to="/Experiences">Experiences</router-link> 
    <router-link to="/">Gallery</router-link> 
    <router-link to="/Press">Press</router-link> 
  </div>
  </div>
  <router-view/>
</template>

<style lang="scss">

@import '@/assets/scss/global';
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
