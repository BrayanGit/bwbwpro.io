import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/bwbwpro.io/", // Reemplaza con el nombre de tu repositorio
  plugins: [react()],
  
})
