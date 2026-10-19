---
title: "Big Lint Party"
date: 2008-04-27T11:39:00+03:00
lang: en
slug: big-lint-party
topic: programming
tags: [programming, software, C/C++]
original_title: "Big lint party"
original_url: https://iodiot.livejournal.com/29437.html
---

Quantity rarely goes hand in hand with quality. And code, the main product of the programming industry, is certainly no exception — C/C++ code even less so. Ah!.. how many bugs I've already seen, and how many more are waiting for me.

Back in the day I discovered an interesting utility in FreeBSD called lint. The manual said it was a truly remarkable program that would help you — verbatim — *keep your C code lint clean*. Now I understand what those words mean, because lint is the highest degree of C-code cleanliness. The utility could catch any ambiguous construct: sketchy pointer passing, missing initialization, implicit type conversions, and so on and so forth. It's strange that lint isn't part of standard compiler implementations. Writing lint-clean code is hard, of course — but then even your first **hello world\n** took a certain effort.

All good, but lint refused to understand C++ code, which was sad, though expected. And only today, out there on the web, I was happy to discover [PC Lint](http://www.gimpel.com/html/products.htm), a program that checks C/C++ code and has picked up a pile of new features. The program isn't free, but at [this](http://gimpel-online.com/cgi-bin/genPage.py?srcFile=diy.cpp&cgiScript=analyseCode.py&title=Blank+Slate+%28C%2B%2B%29+&intro=An+empty+page+in+which+to+write+your+own+C%2B%2B+code.&compilerOption=co-gcc.lnt+co-gnu3.lnt&includeOption={{quotedIncludeOption}}) link there is a form for test-checking your own code. By the way, the site also has an amusing [bug of the month](http://www.gimpel.com/html/bugs.htm) section.

![](../../images/big-lint-party-1.gif)

That's not all. In the book *Expert C Programming* (van der Linden) I once read a short story with the grand title **The SunOS Lint Party**. Verbatim:

> The SunOS development team is justly proud of our lint-clean kernel. We'd paid a lot of attention to getting the 4.x kernel to pass through lint with no errors, and we kept it that way. When we changed our source base from BSD UNIX to SVR4 in 1991, we inherited new kernel whose lint status was unknown. We decided to lint the SVR4 kernel.
>
> This activity took place over several weeks and was known as the "lint party." It yielded about 12,000 unique lint warnings, each of which had to be investigated and corrected manually. By the end, changes had been made to about 750 source files, and the task had become known as "the lint merge from hell". Most of the lint messages just needed an explicit cast, or lint comment, but there were several real bugs shaken out by the process:
>
> - Argument types transposed between function and call.
> - A function that was passed one argument, but expected three, and took junk off the stack. Finding this cured an intermittent data corruption problem in the streams subsystem.
> - Variables used before being set.
>
> The value is not just in removing existing bugs, but in preventing new bugs from contaminating the source base. We now keep the kernel lint-clean by requiring all source changes or additions to be run through lint and cstyle. In this way we have not only removed existing bugs, but are reducing the number of future bugs as well.
