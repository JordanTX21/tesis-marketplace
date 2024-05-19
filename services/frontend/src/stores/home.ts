import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Publication {
    title: string,
    img: string,
    price: number
}


export const useHomeStore = defineStore('home', () => {
    const publications = ref<Publication[]>([])
    async function search() {
        publications.value = [
            {
                title: "Top Lacoste SPORT",
                img: "https://imagena1.lacoste.com/dw/image/v2/AAUP_PRD/on/demandware.static/-/Sites-master/default/dwf3933e56/TH2402_001_20.jpg",
                price: 49,
            },
            {
                title: "Lacoste x Polaroid",
                img: "https://i.ebayimg.com/images/g/siwAAOSwGZZhrrZS/s-l500.jpg",
                price: 49,
            },
            {
                title: "Bershka Mom Jeans",
                img: "https://static.bershka.net/4/photos2/2024/V/0/1/p/5008/352/400/c85fb6d99a062610e128655e0a276c19-5008352400_2_24_0.jpg",
                price: 34,
            },
            {
                title: "Adidas Sport Tights",
                img: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7885ce3ac3f49299ebff128b467642a_9366/licras-largas-saturday.jpg",
                price: 49,
            },
            {
                title: "Zara Cropped Top",
                img: "https://static.zara.net/photos///2023/I/0/1/p/3641/816/251/2/w/824/3641816251_2_1_1.jpg",
                price: 29,
            },
            {
                title: "Bershka Monochrome Platform Trainers",
                img: "https://static.bershka.net/4/photos2/2024/V/1/1/p/1494/060/001/336f42edf456aff277877866f603bcda-1494060001_1_1_0.jpg",
                price: 59,
            },
            {
                title: "Lacoste Red Polar S...",
                img: "https://img.giglio.com/images/prodZoom/C31373.014_4.jpg",
                price: 149,
            },
            {
                title: "Adidas Printed Skirt",
                img: "https://i.ebayimg.com/images/g/ProAAOSwVptkqigm/s-l1200.webp",
                price: 39,
            },
            {
                title: "Levi’s 711 Skinny Jeans",
                img: "https://falabella.scene7.com/is/image/FalabellaPE/18265854_1?wid=800&hei=800&qlt=70",
                price: 64,
            },
            {
                title: "Zara Oversized Satin shirt",
                img: "https://static.zara.net/assets/public/7ecb/849d/52bd47e9a6fc/0ee45fa94e18/02412866250-p/02412866250-p.jpg",
                price: 34,
            },
        ]
    }

    return { publications, search }
})
