import { Options, Vue } from 'vue-class-component';
import headerr from '@/components/navbar/navbar.vue';
import gallery from '@/components/gallery/gallery.vue';
import footerr from '@/components/footer/footer.vue';
@Options({
  components: {
    headerr,
    gallery,
    footerr,
  },
})
export default class Home extends Vue {}