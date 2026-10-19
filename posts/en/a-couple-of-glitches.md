---
title: "A Couple of Glitches"
date: 2007-10-05T08:51:00+03:00
lang: en
slug: a-couple-of-glitches
topic: programming
tags: [unix, programming]
original_title: "Пара глюков"
original_url: https://iodiot.livejournal.com/10547.html
---

I wrote an **HTTP server**. It took very little time, but I've been fighting individual flaws for days now.

It's obvious: the server receives data from a socket. HTTP is by definition a text protocol, i.e. the data contains newline characters, EOF and all that. With the fdopen() call a socket can be turned into a stream, and then you can work with it using fprintf(), fscanf(), fgets(). This simplifies things a lot, but tell me why on earth fclose() by default closes the socket descriptor along with the stream. And you do need to close it, because once EOF shows up in the data stream, fread() falls into a deep sleep().

Pipes are a separate story. They are needed to implement the CGI interface correctly. When a POST request arrives, the server must launch the corresponding program, pass the input parameters to it through a pipe, and read the generated page back through the same pipe. The man pages say everywhere that pipes are bidirectional, yet they still work in only one direction: server –> client or client -> server. The way out is to use two pipes at once. I don't know, maybe it's a FreeBSD defect, but I never managed to make the server write and read data simultaneously.

FreeBSD vs. Linux. The program works on the former and crashes with a Segmentation Fault on the latter. For example, a file closed twice with fclose(), or a call to popen() if you pass it "r+" instead of just "r" — Linux just doesn't like bidirectional pipes, it doesn't (even though the documentation doesn't forbid them)…
