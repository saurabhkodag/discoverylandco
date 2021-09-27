
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import headerrr from '@/components/header/headerr.vue';
// import headd from '@/components/headerr.vue';
import footerr from '@/components/footer/footer.vue';
import home3 from '@/components/home3pic/home3pic.vue' 
  import slider from '@/components/slider/slider.vue'
import welcome from '@/components/welcome/welcome.vue';
@Options({
  components: {
   
    headerrr,
    welcome,
     slider,
    home3,
    footerr,
  },
})
export default class Home extends Vue {}