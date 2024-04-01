import { defineConfig } from 'vite';
// import { resolve } from 'node:path';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

// const root = resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  //   resolve: {
  //     alias: { find: '@', replacement: resolve(__dirname, 'src') },

  //     // alias: {
  //     //   'icons': resolve(root, 'icons'),
  //     //   'atoms': resolve(root, 'atoms'),
  //     // },
  //   },
});
