import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [vue()],
    base: '/portfolio/',
    resolve: {
        alias: [
            {
                find: '@',
                replacement: fileURLToPath(new URL('./src', import.meta.url)),
            },
        ],
        extensions: ['', '.js', '.vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./src/assets/styles/variables.scss";',
            },
        },
    },
});
