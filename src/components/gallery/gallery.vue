<template>
  <div class="image-main">
    <div class="image_cmp" v-for="l in list" :key="l.name">
      <div class="img_grid">
        <img class="imgs" :src="getImgUrl(l.url)" :alt="l.caption" />
      </div>
      <div class="img_caption">
        <p>{{ l.caption }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
interface listi {
  url: string;
  caption: string;
}
export default class gallery extends Vue {
  list: listi[] = [
    {
      url: "img1.jpg",
      caption: "Outdoor Pursuits",
    },
    {
      url: "img2.jpg",
      caption: "Golf",
    },
    {
      url: "img3.jpeg",
      caption: "Lifestyle",
    },
    {
      url: "img4.jpg",
      caption: "Landscapes",
    },
    {
      url: "img5.jpg",
      caption: "Clubhouses",
    },
    {
      url: "img6.jpg",
      caption: "Wellness",
    },
  ];
  getImgUrl(pic: string): string {
    return require("../../assets/images/" + pic);
  }
}
</script>