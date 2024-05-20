<template>
    <div>
        <div class="px-6 py-6 text-xl text-neutral-90">Select or add a shipping address</div>
        <div>
            <div>
                <div class="flex flex-col gap-y-6 rounded-xl bg-primary-10 pt-6 my-1 mx-2">
                    <div class="flex items-center">
                        <div class="px-4">
                            <div class="text-base text-neutral-90 font-semibold">Ava Johnson - Work</div>
                            <div class="text-base text-neutral-70">3910 Crim Lane, Greendale County, Colorado. Zip Code 410348</div>
                            <div class="text-base text-primary">Arrival est: Apr 15  <span class="text-neutral-90">$0 Shipping</span></div>
                        </div>
                        <div class="flex">
                            <input type="radio" name="hs-radio-group" class="form-radio shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-800" id="hs-radio-group-1" value="cm">
                            <label for="hs-radio-group-1" class="text-sm text-gray-500 ms-2 dark:text-gray-400"></label>
                        </div>
                    </div>
                    <Button class="border-t">Edit</Button>
                </div>
                <div class="flex flex-col gap-y-6 pt-6 my-1 mx-2">
                    <div class="flex items-center">
                        <div class="px-4">
                            <div class="text-base text-neutral-90 font-semibold">Ava Johnson - Work</div>
                            <div class="text-base text-neutral-70">3910 Crim Lane, Greendale County, Colorado. Zip Code 410348</div>
                            <div class="text-base text-primary">Arrival est: Apr 15  <span class="text-neutral-90">$0 Shipping</span></div>
                        </div>
                        <div class="flex">
                            <input type="radio" name="hs-radio-group" class="form-radio shrink-0 mt-0.5 border-gray-200 rounded-full text-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-gray-800" id="hs-radio-group-1" value="cm">
                            <label for="hs-radio-group-1" class="text-sm text-gray-500 ms-2 dark:text-gray-400"></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-6 py-4">
                <Button class="border w-full">Add address</Button>
            </div>
        </div>
        <div class="fixed bottom-0 w-full">
            <hr>
            <div class="flex gap-x-4 px-6 py-3">
                <div class="flex-1 text-base text-neutral-90">Subtotal (VAT included)</div>
                <div class="text-base font-semibold text-neutral-90">$43</div>
            </div>
            <div class="py-1 px-6">
                <Button class="bg-primary text-white w-full" @click="router.push({name:'payment'})">Continue</Button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Button from "@/components/Button.vue"
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
