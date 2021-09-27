import { Options, Vue } from 'vue-class-component';
import navv from '@/components/header/headerr.vue';
import headerrr from '@/components/header_about/header_about.vue';
import mission from '@/components/header_our_mission/our_mission.vue';
import footerr from '@/components/footer/footer.vue';
@Options({
    components: {
      navv,
      headerrr,
      mission,
      footerr,
    },
  })
  export default class about extends Vue {}