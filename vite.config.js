import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/vercel/",
  define: {
    'process.env': {} // Define empty process.env to avoid errors
  }
});
