<template>
    <div class="min-h-screen">
        <NavBar />
        <div class="h-[calc(100vh-52px)] pt-16 overflow-y-auto">
            <slot></slot>
        </div>
        <BottomBar />
    </div>
</template>
<script lang="ts" setup>
import NavBar from './NavBar.vue'
import BottomBar from './BottomBar.vue'
</script>