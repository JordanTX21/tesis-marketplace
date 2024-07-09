<template>
    <div>
        <div class="px-6 py-6 text-xl text-neutral-90">Seleccione o agregue su metodo de pago</div>
        <div>
            <div class="py-3 pl-6 flex gap-x-2 overflow-x-auto">
                <div v-for="(item,index) in cards" class="w-32 h-52 p-3 bg-yellow-10 rounded-xl grid content-between" :key="`card-${index}`">
                    <div></div>
                    <div>
                        <div class="text-sm text-neutral-70">Visa</div>
                        <div class="text-lg font-semibold text-neutral-90">{{ item.number }}</div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-4">
                <Button class="border w-full">Agregar Tarjeta</Button>
            </div>
        </div>
        <div class="fixed bottom-0 w-full bg-white">
            <hr>
            <div class="flex gap-x-4 px-6 py-3">
                <div class="flex-1 text-base text-neutral-90">Total</div>
                <div class="text-base font-semibold text-neutral-90">${{cart.total()}}</div>
            </div>
            <div class="py-1 px-6">
                <Button class="bg-primary text-white w-full" @click="router.push({name:'confirm'})">Continuar</Button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Button from "@/components/Button.vue"
import { useCartStore } from '@/stores/cart'
import { usePaymentStore } from "../stores/checkout";
import { storeToRefs } from "pinia";
import { useRouter } from 'vue-router'

const router = useRouter()
const cart = useCartStore()
const store = usePaymentStore()
const { cards } = storeToRefs(store)
</script>
