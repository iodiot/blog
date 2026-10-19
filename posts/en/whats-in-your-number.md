---
title: "What's in Your Number?"
date: 2008-01-05T22:44:00+03:00
lang: en
slug: whats-in-your-number
topic: mathematics
tags: [LiveJournal, math, statistics]
original_title: "Что в номере твоём?"
original_url: https://iodiot.livejournal.com/18998.html
---

**I wonder** whether anyone has tried to statistically analyze the numbers LiveJournal assigns to new posts. Never mind. I'll give it a try :)

My journal has only 60-odd posts; the link to the second-to-last one looks like this: *http://iodiot.livejournal.com/18857.html*. Accordingly, this post's unique number is 18857. You've probably noticed that the numbers are fairly large. Most likely this was done on purpose, for the psychological comfort of bloggers — *usability*, so to speak.

Post numbers increase monotonically but are not consecutive, i.e. the numbers of neighboring posts differ by **more** than one. That makes sense. Otherwise, say, I visit an unfamiliar journal, see the last two posts numbered 98 and 100, and can say almost for certain that between them (i.e. in that time interval) there is either a hidden post or an old one that was permanently deleted. *Privacy*, damn it.

Closer to the point. Let's take the numbers of my last 50 posts; here they are:

```text
 4795   4956   5194   5687   6132   6610   6717
 7074   7479   7699   8181   8446   8630   8951
 9034   9222   9617   9775  10237  10435  10547
10863  11121  11399  11762  11814  12084  12337
12761  13156  13378  13593  13988  14271  14433
14672  15016  15277  15360  15831  15893  16230
16581  16894  16998  17270  17974  18384  18540
18857
```

I don't know what to do with these numbers. So let's take the differences between neighboring numbers; there are 49 of them:

```text
161  238  493  445  478  107  357  405  220  482  265  184  321   83  188
395  158  462  198  112  316  258  278  363   52  270  253  424  395  222
215  395  283  162  239  344  261   83  471   62  337  351  313  104  272
704  410  156  317
```

Now that's more interesting. Let's start simple: compute the maximum, minimum, mean, standard deviation and variance, and plot a histogram of the values:

```text
max = 704
min =  52
mx  = 286.9796
sx  = 136.0748
dx  = 1.8516e+004
```

The **max** came out suspiciously large — I'll tell you a secret: I deleted some posts. By the way, the **min** is odd too. I also wonder why **mx**, the mean, is so large; maybe ideally it was the eighth power of two.

Now let's build a histogram, which simply shows how many elements of the sample fall into each interval. Why? To test one assumption: that the LJ engine generates new post numbers like this — take the number of the latest post so far and add to it another number equal to rand(). And the **hypothesis** is that the generator, i.e. rand() itself, follows the *normal distribution* (the **Gaussian** distribution). A histogram proves nothing, of course, but it certainly visualizes:

![](../../images/whats-in-your-number-1.gif)

An ambiguous result. So let's unleash the **Kolmogorov** and **Pearson** tests, one after the other, to check our hypothesis. Reminder: we're testing for normality. The Kolmogorov test looks for the maximum difference between the empirical and theoretical distributions; here the difference equals 1, and **Matlab** says it's hopeless. Pearson agrees with it; here is the *output* for anyone interested:

```text
test = 0
stats =
    chi2stat: 2.4727
    df: 3
    edges: [1x7 double]
    O: [14 5 7 4 5 15]
    E: [12.0782 6.0285 6.8087 6.8187 6.0550 12.2108]
```

**Summing up.** The LiveJournal engine generates post numbers smartly: the *privacy* and *usability* tests are passed. But the hypothesis that LJ uses a random number generator following the *normal law* was not confirmed. Then again, the whole thing may be that the sample is weak and unrepresentative, and that historically deleted posts added their own variance…

**[update]** Together with [amikhailov](https://amikhailov.livejournal.com/) we found the algorithm that generates new post numbers. The trick is that it uses the sequential numbers of posts in the journal, i.e. 1, 2, 3... In short, here's the formula:

```c
post_number = (prev_post_order + 1) * 256 + rand(256);
```

In other words, take the sequential number of the previous post, add one, multiply by 256, and then add a random number from the range 0..255. For example, the numbers of the first and second posts will be 1·256 + rand(256) and 2·256 + rand(256), respectively.
