import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['logo.svg'],
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Zocket - Ad Customization',
        short_name: 'AdCustomization',
        description: 'Zocket tool for ad customization providing user with customizable ad templates',
        theme_color: '#ffffff',
      },
      devOptions: {
        enabled: true
      }
    }),
  ],
});
