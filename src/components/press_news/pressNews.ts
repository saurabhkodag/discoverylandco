import './pressNews.scss'
import { Options, Vue } from 'vue-class-component';

@Options({
    data(){
        return {
            index: 0,
            pressData: [
                [
                    {
                        heading: `10 Fairways to Tee Off on Now`,
                        para: `Vegas Magazine I September 2021`
                    },
                    {
                        heading: `Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic`,
                        para: `Bloomberg I September 2021`
                    },
                    {
                        heading: `Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated`,
                        para: `Telegraph UK | August 20, 2021`
                    },
                    {
                        heading: `This Property Company Ups the Ante with  Luxury and Sustainability`,
                        para: `Sunset Magazine | August 13, 2021`
                    },
                ],
                [
                    {
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                    {
                        heading: `Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious`,
                        para: `Business Insider |  June 4, 2021`
                    },
                    {
                        heading: `There's a real buy-in for resort communities offering amusement and amenities`,
                        para: `Luxury Magazine | Spring/Summer 2021`
                    },
                    {
                        heading: `This Blue Chip Caribbean Island Hopes to Dethrone St. Barts`,
                        para: `New York Post | April 5, 2021`
                    },
                ],
                [
                    {
                        heading: `No Longer Waiting for Retirement`,
                        para: `New York Times International Homes | March 27-28, 2021`
                    },
                    {
                        heading: `Golf and Pickleball are Having a Love Affair`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `For Many, the Pandemic Has Led to the 'Discovery' of Golf`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                ],
                [
                    {
                        heading: `10 Fairways to Tee Off on Now`,
                        para: `Vegas Magazine I September 2021`
                    },
                    {
                        heading: `Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic`,
                        para: `Bloomberg I September 2021`
                    },
                    {
                        heading: `Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated`,
                        para: `Telegraph UK | August 20, 2021`
                    },
                    {
                        heading: `This Property Company Ups the Ante with  Luxury and Sustainability`,
                        para: `Sunset Magazine | August 13, 2021`
                    },
                ],
                [
                    {
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                    {
                        heading: `Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious`,
                        para: `Business Insider |  June 4, 2021`
                    },
                    {
                        heading: `There's a real buy-in for resort communities offering amusement and amenities`,
                        para: `Luxury Magazine | Spring/Summer 2021`
                    },
                    {
                        heading: `This Blue Chip Caribbean Island Hopes to Dethrone St. Barts`,
                        para: `New York Post | April 5, 2021`
                    },
                ],
                [
                    {
                        heading: `No Longer Waiting for Retirement`,
                        para: `New York Times International Homes | March 27-28, 2021`
                    },
                    {
                        heading: `Golf and Pickleball are Having a Love Affair`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `For Many, the Pandemic Has Led to the 'Discovery' of Golf`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                ],
                [
                    {
                        heading: `10 Fairways to Tee Off on Now`,
                        para: `Vegas Magazine I September 2021`
                    },
                    {
                        heading: `Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic`,
                        para: `Bloomberg I September 2021`
                    },
                    {
                        heading: `Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated`,
                        para: `Telegraph UK | August 20, 2021`
                    },
                    {
                        heading: `This Property Company Ups the Ante with  Luxury and Sustainability`,
                        para: `Sunset Magazine | August 13, 2021`
                    },
                ],
                [
                    {
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                    {
                        heading: `Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious`,
                        para: `Business Insider |  June 4, 2021`
                    },
                    {
                        heading: `There's a real buy-in for resort communities offering amusement and amenities`,
                        para: `Luxury Magazine | Spring/Summer 2021`
                    },
                    {
                        heading: `This Blue Chip Caribbean Island Hopes to Dethrone St. Barts`,
                        para: `New York Post | April 5, 2021`
                    },
                ],
                [
                    {
                        heading: `No Longer Waiting for Retirement`,
                        para: `New York Times International Homes | March 27-28, 2021`
                    },
                    {
                        heading: `Golf and Pickleball are Having a Love Affair`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `For Many, the Pandemic Has Led to the 'Discovery' of Golf`,
                        para: `New York Times | March 22, 2021`
                    },
                    {
                        heading: `Where Sun, Sand and Splendor Are Still to Be Discovered`,
                        para: `New York Times | June 9, 2021`
                    },
                ],
                
            ]
        }
    },
    methods:{
        changeIndex(change: number) {
            if(this.pressData[this.index + change]){
                this.index += change
            } else if (change == 1){
                this.index = 0;
            } else {
                this.index = 3
            }
        },
        getImage(name: string){
            return require('@/assets/About/boat.jpg');
        }
    }
})

export default class LatestNews extends Vue {
}