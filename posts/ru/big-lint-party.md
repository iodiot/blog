---
title: "Big lint party"
date: 2008-04-27T11:39:00+03:00
lang: ru
slug: big-lint-party
topic: programming
tags: [интересное, программинг, софт, текст]
original_url: https://iodiot.livejournal.com/29437.html
---

Количество обычно редко идёт в ногу с качеством. И код, как главный продукт индустрии программирования, уж точно не является исключением, тем более C/C++ код. Эх!.. сколько ошибок успел я повидать и сколько ещё меня ожидают.

Когда-то во FreeBSD я обнаружил интересную утилиту lint. В справке говорилось, что это поистине замечательная программа, которая поможет дословно: *keep* *your* *C* *code* *lint* *clean*.  Теперь я уже понимаю смысл упомянутых слов, потому что lint — это высшая степень чистоты C-кода. Утилита позволяла отлавливать любые неоднозначные конструкции: стрёмную передачу указателей, отсутствие той или иной инициализации, неявное приведение типов и т.д. и т.п. Странно, что lint не входит в стандартные реализации компиляторов. Писать lint clean code, конечно же, сложно, но ведь и первый **hello world\n** требовал известных усилий.

Всё хорошо, но lint отказывался понимать С++ код, и это было печально, хотя и ожидаемо. И вот только сегодня на просторах я с радостью обнаружил программу [PC Lint](http://www.gimpel.com/html/products.htm), которая проверяет С/C++ код и которая обзавелось кучей новых возможностей. Программа не бесплатная, но вот по [этой](http://gimpel-online.com/cgi-bin/genPage.py?srcFile=diy.cpp&cgiScript=analyseCode.py&title=Blank+Slate+%28C%2B%2B%29+&intro=An+empty+page+in+which+to+write+your+own+C%2B%2B+code.&compilerOption=co-gcc.lnt+co-gnu3.lnt&includeOption={{quotedIncludeOption}}) ссылке доступна форма для тестовой проверки вашего кода. Кстати, на сайте ещё присутствует занятный раздел [bug of the month](http://www.gimpel.com/html/bugs.htm).

![](../../images/big-lint-party-1.gif)

Это ещё не всё. В книге *«**Expert* *C* *programming»* (Linden) я когда-то вычитал небольшой рассказ под громким названием **The SunOS Lint Party**. Дословно:

The SunOS development team is justly proud of our lint-clean kernel. We'd paid a lot of attention to getting the 4.x kernel to pass through lint with no errors, and we kept it that way. When we changed our source base from BSD UNIX to SVR4 in 1991, we inherited new kernel whose lint status was unknown. We decided to lint the SVR4 kernel.

This activity took place over several weeks and was known as the "lint party." It yielded about 12,000 unique lint warnings, each of which had to be investigated and corrected manually. By the end, changes had been made to about 750 source files, and the task had become known as "the lint merge from hell". Most of the lint messages just needed an explicit cast, or lint comment, but there were several real bugs shaken out by the process:

- Argument types transposed between function and call.
- A function that was passed one argument, but expected three, and took junk off the stack. Finding this cured an intermittent data corruption problem in the streams subsystem. \
- Variables used before being set.

The value is not just in removing existing bugs, but in preventing new bugs from contaminating the source base. We now keep the kernel lint-clean by requiring all source changes or additions to be run through lint and cstyle. In this way we have not only removed existing bugs, but are reducing the number of future bugs as well.
