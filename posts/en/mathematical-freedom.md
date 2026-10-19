---
title: "Mathematical Freedom"
date: 2008-04-12T23:36:00+03:00
lang: en
slug: mathematical-freedom
topic: mathematics
tags: [internet, math, cryptography, thoughts]
original_title: "Математическая свобода"
original_url: https://iodiot.livejournal.com/28674.html
---

*It's not enough to protect ourselves with laws; we need to protect ourselves with mathematics.\
Encryption is too important to be left solely to governments.*\
— Bruce Schneier

There's a good and apt saying: give people any means of communication, and they'll instantly start using it. And it's an endless (r)evolution: speech, writing, radio, telephone, images. It's scary to think that just fifty years ago sharing your momentary thoughts, ideas and opinions wasn't that easy at all. You could dial a number and tell a friend, or even meet somewhere on the street — but your friends already know a lot about you, too much. Right: a thought has to reach strangers, penetrate their minds. But what if they're not interested in your views at all? Only brute force remains.

Let's set thoughts and ideas aside and keep only opinions. About anything: a film you've watched, a book you've read, politics or high society, a person, after all. An opinion is less than a thought or an idea; having your own opinion is pretty easy, and if not, the crowd will always help you. But on the other hand, you have to be able to defend an opinion. Imagine a dirty hippie crossing your path — you just want to shout: *"get lost, hippie"*; or a nasty gym rat spits out another portion of saliva next to you to the sound of trendy gangster pop — anger bursts out, and your hands reach for that thick neck. And if someone disagrees with you in an argument and talking to them is like talking to a wall, don't you want to just give them a good beating? Yes, but…

Brute force, roughly speaking, requires force — a person's inner, self-referential strength. When you turn around and say a weighty *"but"*, you need to be sure that a possible blow will be parried and returned, or vice versa, depending on the context. And we're not always fair in our judgments: you can also just throw mud for no reason, a sacred thing. In short, I'm leading you to the point that in the old days the weight of opinions was often determined by the individual's physical strength rather than by logical formality, i.e. formal logic. The world is rich in extremes, and it should be noted that in the past frailty and old age also often served as decent arguments, degenerating into so-called wisdom.

And then the network struck, and **Arpanet** appeared, and it turned into the **Internet**, which blossomed with forums, blogs, journals, guestbooks, personal pages, social webs and so on and so forth. And there was et cetera. So what changed?

Now it costs nothing to deliver your thought in an instant; a couple of finger movements is usually enough. And opinions are even easier. But the savings are not only in time but also in strength. Don't like someone?.. pour tons of virtual mud on them, bury them in slop made of bytes and kilobytes — nothing will happen to you anyway. Organize rallies and campaigns, deliver ideas, convert judgments: you are all-powerful, my king, and even Goliath and Hercules kneel before **You**. But where is the Achilles' heel?

There isn't one — formally there isn't, and there can't be. You and I are protected by *mathematics*. Boxing has turned into the factorization problem, karate into the discrete logarithm, and no-holds-barred fighting has become elliptic curves altogether. Our personal data is often guarded by the same systems that guarantee national security; the difference, if any, is only quantitative.

And here is where the power lies. There is a function $y = f(x)$ that maps each value $x$ to a specific $y$. Think of $x$ as your secret key (password), and $y$ as your public key, which other people can use without any restriction to send data to you secretly. The example is probably too refined and doesn't quite match the essence of the story, but it's important to understand that in most cases your secrecy is transparent to you: it is provided by the software you use every day.

Let's continue. Our function $f(x)$ is universal: it gives different public keys for different secret keys. **Alice** and **Bob** exchange data calmly, Alice yells at Bob, Bob threatens Alice. And if Bob wants to learn Alice's password and use it to get into her mail and other personal data, all he needs is: a) find the inverse of $f(x)$, i.e. $f^{-1}(y)$; b) plug Alice's public key into the inverse function and learn her secret password. Constructing the inverse function isn't hard, so all it takes is a little magic and… bam!

That's all the magic there is. The inverse function must not allow this to be done in reasonable time. A well-chosen function must generate public keys quickly but behave absolutely terribly in the opposite direction. Here are the three main martial arts of our time:

1. the problem of factoring large numbers;
2. the discrete logarithm problem;
3. the elliptic curve discrete logarithm problem.

These problems (tasks, inverse functions) are what protect us. It's easy to multiply a couple of primes but hard to factor the product; it's easy to raise to a power in a finite field but hard to find the exponent (the logarithm), and so on. We won't go into details, the story doesn't require it; just remember that 2) appeared later than 1), and 3) later than 2). Accordingly: more speed, more security.

And so it turns out that freedom on the Internet has an ideal mathematical nature. Let's remember that.

A lyrical digression. The most popular means of communication is **ICQ**. What do we have there? By default all our information goes through a global server unencrypted, which means it can be stored there without hindrance. Your ICQ password is encrypted with the simplest *xor* over the byte array 0xF3, 0x26, 0x81, 0xC4, 0x39, 0x86, 0xDB, 0x92, 0x71, 0xA3, 0xB9, 0xE6, 0x53, 0x7A, 0x95, 0x7C and turned into the so-called *roasted* form. So there.
