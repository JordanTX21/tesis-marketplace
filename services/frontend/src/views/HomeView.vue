<script setup lang="ts">
import { storeToRefs } from "pinia";
import App from '@/components/layouts/App.vue'
import MenuHome from '@/components/MenuHome.vue'
import {useHomeStore} from '@/stores/home'

const store = useHomeStore()
const {
    publications,
} = storeToRefs(store);

store.search()
</script>

<template>
    <App>
        <MenuHome/>
        <div class="columns-2 md:columns-3 lg:columns-4 gap-3 p-5">
            <div class="break-inside-avoid mb-4" v-for="(item,index) in publications" :key="`publication-item-${index}`">
                <div class="rounded-xl mb-2">
                    <img class="rounded-xl" :src="item.img" :alt="item.title">
                </div>
                <div class="text-neutral-90 text-sm truncate">{{item.title}}</div>
                <div class="text-neutral-90 text-sm font-semibold">${{item.price.toFixed(2)}}</div>
            </div>
        </div>
    </App>
</template>
