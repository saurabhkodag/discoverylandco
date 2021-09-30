<template>
   
    <headerrr/>
    <welcome/>
    <welcometext/>
    <exclusion/>
    <footerr/>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import headerrr from '@/components/header/headerr.vue';
import footerr from '@/components/footer/footer.vue';
import welcome from '@/components/experience_welcome/experience_welcome.vue'
import welcometext from '@/components/experience_header/eheader.vue'
import exclusion from '@/components/experience_exclusion/exclusion.vue'
@Options({
  components: {
   
    headerrr,
    welcome,
    welcometext,
    exclusion,
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