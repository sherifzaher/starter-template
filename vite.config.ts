/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  // resolve:{
  //   alias: {
  //     '@/UI': path.resolve(__dirname, './src/Components/UI'),
  //     '@/Other': path.resolve(__dirname, './src/Components/Other'),
  //   },
  // }
});
