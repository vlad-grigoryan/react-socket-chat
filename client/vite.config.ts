/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import {resolve} from 'path';

// https://vitejs.dev/config/
// @ts-ignore
const root = resolve(__dirname)
export default defineConfig({
    plugins: [react()],
    server: {
        port: 4200,
    },
    resolve: {
        alias: {
            "app": resolve(root, 'src')
        }
    }
})
