import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// import { dynamicBase } from 'vite-plugin-dynamic-base'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    // dynamicBase({
    //   publicPath: '',
    //   transformIndexHtml: false
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/static/',
})
