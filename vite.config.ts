import path from 'node:path'
import process from 'node:process'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { createVitePlugins } from './build/vite'
import { exclude, include } from './build/vite/optimize'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,
    plugins: createVitePlugins(mode),

    server: {
      host: true,
      port: 3000,
      proxy: {
        '/api': {
          target: '', // Your backend API base URL
          ws: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },

    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
        '~root': path.join(__dirname, '.'),
      },
    },

    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
      outDir: env.VITE_APP_OUT_DIR || 'dist',
    },

    optimizeDeps: { include, exclude },
  }
}
