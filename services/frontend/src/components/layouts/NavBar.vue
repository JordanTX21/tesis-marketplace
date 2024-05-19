<template>
    <div class="w-full flex fixed top-0 bg-white px-3">
        <Button class="flex flex-col items-center justify-center !px-3">
            <IconHome class="w-5 fill-neutral-80" />
        </Button>
        <div class="p-3 flex-1 text-neutral-90 font-semibold text-lg text-center">Feed</div>
        <Button class="flex flex-col items-center justify-center !px-3">
            <IconSearch class="w-5 fill-neutral-80" />
        </Button>
    </div>
</template>
<script lang="ts" setup>
import IconHome from '@/components/icons/IconHome.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import Button from '@/components/Button.vue'
</script>