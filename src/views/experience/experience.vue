<template>
  <headerrr />
  <welcome />
  <welcometext />
  <exclusion />

  <div class="container-2">
    <div class="main-image">
      <img
        src="https://dxaurk9yhilm4.cloudfront.net/images/533/Golf3_4d32d1f061062da257f8ac1083a047ac.jpg"
        alt=""
      />
    </div>
    <div class="background-gradient"></div>
    <div class="white-box">
      <h1>Golf</h1>
      <br />
      <p>
        We commission the world’s most renowned course architects to design
        spectacular golf experiences on challenging yet incredibly playable
        18-hole courses. Our trademark comfort stations also set new standards
        in on-course amenities.
      </p>
      <br />
      <button class="button"><span>Explore</span></button>
    </div>
  </div>

  <div class="container-3">
    <div class="main-image">
      <img
        src="https://dxaurk9yhilm4.cloudfront.net/images/144/OD_image_4d32d1f061062da257f8ac1083a047ac.jpg"
        alt=""
      />
    </div>
    <div class="background-gradient"></div>
    <div class="white-box">
      <h1>Outdoor Pursuits</h1>
      <br />
      <p>
        We commission the world’s most renowned course architects to design
        spectacular golf experiences on challenging yet incredibly playable
        18-hole courses. Our trademark comfort stations also set new standards
        in on-course amenities.
      </p>
      <br />
      <button class="button"><span>Explore</span></button>
    </div>
  </div>

  <div class="container-4">
    <div class="main-image">
      <img
        src="https://dxaurk9yhilm4.cloudfront.net/images/145/Wellness_image_4d32d1f061062da257f8ac1083a047ac.jpg"
        alt=""
      />
    </div>
    <div class="background-gradient"></div>
    <div class="white-box">
      <h1>Wellness</h1>
      <br />
      <p>
        We commission the world’s most renowned course architects to design
        spectacular golf experiences on challenging yet incredibly playable
        18-hole courses. Our trademark comfort stations also set new standards
        in on-course amenities.
      </p>
      <br />
      <button class="button"><span>Explore</span></button>
    </div>
  </div>
  <explore />
  <footerr />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import headerrr from "@/components/navbar/navbar.vue";
import footerr from "@/components/footer/footer.vue";
import welcome from "@/components/experience_welcome/experience_welcome.vue";
import welcometext from "@/components/experience_header/eheader.vue";
import exclusion from "@/components/experience_exclusion/exclusion.vue";
import golf from "@/components/experience_golf/golf.vue";
import explore from "@/components/explore_img1/explore_img1.vue";
@Options({
  components: {
    golf,
    headerrr,
    welcome,
    welcometext,
    exclusion,
    explore,
    footerr,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
@import "@/assets/scss/global";
@import "./experience.scss";
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
.svg {
  fill: white;
}
</style>