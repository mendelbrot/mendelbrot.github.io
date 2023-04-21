---
layout: post
title: Return To Mars Demo
date_posted: 2021-03-29
stage: active
description: 
  I'm still proud of this game (made with react).  It's retro, with a UI design inspired by the original Star Trek.  It's still hosted on s3 for anyone to try, however, if you're on your phone, be warned that it isn't mobile responsive.
tags: 
  - featured
# edited: 2021-03-18 10:00 -0700
# categories: software-programming
---

![return to mars screenshot](/assets/images/demo-screenshots/return-to-mars.png)

Here I'm featuring this React web application that I built in 2019, just after I completed the Software Systems Developer certificate program at BCIT.  

This was soon after React version 16.8 came out, and this app makes extensive use of function components, and the (then new) useContext and useState hooks.  

This app is intended to be a game.  A spacecraft is orbiting the sun along with the planet Mars.  The user can turn the spacecraft and fire its rocket to go in different directions.  

The motion is realistic.   The app uses a numerical simulation that calculates the acceleration and change in position of the spacecraft based on the gravitational attraction from the Sun and Mars.  I first worked with this type of numerical simulation in a course at SFU (using the Fortran programming language!).

Source:

[Repo on github](https://github.com/mendelbrot/return-to-mars)

[Live demo hosted on AWS](http://return-to-mars.s3-website-us-west-2.amazonaws.com/)

