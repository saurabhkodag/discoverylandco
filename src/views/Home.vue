<template>
    
    <headerr/>
    <gallery/>
    <footerr/>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import headerr from '@/components/headerr.vue';
import gallery from '@/components/gallery.vue';
import footerr from '@/components/footer.vue';
@Options({
  components: {
    headerr,
    gallery,
    footerr,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/global';
// .back_image{
// width:10px;
// height: 10px;
// color: red;
// }
</style>
