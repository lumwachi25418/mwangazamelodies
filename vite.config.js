import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,        // listen on all network interfaces
    allowedHosts: ['jammie-summitless-haplessly.ngrok-free.dev'] // allow specific host for tunnels
  }
})