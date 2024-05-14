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
        publications.value = Array.from({ length: 10 }, (_, index) => ({
            title: "Top Lacoste SPORT",
            img: "",
            price: 45,
        }))
    }

    return { publications, search }
})
