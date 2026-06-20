import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ai-beginners-guide/',
  plugins: [react()],
  server: { host: true, port: 5173 },
});
