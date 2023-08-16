import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import zip from 'rollup-plugin-zip'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

import manifest from './src/manifest.json'
import pkg from './package.json'

const isProd = process.env.NODE_ENV === 'production'

const crxOptions = {
  manifest: Object.assign(manifest, {
    version: pkg.version,
    icons: {
      16: 'src/assets/icon.png',
      48: 'src/assets/icon.png',
      128: 'src/assets/icon.png',
    },
  }),
}

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
    crx(crxOptions),
    isProd && zip({ dir: 'releases' }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: isProd ? 'dist/build' : 'dist/dev',
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
})
