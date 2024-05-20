<template>
    <div>
        <div class="px-6 py-6 text-xl text-neutral-90">Select or add a payment method</div>
        <div>
            <div class="py-3 pl-6 flex gap-x-2 overflow-x-auto">
                <div class="w-32 h-52 p-3 bg-yellow-10 rounded-xl grid content-between">
                    <div></div>
                    <div>
                        <div class="text-sm text-neutral-70">Mastercard</div>
                        <div class="text-lg font-semibold text-neutral-90">****1578</div>
                    </div>
                </div>
                <div class="w-32 h-52 p-3 bg-secondary-10 rounded-xl grid content-between">
                    <div></div>
                    <div>
                        <div class="text-sm text-neutral-70">Mastercard</div>
                        <div class="text-lg font-semibold text-neutral-90">****1578</div>
                    </div>
                </div>
                <div class="w-32 h-52 p-3 bg-primary-10 rounded-xl grid content-between">
                    <div></div>
                    <div>
                        <div class="text-sm text-neutral-70">Mastercard</div>
                        <div class="text-lg font-semibold text-neutral-90">****1578</div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-4">
                <Button class="border w-full">Add card</Button>
            </div>
        </div>
        <div class="fixed bottom-0 w-full bg-white">
            <hr>
            <div class="flex gap-x-4 px-6 py-3">
                <div class="flex-1 text-base text-neutral-90">Total (VAT included)</div>
                <div class="text-base font-semibold text-neutral-90">$43</div>
            </div>
            <div class="py-1 px-6">
                <Button class="bg-primary text-white w-full" @click="router.push({name:'confirm'})">Continue</Button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Button from "@/components/Button.vue"
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
