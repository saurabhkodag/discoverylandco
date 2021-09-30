<template>
<div class="component_three_text" style="background:white">
<div class="component_left">
</div>
<div class="component_center">
  <div class="component_header">
    <div class="component_text"> Explore </div>
    <div class="component_text"> Our scroll </div>
</div>  
</div>
<!-- <div class="button-pair">
                    <button class="first-button">&#8592;</button>
                    <button>&#8594;</button>
</div> -->
</div>
<div class="slider">
        <div class="slider-track"  v-for="l in list" :key="l.url">
        <div class="slide">
            <div class="image-holder">
                <img :src="getImgUrl(l.url)" >
            </div>
            <div class="img-description">
                <span class = "img-title" v-text="l.caption"></span>
                <span class = "img-location" v-text="l.location"></span> 
            </div>
        </div>
        </div>
    </div>
<!-- <div class="slider">
	<div class="slide-track">
		<div class="slide" v-for="l in list" :key="l.url">
			<img :src="getImgUrl(l.url)"  alt="" />
			<div class="slide_text">
				{{l.caption}}
				<p class="textp">{{ l.location }} </p> 
			</div>
		</div>
		</div>
		</div> -->
</template>
<style scoped lang="scss">

@import './slider.scss';
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
      url: 'scroll1.jpg',
      caption: "North Shore Preserve",
      location:"Kaua'i, Hawaii",
    },
     {
      url: 'scroll2.jpg',
      caption: "James Island",
      location:"Southern Gulf Islands, British Columbia, Canada",
    },
    {
      url: 'scroll3.jpg',
      caption: "CostaTerra",
      location:"Comporta, Portugal",
    }, 
    {
      url: 'scroll4.jpg',
      caption: "Barbuda Ocean Club",
      location:"Barbuda, West Indies",
    },
    {
      url: 'scroll5.jpg',
      caption: "Driftwood",
      location:"Austin, Texas",
    },
     {
      url: 'scroll6.jpeg',
      caption: "Troubadour",
      location:"Nashville, Tennessee",
    },
    {
      url: 'scroll7.jpg',
      caption: "Playa Grande",
      location:"Rio San Juan, Dominican Republic",
    }, 
    {
      url: 'scroll8.jpg',
      caption: "Chileno Bay",
      location:"Cabo San Lucas, Mexico",
    },
{
      url: 'scroll9.jpg',
      caption: "The Summit",
      location:"Las Vegas, Nevada",
    },
     {
      url: 'scroll10.jpg',
      caption: "Dune Deck",
      location:"Westhampton Beach, NY",
    },
    {
      url: 'scroll11.jpg',
      caption: "Silo Ridge",
      location:"Amenia, New York",
    }, 
    {
      url: 'scroll12.jpg',
      caption: "Mākena",
      location:"Maui, Hawaii",
     }
  ];
  getImgUrl(pic:string):string{
    return require("../../assets/home/"+pic);
  }
}
</script>