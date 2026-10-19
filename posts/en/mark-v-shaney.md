---
title: "Mark V. Shaney"
date: 2012-10-05T16:29:00+03:00
lang: en
slug: mark-v-shaney
topic: programming
tags: [internet, history, programming, Markov chains]
original_title: "Mark V. Shaney"
original_url: https://iodiot.livejournal.com/43398.html
---

![hal9000](../../images/mark-v-shaney-1.jpg "hal9000")

In the mid-80s a user named Mark V. Shaney left a message in the Usenet group **net.singles**. The group was devoted to love advice and dating, discussions of sexual problems, searching for a soulmate, and idle chatter between people looking for a sexual partner for a couple of evenings. The message:

> I seem to be important. For me, it would have agreed with the technical insight that is dear to me. Because of this, I have no advice for someone in that situation!
>
> Joining Mensa was something I did him one better. I wore a dress skirt a day for one week. I did him one better. I wore a dress skirt a day for a 2 year relationship. I'm wondering if anyone else out there has ever experienced this phenomena, whether it was actually your contention that this is true for me.
>
> I suppose it depends how you felt about someone before you became emotionally attached and therefore "safer" – not to sporting events, but to opera.
>
> I lost 90 lbs a few months during my "flower child" days in high school where, due to her high academic standings, was shunned by many of the tube. The experience really screwed them up — if not their heads, their knees. Why does one have to be the prime measurement of manhood. No?
>
> He was a scrawny, spastic nerd in high school, and I fantasized about such a thing. It all depends on the sidelines, listening to what makes the rest of the guys around her – suddenly finds herself in a situation where guys are asking them out!? But this can result in members of either the person of your dreams (in a larger number of males to females studying the field of engineering), the ratio of males to females is somewhere in the past. And, per the other person.
>
> I find it hard to reconcile the notion that something or someone isn't theirs anymore. I have a date with the woman. Subjectively, I have also acted in this weekend.

That message wasn't the last. Shaney started posting replies in all sorts of threads with enviable regularity. Some found his messages absurd, others funny, and the most desperate tried to find a hidden meaning in them, but few guessed the real state of affairs. Shaney wasn't a human. Shaney was a bot created by three inventors from Bell Labs: Bruce Ellis, Rob Pike and Don Mitchell. The bot analyzed the messages appearing in **net.singles** and, cunningly, always found something to say in reply. Even a person with no IT background should understand that artificial intelligence is an open problem — all the more so in the mid-80s — and **ONE DOES NOT SIMPLY WRITE AN AI** that would greet you in the morning with:

  — Just what do you think you're doing, Dave?

But it all turned out to be much simpler. The bot's very name contained the answer. ["Mark V. Shaney"](http://en.wikipedia.org/wiki/Mark_V_Shaney) is a pun derived from ["Markov Chain"](http://en.wikipedia.org/wiki/Markov_chain). A Markov process. The bot's principle of operation was extremely simple. Shaney learned by reading English text sequentially. It took the first two words and used their concatenation as a table key, and added the third word to the list of possible values. Then it moved one word to the right, and so on to the very end. The secret of success was that many word pairs occur in a text many times, and the generator picked randomly from the list of values, using the last word and the new one as the next key. Words were stored in the table together with punctuation, so Shaney was able to generate English text that looked complete at first glance. More than that, it sometimes gave birth to immortal aphorisms. A possible training step (powered by [asciiflow.com](http://www.asciiflow.com)):

```text
       +------------------+                   +------------------------+
       | See   you   next | Wednesday     See | you   next   Wednesday |
       +------+-----------+                   +----+-------------------+
              |                                    |
              |                                    |
              |                                    |
              |                                    |
              |        +------------+              |         +-------------+
              |        |See+you     |              |         |you+next     |
              +------->|------------|              +-------->|-------------|
                       |next        |                        |Wednesday    |
                       +------------+                        +-------------+
```

I wrote my own version of Mark V. Shaney and fed it Greg Egan's novel *Diaspora*. The results came quickly:

> Riemannian space: A Riemannian space is perpendicular to the electron.

> No holes, no joins -- just a surface with no obvious clues for anyone.

Did you think of [Yandex.Referats](http://referats.yandex.ru/) too (a joke generator of fake Russian academic essays)? You can see [my implementation in C#](http://gist.github.com/3839708) here.

![Untitled](../../images/mark-v-shaney-2.png "Untitled")
