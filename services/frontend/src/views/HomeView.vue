<script setup lang="ts">
import { storeToRefs } from "pinia";
import MenuHome from '@/components/MenuHome.vue'
import {useHomeStore} from '@/stores/home'
import NavBar from '@/components/layouts/NavBar.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useHomeStore()
const {
    products,
} = storeToRefs(store);

store.search()
</script>

<template>
    <div>
        <NavBar />
        <MenuHome/>
        <div class="columns-2 md:columns-3 lg:columns-4 gap-3 p-5">
            <div class="break-inside-avoid mb-4 cursor-pointer" v-for="(item,index) in products" :key="`product-item-${index}`" @click="router.push({name: 'product', params: {id:item.id}})">
                <div class="rounded-xl mb-2">
                    <img class="rounded-xl" :src="item.image" :alt="item.title">
                </div>
                <div class="text-neutral-90 text-sm truncate">{{item.title}}</div>
                <div class="text-neutral-90 text-sm font-semibold">${{parseFloat(item.price.toString()).toFixed(2)}}</div>
            </div>
        </div>
    </div>
</template>
