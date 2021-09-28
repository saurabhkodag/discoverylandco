
import {  Vue } from 'vue-class-component';
interface listi {
    id:number;
    temperature:string;
    winds:string;
    compass:string;
    locationTitle:string;
    locationSubtitle:string;
    coordinate:string;
    image:string;
    }
export default class slider extends Vue {
    
    list: listi[] = [
        {
            id:0,
            temperature: "73°F",
            winds: "1.99 mph",
            compass: "135°",
            locationTitle: "Austin, Texas",
            locationSubtitle: "Driftwood",
            coordinate: "30.139339&deg; N / -98.022342&deg; W",
            image:
              "https://dxaurk9yhilm4.cloudfront.net/images/775/driftwood3-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          },
          {
            id:1,
            temperature: "57°F",
            winds: "5.19 mph",
            compass: "209°",
            locationTitle: "Nashville, Tennessee",
            locationSubtitle: "Troubadour",
            coordinate: "35.828904&deg; N / -86.679158&deg; W",
            image:
              "https://dxaurk9yhilm4.cloudfront.net/images/774/Troubadour-Map_190718_114642_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          },
          {
            id:2,
            temperature: "83°F",
            winds: "9.37 mph",
            compass: "238°",
            locationTitle: "Rio San Juan, Dominican Republic",
            locationSubtitle: "Playa Grande",
            coordinate: "19.3830&deg; N / 70.0407&deg; W",
            image:
              "https://dxaurk9yhilm4.cloudfront.net/images/217/Playa-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          },
          {
            id:3,
            temperature: "46°F",
            winds: "1.99 mph",
            compass: "189°",
            locationTitle: "Coeur d’Alene, Idaho",
            locationSubtitle: "Gozzer Ranch",
            coordinate: "47.617997&deg; N / -116.766169&deg; W",
            image:
              "https://dxaurk9yhilm4.cloudfront.net/images/769/gozzer-Map2_397186feb8bd51bb37bc24fc2b9b500f.jpg",
          },
  ];
  current=this.list[1];
  getImgUrl(pic:string):string{
    return require("../../assets/home/"+pic);
  }
  bt_prev(id:number){
    console.log(id , "yy");
    let indx1=(id-1) % 2;
    if(indx1<0)
    indx1=1;
    console.log(indx1 , "yy"); 
    this.current=this.list[indx1 % 2];
}
bt_next(id:number){ 
    console.log(id , "yo");
    const indx2=(id+1) % 2; 
    console.log(indx2 , "yo");
    this.current=this.list[indx2 % 2];
    
}

}
