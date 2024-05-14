<script setup lang="ts">
import { storeToRefs } from "pinia";
import App from '@/components/layouts/App.vue'
import {useHomeStore} from '@/stores/home'

const store = useHomeStore()
const {
    publications,
} = storeToRefs(store);

store.search()
</script>

<template>
    <App>
        <div class="columns-2 md:columns-3 lg:columns-4 gap-3 px-5">
            <div class="break-inside-avoid mb-4" v-for="(item,index) in publications" :key="`publication-item-${index}`">
                <div class="bg-white rounded-xl" :style="{height:`${Math.floor(Math.random() * (160 - 80 + 1)) + 80}px`}"></div>
                <div class="text-neutral-90 text-sm truncate">{{item.title}}</div>
                <div class="text-neutral-90 text-sm font-semibold">${{item.price.toFixed(2)}}</div>
            </div>
        </div>
    </App>
</template>
