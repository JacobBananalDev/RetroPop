import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': '/src',  // Manually resolve @ to src
      '@components': '/src/components',  // Manually resolve @components
      '@assets': '/src/assets',  // Manually resolve @assets
    },
  },
})
