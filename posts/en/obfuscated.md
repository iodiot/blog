---
title: "OBFUSCATED"
date: 2012-10-19T22:26:00+03:00
lang: en
slug: obfuscated
topic: programming
tags: [internet, programming, fractals]
original_title: "ОБФУСЦИРОВАНО"
original_url: https://iodiot.livejournal.com/45725.html
---

Long ago I stumbled upon a very entertaining website on the internet called ["The International Obfuscated C Code Contest"](http://www.ioccc.org/), or "IOCCC".

The goals of the contest:

1. To write the most Obscure/Obfuscated C program within the rules
2. To show the importance of programming style, in an ironic way
3. To stress C compilers with unusual code
4. To illustrate some of the subtleties of the C language
5. To provide a safe forum for poor C code

For those who've been living under a rock, [obfuscation](https://en.wikipedia.org/wiki/Obfuscation_(software)) is the conscious or unconscious process of tangling source code in order to drive its future readers insane. Just like refactoring, obfuscation doesn't change a program's functionality; it only wrecks the organization and appearance of the source code. I still remember a classmate in computer science class copying a "staircase" off my monitor. Well, if you run that process in reverse, you get a primitive example of obfuscation.

Back to the contest. In short, participants have to write the most incomprehensible code possible that nonetheless does something interesting. It's considered especially chic to lay the source code out as ASCII art, ideally with the picture related to what the program does. I decided to try my hand too, and quickly knocked together a program that prints the Mandelbrot set to the console. That was the first step, and here is the output:

```text
                                              ****
                                              ****
                                        *  **********
                                        *****************
                                      *******************
                                     *********************
                           *******  **********************
                          ********* **********************
               *****************************************
                          ********* **********************
                           *******  **********************
                                     *********************
                                      *******************
                                        *****************
                                        *  **********
                                              ****
                                              ****
```

Next I decided to focus not on the obfuscation itself but on the code layout. Formatting code by hand is tedious and slow, so I… that's right, wrote [another program](http://gist.github.com/3920066). It takes two files as input: a template and the code. The template is the output of the previous program, i.e. the Mandelbrot set. The idea is that the new program tries to spread the code out so that it reproduces the picture in the template as closely as possible. The program is simple, but it has a few interesting bits:

1. The files are read into strings with *read\_into\_string()*
2. While reading, the code is preprocessed: the characters "{}();," get surrounded by spaces
3. The preprocessing is needed so that *sscanf()* recognizes all tokens correctly, i.e. understands that *for(* is two different tokens
4. Roughly speaking, the *format()* procedure reads tokens from the code one by one and waits until the template has accumulated enough asterisks; then the token is printed
5. *format()* detects the case where two word tokens are adjacent, so that at least one space gets inserted between them on output, i.e. so the output never contains *floatx*

I ran the program and got this:

```c
                                              void
                                              zxc()
                                        {  for(float y
                                        =-1.0f;y<1.0f;y+=0.1f
                                      ){for(float x=-2.5f;
                                     x<1.0f;x+=0.05f){const
                           float   escapeR=100.0f;float zx=
                          0.0f; float zy=0.0f;float tx=0.0f
               ;float ty=0.0f;int n=100;float mod=0.0f;while
                          (n>=0&& mod<escapeR){zx=tx*tx-ty*
                           ty+x;zy  =2.0f*tx*ty+y;tx=zx;ty=
                                     zy;--n;mod=sqrt(zx*zx+
                                      zy*zy);}printf("%c",
                                        n>=0?'_':'*');}printf
                                        (  "\n");}}void
                                              main(){
                                              zxc();}
```

And it even compiles. That said, I prefer the living Mandelbrot fractal authored by D. :)

![l_211a6d1a](../../images/obfuscated-1.png "l_211a6d1a")
