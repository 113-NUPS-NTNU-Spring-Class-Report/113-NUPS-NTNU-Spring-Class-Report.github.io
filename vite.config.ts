
// Utilities
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [

    ],
    define: { 'process.env': {} },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
    },
    server: {
        port: 3000,
        open: true,
        cors: true,
    },
    base: './',
})