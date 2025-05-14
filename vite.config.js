// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base:'/',  // 👈 Adjust base path based on mode
  plugins: [react()]
}))
