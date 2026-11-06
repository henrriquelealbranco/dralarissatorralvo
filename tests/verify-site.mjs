import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const pages = ['index.html', 'sobre.html', 'especialidades.html', 'contato.html'];

for (const page of pages) {
  const file = join(root, page);
  assert.ok(existsSync(file), `${page} não existe`);
  const html = readFileSync(file, 'utf8');
  for (const href of pages) {
    assert.match(html, new RegExp(`href=["']${href}["']`));
  }
  assert.match(html, /5511964705839/);
  assert.match(html, /assets\/css\/styles\.css(?:\?v=\d+)?/);
  assert.match(html, /assets\/js\/main\.js(?:\?v=\d+)?/);
  assert.doesNotMatch(html, /TODO|TBD|Lorem ipsum/);
}

const all = pages.map((page) => readFileSync(join(root, page), 'utf8')).join('\n');
for (const text of ['Dra. Larissa Torralvo', 'CRO-SP 160199', 'Mogi das Cruzes']) {
  assert.ok(all.includes(text), `Texto obrigatório ausente: ${text}`);
}

for (const asset of [
  'assets/css/styles.css',
  'assets/js/main.js',
  'assets/images/dra-larissa.webp',
  'assets/images/dra-larissa.jpg',
  'assets/images/favicon.svg',
  'assets/video/hero-larissa.mp4',
]) {
  assert.ok(existsSync(join(root, asset)), `${asset} não existe`);
}

console.log('Site verificado: 4 páginas, navegação, conteúdo e ativos presentes.');
