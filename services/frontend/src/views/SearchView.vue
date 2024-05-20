<template>
    <div class="bg-white py-[52px]">
        <div class="w-full flex fixed top-0 z-10 bg-white px-3">
            <Button class="flex flex-col items-center justify-center !px-3" @click="router.back()">
                <IconArrowLeft class="w-5 stroke-neutral-80" />
            </Button>
            <div class="flex flex-1 gap-x-2 px-6">
                <div class="flex-1 flex px-4 py-3 bg-neutral-05 rounded-xl text-neutral-90">
                    <input v-model="search" v-bind="searchProps"
                        class="focus:outline-none bg-transparent w-full placeholder:text-neutral-60" type="text"
                        placeholder="Search on Tassel" />
                    <Button v-if="search && search.length > 0" class="flex items-center !p-0"
                        @click="store.clearSearch">
                        <IconDeleteText class="w-5 stroke-neutral-80" />
                    </Button>
                </div>
                <Button class="border !font-extrabold">W</Button>
            </div>
        </div>
        <div class="flex flex-col gap-y-3 py-4">
            <div class="text-neutral-50 font-semibold px-6">Recent searches</div>
            <div class="flex flex-col gap-2">
                <div v-for="(item,index) in recent_searches" :key="`recent-search-${index}`">
                    <div class="flex ga-x-10 py-3 px-6">
                        <div class="flex-1 text-neutral-90 cursor-pointer">{{ item.name }}</div>
                        <button ><IconExit class="stroke-neutral-80 w-5" /></button>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import IconArrowLeft from "@/components/icons/IconArrowLeft.vue"
import IconDeleteText from "@/components/icons/IconDeleteText.vue"
import IconExit from "@/components/icons/IconExit.vue"
import Button from "@/components/Button.vue"
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import { storeToRefs } from "pinia";

const router = useRouter()
const store = useSearchStore()

const {
    search,
    searchProps,
    errors,
} = storeToRefs(store);

const recent_searches = ref([
    {
        name: 'top'
    },
    {
        name: 'sneakers'
    },
    {
        name: 'levi’s'
    },
    {
        name: 'jeans'
    },
    {
        name: 'flip flops'
    },
])

</script>