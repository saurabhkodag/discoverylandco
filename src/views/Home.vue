<template>
   
    <headerr/>
    
    <footerr/>
  
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import headerr from '@/components/videoheader.vue';
// import headd from '@/components/headerr.vue';
import footerr from '@/components/footer.vue';
@Options({
  components: {
   
    headerr,
   
    footerr,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/global';
  .nav {
  
    margin: 0;
      display: flex;
    padding: 30px;
    height: 400px;
    background-image: url('https://dxaurk9yhilm4.cloudfront.net/images/7383/jael-rodriguez-AkF5NT0sZy8-unsplash-1-1_210301_200939_35d31212c7a2d4dccdff99afa3f88af5.jpg');
    background-position: center;
    a {
      font-weight: bold;
      color: #ffffff;
  
      // &.router-link-exact-active {
      //   color: #42b983;
      // }
    }
  }

// .back_image{
// width:10px;
// height: 10px;
// color: red;
// }

</style>
