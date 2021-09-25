
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import headerr from '@/components/header/headerr.vue';
import worldgallery from '@/components/world_gallery/world_gallery.vue';
import footerr from '@/components/footer/footer.vue';
@Options({
  components: {
    headerr,
    worldgallery,
    footerr,
  },
Mount(){
        console.log('mount');
    }
})

export default class Home extends Vue {}