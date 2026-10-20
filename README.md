# Blog — 3D, math, physics & programming

**Live:** https://iodiot.github.io/blog/ · [по-русски](https://iodiot.github.io/blog/ru/)

## Tutorials: Three.js, WebGL & WebGPU

A new step-by-step series on 3D for the web, in English, with live demos.

| Date | Article | Demo |
|---|---|---|
| 2026-10-20 | [Three.js from Scratch, Part 1: Your First Scene](https://iodiot.github.io/blog/threejs-first-scene/) | [live](https://iodiot.github.io/blog/demos/threejs-01/) · [code](demos/threejs-01/) |

## Archive

Posts I wrote in Russian on my LiveJournal ([iodiot.livejournal.com](https://iodiot.livejournal.com/)) between 2007 and 2012, restored with their original formatting and images, plus English translations. Only the posts about mathematics, physics and programming are here.

## Layout

```
posts/tutorials/<slug>.md  new English-only articles (Markdown + inline HTML for figures and demos)
demos/<name>/              standalone live demos used by the tutorials, copied as-is
posts/ru/<slug>.md   original post (Markdown, front matter keeps date, tags, LiveJournal URL)
posts/en/<slug>.md   English translation
images/              all images (archive posts: downloaded from the originals; images/threejs-01/: tutorial diagrams and screenshots)
site/style.css       styles
build.mjs            static site builder (markdown-it + KaTeX + highlight.js)
```

Build: `npm install && npm run build` writes the site to `dist/`, which is published on the `gh-pages` branch.

Formulas that were images in the originals are typeset with KaTeX. Where an original image is no longer online, the post keeps a note with its old URL.

## Posts (34)

| Date | English | Original (RU) | Topic | Source |
|---|---|---|---|---|
| 2012-10-23 | [You Don't Like Math? Then We're Coming to You](https://iodiot.github.io/blog/dont-like-math/) | [Вы не любите математику? Тогда мы идем к вам](https://iodiot.github.io/blog/ru/dont-like-math/) | mathematics | [LJ](https://iodiot.livejournal.com/46266.html) |
| 2012-10-19 | [OBFUSCATED](https://iodiot.github.io/blog/obfuscated/) | [ОБФУСЦИРОВАНО](https://iodiot.github.io/blog/ru/obfuscated/) | programming | [LJ](https://iodiot.livejournal.com/45725.html) |
| 2012-10-17 | [// the below code needs to be commented out](https://iodiot.github.io/blog/code-comments/) | [// the below code needs to be commented out](https://iodiot.github.io/blog/ru/code-comments/) | programming | [LJ](https://iodiot.livejournal.com/45067.html) |
| 2012-10-10 | [Per Aspera ad Astra](https://iodiot.github.io/blog/per-aspera-ad-astra/) | [Через тернии к звездам](https://iodiot.github.io/blog/ru/per-aspera-ad-astra/) | physics & space | [LJ](https://iodiot.livejournal.com/44659.html) |
| 2012-10-05 | [Mark V. Shaney](https://iodiot.github.io/blog/mark-v-shaney/) | [Mark V. Shaney](https://iodiot.github.io/blog/ru/mark-v-shaney/) | programming | [LJ](https://iodiot.livejournal.com/43398.html) |
| 2012-10-05 | [How Do You Draw a Wall?](https://iodiot.github.io/blog/how-to-draw-a-wall/) | [Как нарисовать стену?](https://iodiot.github.io/blog/ru/how-to-draw-a-wall/) | programming | [LJ](https://iodiot.livejournal.com/43080.html) |
| 2012-10-02 | [So How Do You Use Your GPU?](https://iodiot.github.io/blog/how-do-you-use-your-gpu/) | [А как вы используете свой GPU?](https://iodiot.github.io/blog/ru/how-do-you-use-your-gpu/) | programming | [LJ](https://iodiot.livejournal.com/42637.html) |
| 2010-10-12 | [The Year 11111011100](https://iodiot.github.io/blog/year-11111011100/) | [11111011100 год](https://iodiot.github.io/blog/ru/year-11111011100/) | physics & space | [LJ](https://iodiot.livejournal.com/40305.html) |
| 2010-10-10 | [Quantum Leap](https://iodiot.github.io/blog/quantum-leap/) | [Квантовый скачок](https://iodiot.github.io/blog/ru/quantum-leap/) | physics & space | [LJ](https://iodiot.livejournal.com/40057.html) |
| 2010-09-16 | [The Fractal Geometry of Nature](https://iodiot.github.io/blog/fractal-geometry-of-nature/) | [Фрактальная геометрия природы](https://iodiot.github.io/blog/ru/fractal-geometry-of-nature/) | mathematics | [LJ](https://iodiot.livejournal.com/39387.html) |
| 2010-08-31 | [The Return](https://iodiot.github.io/blog/the-return/) | [Возвращение](https://iodiot.github.io/blog/ru/the-return/) | physics & space | [LJ](https://iodiot.livejournal.com/38776.html) |
| 2010-08-30 | [Sound in a Vacuum](https://iodiot.github.io/blog/sound-in-a-vacuum/) | [Звук в вакууме](https://iodiot.github.io/blog/ru/sound-in-a-vacuum/) | physics & space | [LJ](https://iodiot.livejournal.com/38441.html) |
| 2010-08-25 | [Stories About Hilbert](https://iodiot.github.io/blog/hilbert-stories/) | [Истории про Гильберта](https://iodiot.github.io/blog/ru/hilbert-stories/) | mathematics | [LJ](https://iodiot.livejournal.com/38386.html) |
| 2010-08-15 | [Feynman, the Shuttle and Ice Water](https://iodiot.github.io/blog/feynman-shuttle-ice-water/) | [Фейнман, шаттл и вода со льдом](https://iodiot.github.io/blog/ru/feynman-shuttle-ice-water/) | physics & space | [LJ](https://iodiot.livejournal.com/37273.html) |
| 2010-08-08 | [Moon Dust and the Collapse of Modern Science](https://iodiot.github.io/blog/moon-dust/) | [Лунная пыль и крах современной науки](https://iodiot.github.io/blog/ru/moon-dust/) | physics & space | [LJ](https://iodiot.livejournal.com/36928.html) |
| 2010-08-03 | [Fear and Loathing in the Rings of Saturn](https://iodiot.github.io/blog/saturn-rings/) | [Страх и ненависть в кольцах Сатурна](https://iodiot.github.io/blog/ru/saturn-rings/) | physics & space | [LJ](https://iodiot.livejournal.com/36345.html) |
| 2010-07-31 | [Apollo and the Moon Myths](https://iodiot.github.io/blog/apollo-moon-myths/) | [Аполлон и лунные легенды](https://iodiot.github.io/blog/ru/apollo-moon-myths/) | physics & space | [LJ](https://iodiot.livejournal.com/35662.html) |
| 2010-07-28 | [The Birth of Complexity](https://iodiot.github.io/blog/birth-of-complexity/) | [Рождение сложности](https://iodiot.github.io/blog/ru/birth-of-complexity/) | physics & space | [LJ](https://iodiot.livejournal.com/35437.html) |
| 2010-06-13 | [Unnatural Selection](https://iodiot.github.io/blog/unnatural-selection/) | [Не естественный отбор](https://iodiot.github.io/blog/ru/unnatural-selection/) | programming | [LJ](https://iodiot.livejournal.com/32902.html) |
| 2008-04-27 | [Program Evolution](https://iodiot.github.io/blog/program-evolution/) | [Program evolution](https://iodiot.github.io/blog/ru/program-evolution/) | programming | [LJ](https://iodiot.livejournal.com/29522.html) |
| 2008-04-27 | [Big Lint Party](https://iodiot.github.io/blog/big-lint-party/) | [Big lint party](https://iodiot.github.io/blog/ru/big-lint-party/) | programming | [LJ](https://iodiot.livejournal.com/29437.html) |
| 2008-04-12 | [Mathematical Freedom](https://iodiot.github.io/blog/mathematical-freedom/) | [Математическая свобода](https://iodiot.github.io/blog/ru/mathematical-freedom/) | mathematics | [LJ](https://iodiot.livejournal.com/28674.html) |
| 2008-02-11 | [Elegant Whitespace](https://iodiot.github.io/blog/elegant-whitespace/) | [Изящный пробел](https://iodiot.github.io/blog/ru/elegant-whitespace/) | programming | [LJ](https://iodiot.livejournal.com/24655.html) |
| 2008-01-05 | [What's in Your Number?](https://iodiot.github.io/blog/whats-in-your-number/) | [Что в номере твоём?](https://iodiot.github.io/blog/ru/whats-in-your-number/) | mathematics | [LJ](https://iodiot.livejournal.com/18998.html) |
| 2007-11-21 | [The Philosophy of Programs](https://iodiot.github.io/blog/philosophy-of-programs/) | [Философия программ](https://iodiot.github.io/blog/ru/philosophy-of-programs/) | programming | [LJ](https://iodiot.livejournal.com/15893.html) |
| 2007-11-08 | [Word Generator](https://iodiot.github.io/blog/word-generator/) | [Генератор слов](https://iodiot.github.io/blog/ru/word-generator/) | mathematics | [LJ](https://iodiot.livejournal.com/15277.html) |
| 2007-11-06 | [An Ordinary Series](https://iodiot.github.io/blog/an-ordinary-series/) | [Обычный ряд](https://iodiot.github.io/blog/ru/an-ordinary-series/) | mathematics | [LJ](https://iodiot.livejournal.com/14433.html) |
| 2007-10-23 | [The Monkey and the Weight](https://iodiot.github.io/blog/monkey-and-weight/) | [Обезьяна и груз](https://iodiot.github.io/blog/ru/monkey-and-weight/) | mathematics | [LJ](https://iodiot.livejournal.com/13156.html) |
| 2007-10-05 | [A Couple of Glitches](https://iodiot.github.io/blog/a-couple-of-glitches/) | [Пара глюков](https://iodiot.github.io/blog/ru/a-couple-of-glitches/) | programming | [LJ](https://iodiot.livejournal.com/10547.html) |
| 2007-09-12 | [Magicicada](https://iodiot.github.io/blog/magicicada/) | [Magicicada](https://iodiot.github.io/blog/ru/magicicada/) | mathematics | [LJ](https://iodiot.livejournal.com/8446.html) |
| 2007-09-02 | [Solve This](https://iodiot.github.io/blog/solve-this/) | [Solve this](https://iodiot.github.io/blog/ru/solve-this/) | mathematics | [LJ](https://iodiot.livejournal.com/7699.html) |
| 2007-08-23 | [leaf.gif](https://iodiot.github.io/blog/leaf-gif/) | [leaf.gif](https://iodiot.github.io/blog/ru/leaf-gif/) | mathematics | [LJ](https://iodiot.livejournal.com/7074.html) |
| 2007-08-09 | [The Analytical Engine](https://iodiot.github.io/blog/analytical-engine/) | [Аналитическая машина](https://iodiot.github.io/blog/ru/analytical-engine/) | mathematics | [LJ](https://iodiot.livejournal.com/4795.html) |
| 2007-08-05 | [A Cute Formula](https://iodiot.github.io/blog/a-cute-formula/) | [Милая формула](https://iodiot.github.io/blog/ru/a-cute-formula/) | mathematics | [LJ](https://iodiot.livejournal.com/4282.html) |

## License

Text and images © Mike Smahin unless noted otherwise (quoted passages and third-party images belong to their authors). Build code: MIT.
