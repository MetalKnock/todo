import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  build: {
    target: browserslistToEsbuild(),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/app/styles/_variables.scss";
          @import "./src/app/styles/_helpers.scss";
        `,
      },
    },
  },
});
