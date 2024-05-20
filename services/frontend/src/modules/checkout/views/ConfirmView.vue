<template>
    <div class="bg-white">
        <div class="">
            <div class="flex flex-col gap-y-6 py-6">
                <div class="flex justify-center">
                    <img class="w-24 h-32 rounded-xl object-cover"
                        src="https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png"
                        alt="Bershka Mom Jeans">
                </div>
                <div class="flex justify-center gap-1">
                    <div>
                        <div class="text-neutral-90 text-lg truncate">Bershka Mom Jeans</div>
                        <div class="text-neutral-60 text-sm">26 - S | Blue | ID:0706502</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-y-3">
            <hr>
            <div class="">
                <div class="px-6 pt-2 pb-1 grid grid-cols-2">
                    <div class="text-base text-neutral-90">Bershka Mom Jeans</div>
                    <div class="text-base text-neutral-90 text-right">$35</div>
                </div>
                <div class="px-6 pt-2 pb-1 grid grid-cols-2">
                    <div class="text-base text-neutral-90">Taxes</div>
                    <div class="text-base text-neutral-90 text-right">$8</div>
                </div>
                <div class="px-6 pt-2 pb-1 grid grid-cols-2">
                    <div class="text-base text-primary">Shipping</div>
                    <div class="text-base text-primary text-right">$5</div>
                </div>
            </div>
            <div class="">
                <hr>
                <div class="flex gap-x-4 px-6 py-3">
                    <div class="flex-1 text-base text-neutral-90">Total</div>
                    <div class="text-base font-semibold text-neutral-90">$43</div>
                </div>
                <div class="py-1 px-6">
                    <Button class="bg-primary text-white w-full">Confirm and pay</Button>
                </div>
            </div>
            <hr>
            <div class="px-6">
                <div class="text-neutral-90 font-semibold text-xl">Order info</div>
            </div>
            <div class="pt-3 pb-4 px-6">
                <div class="py-2">
                    <div class="text-sm text-neutral-60">Order Address</div>
                    <div class="text-base text-neutral-90">21 Yellow Av, Greendale County, Colorado. Zip Code 410236
                    </div>
                </div>
                <div class="py-2">
                    <div class="text-sm text-neutral-60">Receives</div>
                    <div class="text-base text-neutral-90">Ava Johnson</div>
                </div>
                <div class="py-2">
                    <div class="text-sm text-neutral-60">Payment method</div>
                    <div class="text-base text-neutral-90">Mastercard ending in 1578</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
</script>