
// Utilities
import { resolve } from 'path';
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
    define: { 'process.env': {} },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.html'
        ],
    },
    server: {
        port: 3000,
        open: true,
        cors: true,
    },
    base: '/',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                aboutMe: resolve(__dirname, 'pages/about-me.html'),
                download: resolve(__dirname, 'pages/download.html'),
                thanks: resolve(__dirname, 'pages/thanks.html'),
                chapterFirst: resolve(__dirname, 'pages/games/first.html'),
            },
        }
    }
})