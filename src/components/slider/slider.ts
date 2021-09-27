
import {  Vue } from 'vue-class-component';
interface listi {
    url: string;
    caption: string;
    }
export default class gallery extends Vue {
    
    list: listi[] = [
    {
      url: 'img1.jpg',
      caption: "Outdoor Pursuits",
    },
     {
      url: 'img2.jpg',
      caption: "Golf",
    },
    {
      url: 'img3.jpeg',
      caption: "Lifestyle",
    }, 
    {
      url: 'img4.jpg',
      caption: "Landscapes",
    },
    {
      url: 'img5.jpg',
      caption: "Clubhouses",
    },
    {
      url: 'img6.jpg',
      caption: "Wellness",
    }, 
  ];
  getImgUrl(pic:string):string{
    return require("../../assets/images/"+pic);
  }
}
