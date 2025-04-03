import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './', // 使用相對路徑而非絕對路徑
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      'three': resolve(__dirname, 'node_modules/three'),
      'papaparse': resolve(__dirname, 'node_modules/papaparse/papaparse.min.js'),
    }
  },
  // 複製靜態資源
  publicDir: 'public',
});