import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// TBS proprietary streaming platform — scaffold only.
// Full build pending the streaming provider decision (see README.md).
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: { port: 3004 },
})
