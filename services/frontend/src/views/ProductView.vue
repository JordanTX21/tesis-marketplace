<template>
    <div class="bg-white py-[52px]">
        <div class="w-full flex fixed top-0 z-10 bg-white px-3">
            <Button class="flex flex-col items-center justify-center !px-3" @click="router.back()">
                <IconArrowLeft class="w-5 stroke-neutral-80" />
            </Button>
            <div class="p-3 flex-1 text-neutral-90 font-semibold text-lg text-center"></div>
            <Button class="flex flex-col items-center justify-center !px-3">
                <IconBookmark class="w-5 fill-neutral-80" />
            </Button>
            <Button class="flex flex-col items-center justify-center !px-3">
                <IconMoreDots class="w-5 fill-neutral-80 stroke-neutral-80" />
            </Button>
        </div>
        <div class="flex flex-col gap-y-4">
            <div class="flex w-full overflow-x-auto pl-6 gap-1">
                <img class="h-[396px] rounded-xl" :src="item" :alt="`product-img-${index}`"
                    v-for="(item, index) in images" :key="`product-img-${index}`">
            </div>
            <div class="px-6 py-2">
                <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-x-6">
                        <div class="flex-1 text-neutral-90 text-xl">Bershka Mom Jeans</div>
                        <img class="rounded-full border-2 border-neutral-10 w-10" :src="store.avatar"
                            :alt="store.title">
                    </div>
                    <div class="text-neutral-100 font-semibold text-xl">$34</div>
                </div>
            </div>
        </div>
        <div class="flex gap-2 px-6 py-2">
            <Button class="flex-1 text-neutral-30 border border-neutral-10 bg-neutral-05">Color</Button>
            <Button class="flex-1 border border-neutral-10 text-neutral-80">Size</Button>
        </div>
        <hr class="my-4">
        <div class="flex flex-col gap-3 py-4">
            <div class="px-6 text-neutral-90 text-xl">Details</div>
            <div class="flex flex-col gap-1 px-6 py-2">
                <div class="text-neutral-90 font-semibold">Description</div>
                <div class="text-neutral-70">
                    <div>
                        These are the Mom Jeans you've been looking for. Let loose with this modern interpretation of a
                        classic '90s style, featuring a flattering high rise and stacked, tapered leg. These jeans are
                        designed to be worn as a relaxed, loose style.
                    </div>
                    <div>- Waist-emphasizing high rise</div>
                    <div>- Relaxed fit for a vintage-inspired look</div>
                    <div>- Tapered leg for tailored style</div>
                    <div>- Sustainably made with TENCEL™ fabric</div>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div class="pl-6">
            <div class="flex gap-4 py-2.5">
                <div class="flex-1 text-lg font-semibold text-neutral-90">Productos relacionados</div>
            </div>
            <div class="">
                <div class="w-full flex overflow-x-auto">
                    <div class="flex flex-col gap-3 p-1" v-for="(item, index) in products"
                        :key="`products-item-${index}`" @click="router.push({ name: 'product', params: { id: item.id } })">
                        <div class="relative w-40 h-48 rounded-xl">
                            <img class="object-cover w-40 h-48 rounded-xl" :src="item.img" :alt="item.title">
                        </div>
                        <div>
                            <div class="text-neutral-90">{{ item.title }}</div>
                            <div class="flex gap-1">
                                <div class="text-neutral-60" :class="{ 'line-through': item.discount }">${{ item.price
                                    }}
                                </div>
                                <div v-if="item.discount" class="text-red font-semibold">${{ item.discount }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-4">
        <div class="fixed bottom-0 px-6 py-1 w-full bg-white">
            <Button class="bg-primary text-white w-full" @click="router.push({name:'cart'})">Add to cart</Button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue"
import IconBookmark from "@/components/icons/IconBookmark.vue"
import IconMoreDots from "@/components/icons/IconMoreDots.vue"
import Button from "@/components/Button.vue"
import { useRouter } from 'vue-router'

const router = useRouter()

const images = ref([
    "https://img01.ztat.net/article/spp-media-p1/f6d1bec622884354a57c8110aa69b0da/5089689488654e52820850893f05ff88.jpg",
    "https://img01.ztat.net/article/spp-media-p1/f6d1bec622884354a57c8110aa69b0da/5089689488654e52820850893f05ff88.jpg",
    "https://img01.ztat.net/article/spp-media-p1/f6d1bec622884354a57c8110aa69b0da/5089689488654e52820850893f05ff88.jpg",
    "https://img01.ztat.net/article/spp-media-p1/f6d1bec622884354a57c8110aa69b0da/5089689488654e52820850893f05ff88.jpg",
    "https://img01.ztat.net/article/spp-media-p1/f6d1bec622884354a57c8110aa69b0da/5089689488654e52820850893f05ff88.jpg",
    "https://img01.ztat.net/article/spp-media-p1/f6d1bec622884354a57c8110aa69b0da/5089689488654e52820850893f05ff88.jpg",
])

const products = ref([
    {
        id: 1,
        title: "Bershka Platform Sandals with Buckle",
        img: "https://img01.ztat.net/article/spp-media-p1/ef6e70ac25204d9a8f840fe2ad2883f0/3bd64c22570b4a7893f9100a98440d43.jpg",
        price: 49,
        discount: 29
    },
    {
        id: 1,
        title: "Bershka Platform Sandals with Buckle",
        img: "https://img01.ztat.net/article/spp-media-p1/ef6e70ac25204d9a8f840fe2ad2883f0/3bd64c22570b4a7893f9100a98440d43.jpg",
        price: 49,
        discount: 29
    },
    {
        id: 1,
        title: "Bershka Platform Sandals with Buckle",
        img: "https://img01.ztat.net/article/spp-media-p1/ef6e70ac25204d9a8f840fe2ad2883f0/3bd64c22570b4a7893f9100a98440d43.jpg",
        price: 49,
        discount: 29
    },
    {
        id: 1,
        title: "Bershka Platform Sandals with Buckle",
        img: "https://img01.ztat.net/article/spp-media-p1/ef6e70ac25204d9a8f840fe2ad2883f0/3bd64c22570b4a7893f9100a98440d43.jpg",
        price: 49,
        discount: 29
    },
    {
        id: 1,
        title: "Bershka Platform Sandals with Buckle",
        img: "https://img01.ztat.net/article/spp-media-p1/ef6e70ac25204d9a8f840fe2ad2883f0/3bd64c22570b4a7893f9100a98440d43.jpg",
        price: 49,
        discount: 29
    },
    {
        id: 1,
        title: "Bershka Platform Sandals with Buckle",
        img: "https://img01.ztat.net/article/spp-media-p1/ef6e70ac25204d9a8f840fe2ad2883f0/3bd64c22570b4a7893f9100a98440d43.jpg",
        price: 49,
        discount: 29
    },
])

const store = ref({
    id: 1,
    title: "Levi's",
    description: "Verified official store",
    avatar: 'https://thumbs.dreamstime.com/b/levis-logo-editorial-ilustrativo-sobre-fondo-blanco-icono-vectorial-logotipos-iconos-conjunto-redes-sociales-banner-plano-vectores-210441937.jpg'
})
</script>