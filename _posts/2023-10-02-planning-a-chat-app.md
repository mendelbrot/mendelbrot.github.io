---
layout: post
title: Planning a Chat App
date_posted: 2023-10-02
stage: archived
description:
  In the next few weeks I'm planning to work on a basic chat app as a portfolio project.
tags: 
---

I've been thinking about what I can work on as a project.  I want to build something that gives me something to show for it early on. In previous projects, like [Dory](https://github.com/mendelbrot/dory), I made the initial plan too complicated, then I got the project to a certain point and abandoned it due to it being too much effort.  

When that happens, I have nothing to show for my work.  So this time it will be very minimal.  The most basic chat application.  Not a Slack clone, no workspaces, channels, or threads.  The homepage is going to be one open chatroom and that is it.

Instead of going big on my data model and complexity, what I can do is go big on the thoroughness of the implementation.  What do I mean by that?  Well, after I make the chatroom web version, then I can make a mobile app, and then I can set up push notifications.  So I can explore the entire realm of what is needed to develop a chat app, but with a very simple app.

This will give me the opportunity to develop these capabilities that I can apply in future more involved projects.  And at every step of the way, I'll have an MVP to show.

I'm also thinking about the backend.  So for the frontend I'm using [Next.js](https://nextjs.org/), and I've built up a great [starter repo](https://github.com/mendelbrot/next-starter) with most of the things I'll need for any <span>Next.js</span> project.  But I can't use <span>Next.js</span> as the full backend too, because a websocket connection needs a persistent server, however <span>Next.js</span> uses a serverless architecture.  One solution is to set up a second server for websockets.

Then, I need to choose which technology I want to create the websocket server with: JavaScript; Phoenix; Rust; Python; .NET; PHP?  

My preferred choice is Rust, because getting more experience with Rust is on my todo list.  For Rust, I narrowed my choices down to two frameworks: [Rocket](https://rocket.rs/) and [Actix](https://actix.rs/).  Both of these projects have a large following and are actively being developed.  

Of these, Rocket is my first choice because the developer experience is a significant component of their core philosophy, it is relatively easy to get started with, and their website documentation is very through.  Another point for rocket: [the Rust website is built with it](https://github.com/rust-lang/www.rust-lang.org/tree/master).  Actix also seems good, however I think it would be somewhat of a higher barrier for me to develop with it.  

There is a major problem though: Rocket does not yet support websockets.  They are very transparent about this and stated it on their [FAQ](https://rocket.rs/v0.5-rc/guide/faq/#web-sockets).  But in the meantime they offer an alternative, using [server sent events](https://api.rocket.rs/v0.5-rc/rocket/response/stream/struct.EventStream.html) to accomplish almost the same thing.

Another option I haven't brought up yet is, I'm using a Postgres database, and [Supabase has a realtime api](https://supabase.com/docs/guides/realtime) that would adequately solve this problem if I host my Postgres on Supabase.  The Supabase realtime api is [built with Elixir](https://github.com/supabase/realtime).  

Elixir is scalable, distributed, and has first class support for websockets with [the Phoenix framework](https://www.phoenixframework.org/).  I also have some experience with Elixir, as I made Dory with Phoenix LiveView.  Overall I had a good time working with Phoenix, however there were some things about the Elixir language that didn't align with my ideals.  Mainly this was the dynamic type system, as as I'm trying to go in the other direction of building more experience with statically typed languages.

Finally, an option I'm considering as well is a JavaScript server using [Socket.IO](https://socket.io/) for websockets communication.  This also could be an opportunity for me to try out [Deno](https://deno.com/).

To tie this all together, I need a backend that supports chat messaging.  Out of the infinite possibilities, some of the options I've considered are:

* __The Rust Rocket framework:__<br>Has a great developer experience, doesn't yet support websockets, but has a workaround.
* __The Rust Actix framework:__<br>A bit harder for a newbie to get into, but has full websocket support.
* __Supabase Realtime:__<br>The fastest way to get started, no backend needed, but a little bit of vendor lock-in.
* __Phoenix:__<br>A natural choice for a websocket server, but not my preferred language.
* __<span>Socket.IO</span> on a JavaScript server:__<br>Probably the quickest way to get started with my own server, and can be an opportunity to try out Deno.

And... I haven't made my decision yet.  

It's not like this would be a final decision, as I could always change it if I find it's not working out the way I expected.  

The main consideration though, I think, is time.  Circling back to the beginning, I want something I can get to an MVP quickly.  I think that the options most consistent with this are Supabase Realtime and <span>Socket.IO</span>.