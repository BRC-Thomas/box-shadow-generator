import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  homepage: "https://brc-thomas.github.io/box-shadow-generator",
  plugins: [react()],
})
