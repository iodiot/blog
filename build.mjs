// Static site builder for https://iodiot.github.io/blog/
// node build.mjs  ->  ./dist
import fs from 'node:fs';
import path from 'node:path';
import MarkdownIt from 'markdown-it';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import hljs from 'highlight.js';

const ROOT = path.dirname(new URL(import.meta.url).pathname);
const OUT = path.join(ROOT, 'dist');
const BASE = '/blog/';
const SITE = 'https://iodiot.github.io';
const TUTORIAL = '/3d-tutorial/';
// Pages that moved out of the blog: old path (under BASE) -> new absolute path
const REDIRECTS = {
  'threejs-first-scene/': '/3d-tutorial/part-1-first-scene/',
  'demos/threejs-01/': '/3d-tutorial/demos/part-1/',
  'demos/threejs-01/step-1.html': '/3d-tutorial/demos/part-1/step-1.html',
  'demos/threejs-01/step-2.html': '/3d-tutorial/demos/part-1/step-2.html',
  'demos/threejs-01/step-3.html': '/3d-tutorial/demos/part-1/step-3.html',
};

const md = new MarkdownIt({
  html: false, linkify: true, typographer: false,
  highlight(code, lang) {
    if (lang && lang !== 'text' && hljs.getLanguage(lang)) {
      return `<pre class="hljs"><code class="language-${lang}">${hljs.highlight(code, { language: lang, ignoreIllegals: true }).value}</code></pre>`;
    }
    return `<pre class="hljs"><code>${md.utils.escapeHtml(code)}</code></pre>`;
  },
}).use(texmath, { engine: katex, delimiters: 'dollars', katexOptions: { throwOnError: false } });

// open external links in new tab
const defaultLink = md.renderer.rules.link_open || ((t, i, o, e, s) => s.renderToken(t, i, o));
md.renderer.rules.link_open = (tokens, idx, opts, env, self) => {
  const href = tokens[idx].attrGet('href') || '';
  if (/^https?:\/\//.test(href) && !href.startsWith(SITE)) {
    tokens[idx].attrSet('target', '_blank');
    tokens[idx].attrSet('rel', 'noopener');
  }
  return defaultLink(tokens, idx, opts, env, self);
};
md.renderer.rules.image = (tokens, idx, opts, env, self) => {
  const t = tokens[idx];
  const src = t.attrGet('src'); const alt = self.renderInlineAsText(t.children, opts, env);
  return `<img src="${src}" alt="${md.utils.escapeHtml(alt)}" loading="lazy">`;
};

function parse(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  for (const line of m[1].split('\n')) {
    const mm = line.match(/^(\w+):\s*(.*)$/); if (!mm) continue;
    let v = mm[2].trim();
    if (v.startsWith('[') && v.endsWith(']')) v = v.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    else if (v.startsWith('"') && v.endsWith('"')) v = JSON.parse(v);
    meta[mm[1]] = v;
  }
  return { meta, body: m[2] };
}

const posts = [];
for (const f of fs.readdirSync(path.join(ROOT, 'posts/ru')).filter(f => f.endsWith('.md'))) {
  const slug = f.replace(/\.md$/, '');
  const ru = parse(path.join(ROOT, 'posts/ru', f));
  const en = parse(path.join(ROOT, 'posts/en', f));
  posts.push({
    slug, date: ru.meta.date, topic: ru.meta.topic, lj: ru.meta.original_url,
    ru: { title: ru.meta.title, tags: ru.meta.tags || [], body: ru.body },
    en: { title: en.meta.title, tags: en.meta.tags || [], body: en.body },
  });
}
posts.sort((a, b) => b.date.localeCompare(a.date));
const ljToSlug = Object.fromEntries(posts.map(p => [p.lj.match(/(\d+)\.html/)[1], p.slug]));

function fixLinks(body, lang) {
  body = body.replace(/\]\(\.\.\/\.\.\/images\//g, `](${BASE}images/`);
  body = body.replace(/\]\((https?:\/\/iodiot\.livejournal\.com\/(\d+)\.html)\)/g, (all, url, id) =>
    ljToSlug[id] ? `](${BASE}${lang === 'ru' ? 'ru/' : ''}${ljToSlug[id]}/)` : all);
  return body;
}
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MONTHS_EN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const MONTHS_RU = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
function fmtDate(iso, lang) {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return lang === 'ru' ? `${d} ${MONTHS_RU[m - 1]} ${y}` : `${MONTHS_EN[m - 1]} ${d}, ${y}`;
}
const TOPIC = { en: { programming: 'programming', mathematics: 'mathematics', physics: 'physics & space' },
                ru: { programming: 'программирование', mathematics: 'математика', physics: 'физика и космос' } };

function layout({ lang, title, desc, body, canonical, alt }) {
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${canonical}">
${alt ? `<link rel="alternate" hreflang="${alt.lang}" href="${SITE}${alt.href}">` : ''}
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%230b0d12'/%3E%3Ctext x='16' y='22' font-family='monospace' font-size='16' text-anchor='middle' fill='%237cf5d4'%3Eio%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="${BASE}assets/katex/katex.min.css">
<link rel="stylesheet" href="${BASE}assets/style.css">
</head>
<body>
<div class="bg"></div>
<header class="nav">
  <a class="brand" href="/">Mike Smahin</a>
  <nav>
    <a href="${BASE}">Blog</a>
    <a href="${BASE}ru/">По-русски</a>
    <a href="/#writing">Portfolio</a>
  </nav>
</header>
<main>
${body}
</main>
<footer class="foot"><p>© Mike Smahin · Originally published on <a href="https://iodiot.livejournal.com/" target="_blank" rel="noopener">iodiot.livejournal.com</a> (2007–2012) · <a href="https://github.com/iodiot/blog" target="_blank" rel="noopener">source</a></p></footer>
</body>
</html>
`;
}

function chips(p, lang) {
  const tags = [TOPIC[lang][p.topic], ...p[lang].tags.filter(t => t.toLowerCase() !== TOPIC[lang][p.topic])];
  return `<ul class="tags">${tags.slice(0, 5).map((t, i) => `<li${i === 0 ? ' class="topic"' : ''}>${esc(t)}</li>`).join('')}</ul>`;
}

function indexPage(lang) {
  const other = lang === 'en' ? 'ru' : 'en';
  const list = posts.map(p => `
  <li class="post-item">
    <time datetime="${p.date.slice(0, 10)}">${fmtDate(p.date, lang)}</time>
    <div>
      <a class="post-title" href="${BASE}${lang === 'ru' ? 'ru/' : ''}${p.slug}/">${esc(p[lang].title)}</a>
      ${chips(p, lang)}
    </div>
  </li>`).join('');
  const counts = ['programming', 'mathematics', 'physics'].map(t => `${posts.filter(p => p.topic === t).length} ${TOPIC[lang][t]}`).join(' · ');
  const intro = lang === 'en'
    ? `<p class="eyebrow">Blog · 2007–2012</p><h1>Notes on math, physics &amp; programming</h1>
       <p class="lead">${posts.length} posts I wrote in Russian on my old LiveJournal, translated into English. Every post links to its Russian original and to the LiveJournal entry.</p>
       <p class="meta-line">${counts} · <a href="${BASE}ru/">Читать по-русски</a></p>
       <p class="meta-line">New: <a href="${TUTORIAL}">Three.js from Scratch</a>, my tutorial series on 3D for the web →</p>`
    : `<p class="eyebrow">Блог · 2007–2012</p><h1>Заметки о математике, физике и программировании</h1>
       <p class="lead">${posts.length} записей из моего старого ЖЖ — оригиналы с картинками и разметкой. У каждой есть английский перевод и ссылка на исходную запись.</p>
       <p class="meta-line">${counts} · <a href="${BASE}">Read in English</a></p>
       <p class="meta-line">Новое: <a href="${TUTORIAL}">Three.js from Scratch</a>, серия туториалов по 3D в браузере (на английском) →</p>`;
  return layout({
    lang, title: lang === 'en' ? 'Blog — Mike Smahin' : 'Блог — Mike Smahin',
    desc: lang === 'en' ? 'Old blog posts about mathematics, physics and programming, translated from Russian.' : 'Старые записи о математике, физике и программировании.',
    canonical: `${BASE}${lang === 'ru' ? 'ru/' : ''}`, alt: { lang: other, href: `${BASE}${other === 'ru' ? 'ru/' : ''}` },
    body: `<section class="hero">${intro}</section><section class="list"><ul class="posts">${list}</ul></section>`,
  });
}

function postPage(p, lang) {
  const t = p[lang];
  const html = md.render(fixLinks(t.body, lang));
  const other = lang === 'en' ? 'ru' : 'en';
  const otherHref = `${BASE}${other === 'ru' ? 'ru/' : ''}${p.slug}/`;
  const links = lang === 'en'
    ? `<a class="btn" href="${otherHref}">Original (RU)</a><a class="btn" href="${p.lj}" target="_blank" rel="noopener">LiveJournal ↗</a>`
    : `<a class="btn" href="${otherHref}">English version</a><a class="btn" href="${p.lj}" target="_blank" rel="noopener">Запись в ЖЖ ↗</a>`;
  const note = lang === 'en'
    ? `<p class="note">Translated from Russian. Originally published on ${fmtDate(p.date, 'en')} as “${esc(p.ru.title)}”.</p>` : '';
  const idx = posts.indexOf(p);
  const newer = posts[idx - 1], older = posts[idx + 1];
  const pre = lang === 'ru' ? 'ru/' : '';
  const pager = `<nav class="pager">${older ? `<a href="${BASE}${pre}${older.slug}/">← ${esc(older[lang].title)}</a>` : '<span></span>'}${newer ? `<a href="${BASE}${pre}${newer.slug}/">${esc(newer[lang].title)} →</a>` : '<span></span>'}</nav>`;
  const plain = t.body.replace(/[#*_>`\[\]()!$\\]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 160);
  return layout({
    lang, title: `${t.title} — Mike Smahin`, desc: plain, canonical: `${BASE}${pre}${p.slug}/`,
    alt: { lang: other, href: otherHref },
    body: `<article class="post">
  <header class="post-head">
    <p class="eyebrow"><a href="${BASE}${pre}">${lang === 'en' ? '← All posts' : '← Все записи'}</a></p>
    <h1>${esc(t.title)}</h1>
    <p class="meta-line"><time datetime="${p.date.slice(0, 10)}">${fmtDate(p.date, lang)}</time></p>
    ${chips(p, lang)}
    <div class="links">${links}</div>
    ${note}
  </header>
  <div class="prose">${html}</div>
  <div class="links end">${links}</div>
  ${pager}
</article>`,
  });
}

function write(rel, content) {
  const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content);
}
fs.rmSync(OUT, { recursive: true, force: true });
write('index.html', indexPage('en'));
write('ru/index.html', indexPage('ru'));
for (const p of posts) { write(`${p.slug}/index.html`, postPage(p, 'en')); write(`ru/${p.slug}/index.html`, postPage(p, 'ru')); }
fs.cpSync(path.join(ROOT, 'images'), path.join(OUT, 'images'), { recursive: true });
fs.cpSync(path.join(ROOT, 'site/style.css'), path.join(OUT, 'assets/style.css'));
const kd = path.join(ROOT, 'node_modules/katex/dist');
fs.mkdirSync(path.join(OUT, 'assets/katex'), { recursive: true });
fs.cpSync(path.join(kd, 'katex.min.css'), path.join(OUT, 'assets/katex/katex.min.css'));
fs.cpSync(path.join(kd, 'fonts'), path.join(OUT, 'assets/katex/fonts'), { recursive: true });
write('.nojekyll', '');
for (const [from, to] of Object.entries(REDIRECTS)) {
  write(from.endsWith('/') ? `${from}index.html` : from, `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved</title>
<link rel="canonical" href="${SITE}${to}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash);</script>
</head>
<body style="background:#0b0d12;color:#e7eaf0;font:16px system-ui,sans-serif;padding:40px">
<p>This page has moved to <a style="color:#7cf5d4" href="${to}">${SITE}${to}</a>.</p>
</body>
</html>
`);
}
write('404.html', layout({ lang: 'en', title: 'Not found', desc: '', canonical: BASE, body: `<section class="hero"><h1>404</h1><p class="lead"><a href="${BASE}">Back to the blog</a></p></section>` }));
console.log(`built ${posts.length} posts × 2 languages -> dist/`);
