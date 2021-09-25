<template>
      <div class="world-main" >
      <div class="world_cmp" v-for="l in list" :key="l.name">
        <div class="world_grid">
          <img class="world_imgs" :src="getImgUrl(l.url)" :alt="l.caption">
        </div>
        <div class="world_img_caption">
          <p> {{l.caption}}</p>
          <p> {{l.location}}</p>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import {  Vue } from 'vue-class-component';
interface listi {
    url: string;
    caption: string;
    location:string;
    }
export default class gallery extends Vue {
    
    list: listi[] = [
    {
      url: 'world1.jpg',
      caption: "North Shore Preserve",
      location:"Kaua'i, Hawaii",
    },
     {
      url: 'world2.jpg',
      caption: "James Island",
      location:"Southern Gulf Islands, British Columbia, Canada",
    },
    {
      url: 'world3.jpg',
      caption: "CostaTerra",
      location:"Comporta, Portugal",
    }, 
    {
      url: 'world4.jpg',
      caption: "Barbuda Ocean Club",
      location:"Barbuda, West Indies",
    },
    {
      url: 'world5.jpg',
      caption: "Driftwood",
      location:"Austin, Texas",
    },
     {
      url: 'world6.jpg',
      caption: "Troubadour",
      location:"Nashville, Tennessee",
    },
    {
      url: 'world7.jpg',
      caption: "Playa Grande",
      location:"Rio San Juan, Dominican Republic",
    }, 
    {
      url: 'world8.jpg',
      caption: "Chileno Bay",
      location:"Cabo San Lucas, Mexico",
    },
{
      url: 'world9.jpg',
      caption: "The Summit",
      location:"Las Vegas, Nevada",
    },
     {
      url: 'world10.jpg',
      caption: "Dune Deck",
      location:"Westhampton Beach, NY",
    },
    {
      url: 'world11.jpg',
      caption: "Silo Ridge",
      location:"Amenia, New York",
    }, 
    {
      url: 'world12.jpg',
      caption: "Mākena",
      location:"Maui, Hawaii",
    },
    {
      url: 'world13.jpg',
      caption: "Yellowstone Club",
      location:"Big Sky, Montana",
    },
     {
      url: 'world14.jpg',
      caption: "Gozzer Ranch",
      location:"Coeur d’Alene, Idaho",
    },
    {
      url: 'world15.jpg',
      caption: "El Dorado",
      location:"Los Cabos, Mexico",
    }, 
    {
      url: 'world16.jpg',
      caption: "Madison",
      location:"La Quinta, California",
    },
{
      url: 'world17.jpg',
      caption: "Baker's Bay",
      location:"Great Guana Cay, Bahamas",
    },
     {
      url: 'world18.jpg',
      caption: "Hideaway",
      location:"La Quinta, California",
    },
    {
      url: 'world19.jpg',
      caption: "Mountaintop",
      location:"Cashiers, North Carolina",
    }, 
    {
      url: 'world20.jpeg',
      caption: "Mirabel",
      location:"Scottsdale, Arizona",
    },
    {
      url: 'world21.jpg',
      caption: "Kūki'o",
      location:"Kohala, Hawaii",
    },
{
      url: 'world22.jpg',
      caption: "Vaquero",
      location:"Westlake, Texas",
    },
     {
      url: 'world23.jpg',
      caption: "Whitefish, Montana",
      location:"La Quinta, California",
    },
    {
      url: 'world24.jpg',
      caption: "CordeValle",
      location:"Silicon Valley, California",
    }, 
    {
      url: 'world25.jpg',
      caption: "Estancia",
      location:"Scottsdale, Arizona",
    }
     
    // {
    //   url: 'img5.jpg',
    //   caption: "Clubhouses",
    // },
    // {
    //   url: 'img6.jpg',
    //   caption: "Wellness",
    // }, 
  ];
  getImgUrl(pic:string):string{
    return require("../../assets/images/world/"+pic);
  }
}
</script>