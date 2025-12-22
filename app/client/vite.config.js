import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react],
  root: path.resolve(__dirname),   // client folder
  base: './',                      // quan trọng để build relative path
  build: {
    outDir: 'dist',                 // folder build
    emptyOutDir: true,              // xóa dist trước build
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html') // bắt buộc phải trỏ tới index.html
    }
  }
});