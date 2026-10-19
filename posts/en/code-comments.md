---
title: "// the below code needs to be commented out"
date: 2012-10-17T13:25:00+03:00
lang: en
slug: code-comments
topic: programming
tags: [programming]
original_title: "// the below code needs to be commented out"
original_url: https://iodiot.livejournal.com/45067.html
---

So, comments in source code! They don't matter to the compiler, but they matter to a living human being: they serve as a guiding thread through the convoluted world of operators, functions and classes. Code richly sprinkled with comments shines with clarity and reason, and there's an opinion that you can never have too many comments. Or can you? It's worth figuring out.

It should be noted that nothing said above or below claims any scientific novelty. Dozens of excellent essays, blog posts, forum messages and even book chapters have been written about comments. Practically every well-known programmer has spoken out on the subject. And even I, if memory serves, have already written about it once, although all hundred billion of my neurons refuse to remember it.

Any serious study should begin with a historical digression. Without doubt the most famous comment was left by Pierre de Fermat in the margin of Diophantus's *Arithmetica*:

> On the contrary, it is impossible to separate a cube into two cubes, or a fourth power into two fourth powers, or in general any power higher than the second into two like powers. I have discovered a truly marvelous proof of this, which this margin is too narrow to contain.

Fermat was spot on: it took Andrew Wiles half his life and several volumes of mathematical derivations to finally prove that jaw-breaking theorem.

But back to the original question. Can there be too many comments? Can you overdo this noble pursuit? Of course:

```csharp
// This method takes two integer values and adds them together via the built-in
// .NET functionality. It would be possible to code the arithmetic function
// by hand, but since .NET provides it, that would be a waste of time
private int Add(int i, int j) // i is the first value, j is the second value
{
    // this statement performs the add functionality using the + operator on the two
    // parameter values, and then returns the result to the calling function
    return i + j;
}
```

This is an extreme case, but a fairly common one. Comments stop doing their job when their volume is comparable to the volume of the code. They tell you nothing new at all and only clutter the limited information space of a single screen. It's easy to fall into the opposite extreme and write magic code that contains not a single literary flourish but does hold the ultimate [answer to the ultimate question of life, the universe, and everything](https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker's_Guide_to_the_Galaxy):

```c
next = next * 1103515245 + 12345;
unsigned int r = ((unsigned int)(next / 65536) % 32768);
printf("r = %u\n", r);
```

Everything in this code is fine, except that it's not very clear what it does. A lonely comment saves the day:

```c
// calculate next pseudorandom number
next = next * 1103515245 + 12345;
unsigned int r = ((unsigned int)(next / 65536) % 32768);
printf("r = %u\n", r);
```

There's a fleeting feeling that the goal has been achieved. A few lines of non-obvious code are accompanied by a comment that completely clarifies the situation. Could one wish for more? One could:

```c
unsinged int random()
{
  next = next * 1103515245 + 12345;
  return ((unsigned int)(next / 65536) % 32768);
}

printf("r = %u\n", random());
```

It turns out that **the best comment is no comment at all**, because the code itself is the ideal comment — good code, at least. Every time you feel the indecent urge to write a comment, it's a sure sign that refactoring is needed here. A rule of thumb crystallized in my head long ago: *the number of words in any given comment is proportional to the probability of its deletion in the foreseeable future*. As a friend of mine says: "trust me". But don't forget that all generalizations are dangerous, even… well, you know.

All this fits nicely with the classic programmer joke in which Sherlock Holmes and his colleague Watson, flying in a hot-air balloon, ask a lonely goatherd where they are. "In a hot-air balloon, sir." Holmes concluded that the man was a programmer, because, first, he gave an absolutely precise answer and, second, an absolutely useless one. I feel the same emotions when I see something like this:

```c
// increment value by one
i++;
```

For those reading these lines, English is most likely not a native language. That adds extra problems. It's one thing to master the keywords and write concise programs, quite another to compose sensible comments in the native tongue of the English queen. It often happens that you think in Russian, compose a statement in your head that describes the matter precisely, but the difficulties of translation make their adjustments, and in the end a splendid statement turns into a tautology. Self-documenting code wins again, since it lets you keep comments to a minimum — but of course that doesn't remove the problem of naming variables, functions, classes and other structural units.

![commented](../../images/code-comments-1.png "commented")

Comments, like all other obvious and convenient things, had to be invented by someone. I wondered whether history remembers the first comment in source code. I tried to find material, but nothing came of it. Most likely the claim to being first can always be disputed, and the question itself doesn't make much sense. But probably no one will argue that the golden age of comments fell on the years of assembly language's undivided rule. After all, endless sheets of monotonous code without human remarks were simply impossible to take in.

The situation improved dramatically with the arrival of C-like languages. From then on, code began to resemble a digestible story rather than Maya manuscripts encrypted with an Enigma machine. Accordingly, the role of comments shrank as well, since programmers acquired new and powerful means of expression. The arrival of object-oriented languages only reinforced the trend.

I've offered these last musings in support of the idea that modern languages generally provide enough expressive means to write understandable code without the customary comments. Only one thing remains: use those means and make the world a better place. There's a good piece of advice: write code as if it will be read by a serial killer maniac. It may well be that an inappropriate comment is the last straw.

For those who have tender feelings for comments, I can recommend visiting this discussion: ["What is the best comment in source code you have ever encountered?"](http://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered). That's where I got the title for this post, and that's also where I took the following quote:

```c
//
// Dear maintainer:
//
// Once you are done trying to 'optimize' this routine,
// and have realized what a terrible mistake that was,
// please increment the following counter as a warning
// to the next guy:
//
// total_hours_wasted_here = 42
//
```
