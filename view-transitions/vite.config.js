import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

const pagesDir = resolve(__dirname, 'exercise');
const input = {};

for (const file of fs.readdirSync(pagesDir)) {
    if (file.endsWith('.html')) {
        const name = file.replace(/\.html$/, '');
        input[name] = resolve(pagesDir, file);
    }
}

export default defineConfig({
    root: pagesDir, // serve files from the pages folder
    build: {
        rollupOptions: {
            input: {
                ...input,
                lover: resolve(pagesDir, 'music/lover.html'),
                midnights: resolve(pagesDir, 'music/midnights.html'),
                reputation: resolve(pagesDir, 'music/reputation.html'),
                tpd: resolve(pagesDir, 'music/tpd.html')
            }
        }
    }
});