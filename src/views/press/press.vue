<template>
<headerrr/>
<welcome/>
  <news/>
<PressNews/>
<footerr/>
</template>

<script lang="ts">
 import { Options, Vue } from 'vue-class-component';
import headerrr from '@/components/navbar/navbar.vue'
import footerr from '@/components/footer/footer.vue'
import welcome from '@/components/press_welcome/experience_welcome.vue'
import news from '@/components/latest_news/news.vue'
import PressNews from '@/components/press_news/pressNews.vue'
@Options({
  components: {
      
    headerrr,
    welcome,
    news,
    PressNews,
    footerr,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  //  @import '@/assets/scss/global';
   @import '../experience/experience.scss';
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
    
  }
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