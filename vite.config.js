/** @type {import('vite').UserConfig} */
import { resolve } from 'vite';
import { rollupVersion } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default {
    root: root,
    build: {
        outDir: outDir,
        emptyOurdir: true,
        rollupOptuins:{
            input: {
                main: resolve(root, 'index.html'),
                products: resolve(root, '/html/products.html'),
                contact: resolve(root, '/html/contact.html'),
                about: resolve(root, '/html/about.html'),
            }
        },
    },
}