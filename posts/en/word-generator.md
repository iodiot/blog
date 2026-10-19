---
title: "Word Generator"
date: 2007-11-08T11:14:00+03:00
lang: en
slug: word-generator
topic: mathematics
tags: [computer science, math]
original_title: "Генератор слов"
original_url: https://iodiot.livejournal.com/15277.html
---

When people ask me about my favorite number, I always answer 23. And when the question is broadened to "numbers", then of course it's the **Fibonacci** numbers.

I came across this problem:

> *The automaton shown in the figure builds the words of a certain sequence. The initial state of the automaton is 1, and the accepting states are {1, 2}. Determine how many different words N(n) are accepted by the automaton, depending on the word length n.*
>
> ![](../../images/word-generator-1.gif)

So only one word of length 1 can be produced — "a"; two words of length 2 — "aa" and "ab"; three words of length 3; five words of length 4...

A child's problem. A generated word can end either in "a" or in "b". In the latter case we can simply drop the final "b" and get a word of length n−1, and correspondingly N(n−1) variants. If the word ends in "a", then the second-to-last symbol must also be "a", so we can drop two symbols from the end and get N(n−2) variants. Hence

$$N(n) = N(n-1) + N(n-2), \qquad N(0) = N(1) = 1,$$

so the number of words of length n corresponds to the n-th Fibonacci number.

Nothing special, really. But it's simply amazing in how many discrete problems (and not only discrete ones) you meet binomial coefficients, Bernoulli numbers, Euler numbers, and, once again, Fibonacci numbers.

I strained my memory and recalled that in **unix** this automaton corresponds to the following regular expression: **'\\(a\\+b\\)\\+'**.
