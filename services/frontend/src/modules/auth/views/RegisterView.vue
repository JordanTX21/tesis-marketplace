<template>
  <div>
    <div class="mb-5 text-center font-semibold text-2xl">Registro</div>
    <div>
      <form>
      <div class="mb-5">
          <input class="focus:outline-none px-4 py-3 bg-neutral-05 rounded-xl text-neutral-90 placeholder:text-neutral-60" type="text" placeholder="Usuario">
      </div>
      <div class="mb-5">
          <input class="focus:outline-none px-4 py-3 bg-neutral-05 rounded-xl text-neutral-90 placeholder:text-neutral-60" type="text" placeholder="Contraseña">
      </div>
      <Button type="submit" class="btn-primary w-full">Registrarse</Button>
      </form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Button from '@/components/Button.vue'
</script>