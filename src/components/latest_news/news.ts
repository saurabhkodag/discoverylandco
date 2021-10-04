import { Vue } from 'vue-class-component';
// @Options({
//     data(){
//         return {
//             index: 0,
//             latestNewsData: [
//                 {
//                     id: 1,
//                     picName: 'l1.jpg',
//                     heading: ['Discovery’s newest', 'property in Kaua’i North', 'Shore Preserve'],
//                     paraContent: `Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.`
//                 },
//                 {
//                     id: 2,
//                     picName: 'l2.jpg',
//                     heading: ['James Island',`Discovery's Newest`, `Property`],
//                     paraContent: `
//                     Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.
//                   `
//                 },
//                 {
//                     id: 3,
//                     picName: 'l3.jpg',
//                     heading: ['CostaTerra', `Discovery's 23rd property`],
//                     paraContent: `
//                     Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.
//                   `
//                 },
//                 {
//                     id: 4,
//                     picName: 'l4.jpg',
//                     heading: ['Troubadour To Open', 'Golf Course Fall 2019'],
//                     paraContent: `
//                     Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.
//                   `
//                 }
//             ]
//         }
//     },
//     methods:{
//         changeIndex(change: number) {
//             if(this.latestNewsData[this.index + change]){
//                 this.index += change
//             } else if (change == 1){
//                 this.index = 0;
//             } else {
//                 this.index = 3
//             }
//         },
//         getImage(name: string){
//             return require('@/assets/Press/' +name);
//         }
//     }
// })


export default class LatestNews extends Vue {
    private Title:{
        text1: string,
        text2: string
      } = {
        text1: "News",
        text2: "and Press"
      }
    
      private slideshowData:{
        image: string,
        title: string,
        body: string,
      }[]=[
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/8790/DJI_0265_RET_2_210405_191033_8cfe90628771654de81065d52a5bfbcf.jpg",
          title:
            "Discovery’s newest property in Kaua’i North Shore Preserve",
          body:
            "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings.",
        },
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/7003/HERO_1920_200615_181847_8cfe90628771654de81065d52a5bfbcf.jpg",
          title: "James Island  Discovery's Newest Property",
          body:
            "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada.",
        },
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/523/CostaTerra1-copy_8cfe90628771654de81065d52a5bfbcf.jpg",
          title: "CostaTerra  Discovery's 23rd property",
          body:
            "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe.",
        },
        {
          image:
            "https://dxaurk9yhilm4.cloudfront.net/images/251/Troubadour-carousel_190620_130709_8cfe90628771654de81065d52a5bfbcf.jpg",
          title: "Troubadour To Open Golf Course Fall 2019",
          body:
            "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall.",
        },
      ]
    
      public selectedPage = 0;
    
      public nextPlace(): void {
        const totalPlaces = this.slideshowData.length;
        this.selectedPage = (this.selectedPage + 1) % totalPlaces;
      }
      
      public previousPlace(): void {
        const totalPlaces = this.slideshowData.length;
        this.selectedPage = (this.selectedPage + totalPlaces - 1) % totalPlaces;
      }
    }


