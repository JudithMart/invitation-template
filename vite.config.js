import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // Puedes agregar 'port' si quieres un puerto específico, por ejemplo:
    // port: 5173
  },
})
