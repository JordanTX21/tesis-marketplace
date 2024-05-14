<template>
    <div class="w-full grid grid-cols-3 fixed bottom-0 bg-white">
        <Button class="flex flex-col items-center justify-center" v-for="(item, index) in bottomItems"
            :key="`bottom-item-${index}`" @click="toggleActive(item)">
            <component :is="item.icon" class="w-5 fill-neutral-50" :class="{ '!fill-primary-100': item.active }" /><span
                class="text-xs text-neutral-50" :class="{ '!text-primary-100': item.active }">{{ item.title }}</span>
        </Button>
    </div>
</template>
<script lang="ts" setup>
import IconHome from '@/components/icons/IconHome.vue'
import IconMarket from '@/components/icons/IconMarket.vue'
import IconUser from '@/components/icons/IconUser.vue'
import Button from '@/components/Button.vue'
import { ref } from 'vue'


const bottomItems = ref([
    {
        title: 'Feed',
        icon: IconHome,
        route: 'home',
        active: true
    },
    {
        title: 'Market',
        icon: IconMarket,
        route: 'market',
        active: false
    },
    {
        title: 'Profile',
        icon: IconUser,
        route: 'profile',
        active: false
    },
])

function toggleActive(item){
    bottomItems.value.forEach(bt => bt.active = false)
    item.active = true
}

</script>