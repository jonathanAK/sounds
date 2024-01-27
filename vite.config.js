import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

const icon512 = {
  src: '/icons/512.png',
  sizes: '512X512',
  type: 'image/png',
  purpose: 'any maskable'
};

const userOptions = {
  manifest:{
    icons: [icon512]
  },
  devOptions: {
    enabled: true,
    type: 'module',
  },
  includeAssets: [
    "**/*",
  ],
  workbox: {
    globPatterns: ["**/*"],
  },
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA(userOptions)
  ],
  base: './',
  publicDir: 'public',
});
