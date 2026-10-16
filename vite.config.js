import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Для GitHub Pages додати base: '/назва-репозиторію/'
export default defineConfig({
  plugins: [react()],
  base: '/fe-basics-lab7/',
})
