/** @type {import('vite').UserConfig} */
export default {
    build: {
      rollupOptions: {
        external: ['index.html'],
      },
    },
  };