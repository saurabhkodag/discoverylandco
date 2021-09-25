<template>
   
    <headerrr/>
    <welcome/>
    
    <home3/>
    <footerr/>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import headerrr from '@/components/header/headerr.vue';
// import headd from '@/components/headerr.vue';
import footerr from '@/components/footer/footer.vue';
import home3 from '@/components/home3pic/home3pic.vue' 
// import slider from '@/components/slider/slider.vue'
import welcome from '@/components/welcome/welcome.vue';
@Options({
  components: {
   
    headerrr,
    welcome,
   
    home3,
    footerr,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
   @import '@/assets/scss/global';
     .nav {
       display: flex;
    color: white;
    margin: 0;
      display: flex;
    padding: 30px;
    height: 400px;
    background-position: center;
    position: absolute;
    z-index: 1;
    // a {
    //   font-weight: bold;
    //   color: #ffffff;
    // }
  }
//   @media screen and (max-width: 720px) {
//   .pic{
//     flex-direction: column;
//     width:100%;
//     position: absolute;
//   }
// }
  .video-container {
  display: flex;
  justify-content: center;
    height: 500px;
    width: 100%;
    position: relative;
}
.video-container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}
.svg{
  fill:white;
}
</style>