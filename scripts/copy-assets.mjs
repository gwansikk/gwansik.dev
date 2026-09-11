// Copies post assets (content/posts/<dir>/assets/*) into public/static so
// Next.js can serve them. Runs before `next dev` and `next build`.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const postsDir = path.join(root, 'content', 'posts');
const targetDir = path.join(root, 'public', 'static', 'posts');

fs.rmSync(targetDir, { recursive: true, force: true });

for (const entry of fs.readdirSync(postsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const assets = path.join(postsDir, entry.name, 'assets');
  if (!fs.existsSync(assets)) continue;
  fs.cpSync(assets, path.join(targetDir, entry.name, 'assets'), {
    recursive: true,
  });
}
