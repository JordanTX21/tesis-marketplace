<template>
    <div class="bg-neutral-10 pt-[52px] min-h-screen" ref="targetDiv">
        <div class="w-full flex gap-2 fixed top-0 z-10 px-3" :class="{ 'bg-white': showSearch }">
            <Button class="flex flex-col items-center justify-center !px-3" @click="router.back()">
                <IconExit class="w-6 stroke-neutral-80" />
            </Button>
            <div class="flex-1 flex items-center justify-center">
                <IconCart class="fill-neutral-80" />
            </div>
            <div class="w-1/5"></div>
        </div>
        <div class="p-6">
            <div class="flex flex-col gap-y-6 rounded-2xl bg-white px-6 pt-8 pb-4 relative">
                <Button class="absolute top-0 right-0">
                    <IconTrash class="fill-neutral-80" />
                </Button>
                <div class="flex flex-col gap-y-4 ">
                    <div class="flex gap-x-4">
                        <img class="w-28 h-32 rounded-xl object-cover"
                            src="https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png"
                            alt="Bershka Mom Jeans">
                        <div class="flex items-center">
                            <div class="text-neutral-90 text-lg truncate">Bershka Mom Jeans</div>
                        </div>
                    </div>
                    <div class="flex gap-x-3">
                        <div class="flex-1 text-neutral-60 text-sm">26 - S | Blue | x1</div>
                        <div class="text-neutral-90 font-semibold">$34</div>
                    </div>
                    <div class="grid grid-cols-2 gap-x-2">
                        <Button class="border">Edit</Button>
                        <Button class="border">Save for later</Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 w-full">
            <hr>
            <div class="flex gap-x-4 px-6 py-3">
                <div class="flex-1 text-base text-neutral-90">Subtotal (VAT included)</div>
                <div class="text-base font-semibold text-neutral-90">$43</div>
            </div>
            <div class="py-1 px-6">
                <Button class="bg-primary text-white w-full" @click="router.push({ name: 'address' })">Continue to
                    checkout</Button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconExit from '@/components/icons/IconExit.vue'
import IconCart from '@/components/icons/IconCart.vue'
import Button from '@/components/Button.vue'
import { useRouter } from 'vue-router'

const showSearch = ref(false)
const targetDiv = ref(null)
const router = useRouter()

const orders = ref([
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
    {
        title: 'Bershka Mom Jeans',
        detail: '26 - S | Blue | ID:0706502',
        img: 'https://i.pinimg.com/originals/07/37/1a/07371a0783400a01c20701d139857643.png'
    },
])

const handleScroll = () => {
    if (targetDiv.value) {
        const rect = targetDiv.value.getBoundingClientRect();
        // Ajusta este valor según la posición deseada
        // const scrollPosition = window.innerHeight / 3;
        showSearch.value = rect.top < -470;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
</script>
