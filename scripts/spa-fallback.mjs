import { copyFileSync, existsSync } from 'node:fs';

const src = 'dist/index.html';
const dest = 'dist/200.html';

if (!existsSync(src)) {
  console.error('dist/index.html not found — run the build first.');
  process.exit(1);
}

copyFileSync(src, dest);
console.log('Created dist/200.html (Surge SPA fallback for client-side routes).');
