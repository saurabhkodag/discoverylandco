<template>
<div class="component_three_text" style="background:white">
<div class="component_left">
</div>
<div class="component_center">
  <div class="component_header">
    <div class="component_text"> The Discovery Difference </div>
</div>  
</div>
<div class="button-pair">
        <button class="first-button">&#8592;</button>
          <button>&#8594;</button>
</div>
</div>
    <div class="slider">
        <div class="slider-track" v-for="l in list" :key="l.url">
        <div class="slide">
            <div class="image-holder">
                <img :src="getImgUrl(l.url)">
            </div>
            <div class="img-description">
                <span class = "img-title" v-text="l.caption"></span>
                <span class = "img-location" v-text="l.location"></span> 
            </div>
        </div>
        </div>
    </div>

</template>
<style scoped lang="scss">

@import './about_slide.scss';
</style>

<!--<script type="module" src="./slider.ts"></script>-->
<script lang="ts">
import {  Vue } from 'vue-class-component';
interface listi {
    url: string;
    caption: string;
    location:string;
    }
export default class slider extends Vue {
    
    list: listi[] = [

     {
      url: 'slider2.jpg',
      caption: "Focus on family",
      location:"Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive",
    },
    {
      url: 'slider3.jpg',
      caption: "Incomparable experiences",
      location:"World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.",
    }, 
    {
      url: 'slider4.jpg',
      caption: "Inspired by land",
      location:"Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.",
    },
    {
      url: 'slider5.jpg',
      caption: "Sustainable future",
      location:"Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.",
    },
     {
      url: 'slider6.jpg',
      caption: "Luxury bespoke homes",
      location:"Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.",
    },
{
      url: 'slider2.jpg',
      caption: "Focus on family",
      location:"Our properties have always been inspired by and created for families. We build settings that are as welcoming to everyone as they are exclusive",
    },
    {
      url: 'slider3.jpg',
      caption: "Incomparable experiences",
      location:"World-renowned golf courses, state-of-the-art fitness facilities, unique outdoor concierge programs – our communities deliver unmatched amenities and service.",
    }, 
    {
      url: 'slider4.jpg',
      caption: "Inspired by land",
      location:"Each property respectfully integrates the local architecture, culture, and cuisine to create an authentic and immersive experience.",
    },
    {
      url: 'slider5.jpg',
      caption: "Sustainable future",
      location:"Through a focus on sustainable efforts, we create programs that ensure we are stewards of the land and a source of local economic growth and stability.",
    },
     {
      url: 'slider6.jpg',
      caption: "Luxury bespoke homes",
      location:"Through our in-house services, Discovery Builders and Discovery Design, we offer turn-key homes for families that embody modern aesthetics while staying true to classic principles.",
    },
  ];
  getImgUrl(pic:string):string{
    return require("../../assets/About/"+pic);
  }
}
</script>