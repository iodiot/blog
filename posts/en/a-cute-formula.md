---
title: "A Cute Formula"
date: 2007-08-05T15:39:00+03:00
lang: en
slug: a-cute-formula
topic: mathematics
tags: [computer science, math, humor]
original_title: "Милая формула"
original_url: https://iodiot.livejournal.com/4282.html
---

Of course I love **Knuth** and his wonderful books. Many people keep them neatly gathering dust on their shelves, where they make excellent stands for anything at all. But I own one more precious book, not as famous as the others, and it is called **Concrete Mathematics**. Some day I will definitely write about this manuscript in more detail. This time I'll just post a piece of a page with a lovely little formula that "organically" popped up somewhere around page 198. Try memorizing that and taking it apart brick by brick...

![](../../images/a-cute-formula-1.jpg)

*Transcription of the page (Russian edition, eq. 5.31):*

$$\begin{aligned}
&\sum_{k_{ij}} (-1)^{\sum_{i<j} k_{ij}} \left(\prod_{1\le i<j<n} \binom{a_i+a_j}{a_j+k_{ij}}\right)\left(\prod_{1\le j<n}\binom{a_j+a_n}{a_n+\sum_{i<j}k_{ij}-\sum_{i>j}k_{ji}}\right) \\
&\qquad = \binom{a_1+\cdots+a_n}{a_1,a_2,\ldots,a_n}, \quad \text{integers } a_1,\ldots,a_n\ge 0. \qquad (5.31)
\end{aligned}$$

This is a sum over $\binom{n-1}{2}$ index variables $k_{ij}$ for $1 \le i < j < n$. Equation (5.29) is just its special case for $n = 3$; for $n = 4$ it can be rewritten as follows, using the notation $(a, b, c, d)$ instead of $(a_1, a_2, a_3, a_4)$ and $(i, j, k)$ instead of $(k_{12}, k_{13}, k_{23})$:

$$\begin{aligned}
&\sum_{i,j,k}(-1)^{i+j+k}\binom{a+b}{b+i}\binom{a+c}{c+j}\binom{b+c}{c+k}\binom{a+d}{d-i-j}\binom{b+d}{d+i-k}\binom{c+d}{d+j+k} \\
&\qquad = \frac{(a+b+c+d)!}{a!\,b!\,c!\,d!}, \quad \text{integers } a,b,c,d \ge 0.
\end{aligned}$$

P.S.: I had to simply turn the page, alas...
