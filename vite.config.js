/** @type {import('vite').UserConfig} */
export default {
    build: {
      rollupOptions: {
        input: 'src/html/index.html',
      },
      copy: [
        {
          src: 'src/html/*.html',
          dest: 'public'
        }
      ]
    }
  }