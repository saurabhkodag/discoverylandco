<template>

    <!-- <p v-for="l in list" :key="l.name">{{l.name}}</p> -->
    <div class="image-main">
      <div class="image_cmp">
        <div class="img_grid">
          <img class="imgs" src="../assets/images/img1.jpg" alt="Outdoor Pursuits">
        </div>
        <div class="img_caption">
          <p> Outdoor Pursuits</p>
        </div>
      </div>
      <div class="image_cmp">
        <div class="img_grid">
          <img class="imgs" src="../assets/images/img2.jpg" alt="Outdoor Pursuits">
        </div>
        <div class="img_caption">
          <p> Golf</p>
        </div>
      </div>
      <div class="image_cmp">
        <div class="img_grid">
          <img class="imgs" src="../assets/images/img3.jpeg" alt="Outdoor Pursuits">
        </div>
        <div class="img_caption">
          <p>Lifestyle</p>
        </div>
      </div>
      <div class="image_cmp">
        <div class="img_grid">
          <img class="imgs" src="../assets/images/img4.jpg" alt="Outdoor Pursuits">
        </div>
        <div class="img_caption">
          <p> Landscapes</p>
        </div>
      </div>
      <div class="image_cmp">
        <div class="img_grid">
          <img class="imgs" src="../assets/images/img5.jpg" alt="Outdoor Pursuits">
        </div>
        <div class="img_caption">
          <p> Clubhouses</p>
        </div>
      </div>
      <div class="image_cmp">
        <div class="img_grid">
          <img class="imgs" src="../assets/images/img6.jpg" alt="Outdoor Pursuits">
        </div>
        <div class="img_caption">
          <p> Wellness</p>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import {  Vue } from 'vue-class-component';
// @Options({
//   props: {
//     msg: String
//   }
// })
interface listi {
    name: string;
    age: number;
    }
export default class gallery extends Vue {
    
    list: listi[] = [
    {
      name: '../assets/images/img1.jpg',
      age: 26,
    },
    {
      name: '@/assets/images/img1.jpg',
      age: 30,
    }
  ]
}
</script>