/** @type {import('vite').UserConfig} */
import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root: root,
    publicDir: resolve(__dirname, 'public'), 
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                products: resolve(root, 'products.html'),
                contact: resolve(root, 'contact.html'),
                about: resolve(root, 'about.html'),
            }
        },
    },
});