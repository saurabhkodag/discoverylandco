<template>
    <div class="main">
    <div class="main_left">
        <img src="getImg(imgs)">
    </div>
    <div class="main_rigth">
        <!-- <h1>Golf</h1> -->
        <h1 v-text="headd"></h1>
        <p v-text="para"> </p> 
    </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    imgs:String,
    headd: String,
    para:String,
  }
})
export default class HelloWorld extends Vue {
getImg(pic: string): string {
  return require("@/assets/home" + pic);
}
}
</script>

<style scoped lang="scss">

@import './golf.scss';
</style>