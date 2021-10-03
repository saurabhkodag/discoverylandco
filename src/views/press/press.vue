<template>
<headerrr/>
<welcome/>
          <div class="container-2" >
        <div class="main-image" >
          <img src="https://dxaurk9yhilm4.cloudfront.net/images/8790/DJI_0265_RET_2_210405_191033_8cfe90628771654de81065d52a5bfbcf.jpg" alt="">
        </div>
        <div class="background-gradient">
        </div>
        <div class="white-box" >
          <h1>Discovery’s newest property in Kaua’i North Shore Preserve</h1><br>
          <p>  Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.
                    </p><br>
          <button class="button"><span>Explore</span></button>
        </div>
      </div>
<footerr/>
</template>

<script lang="ts">
 import { Options, Vue } from 'vue-class-component';
import headerrr from '@/components/navbar/navbar.vue'
import footerr from '@/components/footer/footer.vue'
import welcome from '@/components/press_welcome/experience_welcome.vue'

@Options({
  components: {
      
    headerrr,
    welcome,
   
    footerr,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
   @import '@/assets/scss/global';
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