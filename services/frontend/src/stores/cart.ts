import { ref } from 'vue'
import { defineStore } from 'pinia'
// import Request from '@/utils/request';

// const request = new Request();

interface User {
    name: string,
    description: string,
    photo: string
}

interface Rate {
    rate: number,
    count: number
}

interface Product {
    id: number,
    code: string,
    name: string,
    description: string,
    image: string,
    images: Array<string>,
    categories: Array<string>,
    category: string,
    rating: Rate,
    user: User,
    created_at:string,
    quantity: number,
    price: number
}

export const useCartStore = defineStore('cart', () => {
    const products = ref<Product[]>([])

    const add = (product: Product) => {
        const prod = products.value.filter(prod => prod.code === product.code)
        if(prod.length === 0){
            products.value.push(product)
        }else{
            const index = products.value.indexOf(prod[0])
            products.value[index].quantity++;
        }
    }
    const remove = (code: string) => products.value = products.value.filter(product => product.code !== code)
    const total = ():number => products.value.reduce((acumulador, product:Product) => acumulador + product.price, 0)
    const quantity = ():number => products.value.reduce((acumulador, product:Product) => acumulador + product.quantity, 0)
    const reset = () => products.value = []
    return {products,add,remove,total,reset,quantity}
})