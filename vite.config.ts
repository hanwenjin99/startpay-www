import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const {
    VITE_HOST,
    VITE_PORT,
    VITE_OPEN = 'false',
    VITE_PUBLIC_URL = '/'
  } = loadEnv(mode, process.cwd())

  return {
    base: VITE_PUBLIC_URL,
    plugins: [vue()],
    server: {
      host: VITE_HOST,
      port: +VITE_PORT,
      open: VITE_OPEN === 'true',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_mixin.scss";',
        },
      },
    },
    build: {
      target: 'es2015',
      minify: 'terser', // 压缩js文件
      terserOptions: {
        compress: {
          ecma: 5,
          comparisons: false,
          inline: 2,
          drop_debugger: true,
        },
        mangle: {
          safari10: true,
        },
        output: {
          ecma: 5,
          comments: false,
          ascii_only: true,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
        },
      },
    },
  }
})