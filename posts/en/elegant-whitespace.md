---
title: "Elegant Whitespace"
date: 2008-02-11T22:26:00+03:00
lang: en
slug: elegant-whitespace
topic: programming
tags: [thoughts, programming, philosophy]
original_title: "Изящный пробел"
original_url: https://iodiot.livejournal.com/24655.html
---

Where philosophers of old loved to pen (with a stick?) treatises on the relation between the material and the ideal, the concrete and the abstract, asked questions like "is there a god under the moon" or "how finite is the infinite", singled out concepts and built ontologies… today's new philosophers — the philosophers of programming — have simply flooded the rubber Internet with articles on project management, on applying design patterns, on how sensible OOP principles are, on their language preferences and, finally, on programming styles. Let's talk about the last of these.

It's funny: if you think about it, a programming style is just a set of rules for placing ' ', '\n' and '\t'. Sometimes block delimiters such as '{' and '}' and naming rules get added. But the compiler, as we know, couldn't care less about style — unlike the poor tired programmers. I didn't write such a convoluted first paragraph for nothing, because I, too, read an article about programming in general that denounced pseudo-coders who neglect spaces and line breaks, and fanatics who start *holy wars* over such a subtle topic as… style! And so a thought appeared.

Consider a classic example:

```c
#include <stdio.h> int main() { int x; scanf("%d", &x); if(x>0) printf("hello\n"); return 0; }
```

Everything looks familiar, yet something is off — the cherished staircase of indentation is missing. The example is exaggerated, but it works. Of course, only the most desperate guys write everything on one line; the rest just quietly add an extra space here and there, forget about tabs, and give variables absurd names. That's the root of the problem: because of trivial formatting, the time it takes to make sense of someone else's code grows by an order of magnitude.

For example, I know perfectly well that a **C/C++** compiler will never manage code like this:

```c
if a > b {
    a = b;
}
```

Right — the parentheses around the condition are missing, and so every programmer is obliged to put them in, unless of course he writes code for some masochistic reasons. Let's extend the idea and ask ourselves: why not formalize style itself and forbid redundant lexical constructs, such as this one:

```c
if(a > b) a = b;
```

Let this code now fail to compile because there's no space between "if" and '('. It should also be required that the statements after a condition, even if there is only one, be enclosed in a block — we know what such negligence can sometimes lead to. In other words, code like this should always look like this (or at least produce a *warning*):

```c
if (a > b) {
    a = b;
}
```

And there's nothing terrible about that. It's not an infringement of rights or the collapse of democratic foundations — quite the opposite, it's care for the person who may one day look into your code. Is it really that hard to ALWAYS write constants in capital letters, indent properly, give variables sane names, separate operands from operators… Style rules are usually described in the documentation by the developers of the language themselves. At one point I looked through the *Java and C/C++ code conventions*, changed my habits a little, and it was all for the better, honest.

By the way, the developers of **Python** have historically held a similar view. Quote: *"One of the interesting syntactic features of the language is that code blocks are delimited by indentation (spaces or tabs), so Python has no begin/end statement brackets as in Pascal, nor curly braces as in C. This 'trick' noticeably reduces the number of lines and characters in a program."* An example and all the details are at the [link](http://ru.wikipedia.org/wiki/Python).

Natural languages have similar problems too. Just the other day [miri\_on\_air](https://miri_on_air.livejournal.com/) and I were talking about the usefulness or uselessness of the Russian letter **Ё**. And I don't understand why the letter Ё should be thrown in the trash if, at the very least, it improves the readability of a text. Especially since in speech Ё is always pronounced — so why this discrepancy between writing and speech? In short, I'm for making Ё mandatory by rule, by analogy with all of the above.

**[update]** It wouldn't hurt to introduce standards for smileys too — I'm sick of the retrograde bracket-folk with a single ')' and the "metrograde" folk with the extended ":-)" version. Just kidding, but the first variant should be banned so we stop seeing such frequent bracket parades as ")))))))".
