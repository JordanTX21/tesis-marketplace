<template>
    <div class="pt-[52px] bg-white">
        <div class="w-full flex items-center gap-2 fixed top-0 z-10 bg-white px-3">
            <Button class="flex flex-col items-center justify-center !px-3" @click="router.back()">
                <IconArrowLeft class="w-5 stroke-neutral-80" />
            </Button>
            <div class="flex-1 h-1 bg-primary-20 flex items-center relative">
                <div class="flex justify-between w-full">
                    <div class="rounded-full w-3.5 h-3.5 bg-primary"></div>
                    <div class="rounded-full w-3.5 h-3.5 bg-primary-20" :class="{'!bg-primary':['/checkout/payment','/checkout/confirm'].includes(route.fullPath.toString())}"></div>
                    <div class="rounded-full w-3.5 h-3.5 bg-primary-20" :class="{'!bg-primary':route.fullPath.toString() == '/checkout/confirm'}"></div>
                </div>
                <div class="absolute top-0 left-0 w-full">
                    <div class="bg-primary h-1 w-0" :class="{'!w-1/2':route.fullPath.toString() == '/checkout/payment','!w-full': route.fullPath.toString() == '/checkout/confirm'}"></div>
                </div>
            </div>
            <div class="w-1/12"></div>
        </div>
        <RouterView />
    </div>
</template>
<script lang="ts" setup>
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import Button from '@/components/Button.vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>