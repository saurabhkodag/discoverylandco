import { Options, Vue } from 'vue-class-component';
import navv from '@/components/header/headerr.vue';
import headerrr from '@/components/header_about/header_about.vue';
import mission from '@/components/header_our_mission/our_mission.vue';
import sliderr from '@/components/about_courasel/about_slide.vue';
import discovery from '@/components/about_discover_builder/about_builder.vue'
import imgmount from '@/components/about_mountain/about_mountain.vue';
import footerr from '@/components/footer/footer.vue';
// import mount from '@/assets/About/moutain.jpg';
@Options({
    components: {
      navv,
      headerrr,
      mission,
      sliderr,
      discovery,
      imgmount,
      footerr,
    },
  })
  export default class about extends Vue {}