---
title: "You Too Can Deploy Static Sites on Cylic"
slug: 'deploying-static-sites'
summary: 'Cyclic is built for deploying full-stack node.js apps, but we are here for you if you want to deploy a frontend site as well. Learn how to use one of our Advanced Build Options and try it out in this quick tutorial.'
colId: 60d0f077b69e2df6b324616c
id: 620d51d392f146f0cba97c8f
createdAt: 'Mon Jan 23 2023 19:34:43 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Mon Jan 23 2023 17:54:17 GMT+0000 (Coordinated Universal Time)'
publishedOn: 'Mon Jan 23 2023 17:55:32 GMT+0000 (Coordinated Universal Time)'
author: rachel-schipull
category: engineering
hidden: false
featured: false
public: 
image: /content/staticsitebanner.jpg
thumbnail: /content/statiscsitebanner.jpg
---

## Did you know you have options?

Most builds on Cyclic are as easy as hitting that bright green “Deploy” button and waiting for your confetti. However some take a little more setup. 

It’s still easy, it’s still fun, it just takes a little more “know how.”

So let’s look at one of our most powerful tools to get things done and maximize your deploying power on Cyclic: Build Options.

Over my next couple posts, I’m going to go through some of the most popular ways to use Build Options and we’ll have a little fun.

#### But first, where do you find them?

There are two places to find Build Options in Cyclic, which really have to do with when you’ll need them.
1. You can access build options from the “Advanced” dropdown right before you connect a repo: ![](/content/build_options_1.png)
2. You can find the Build Options in the “Environments” tab after your build is complete: ![](/content/build_options_2.png)

Alright, now you know where to find them, so what do you do with them? Let's start with one simple way to use Build Options. In this post, we’re going to start nice and easy and deploy a static site.

## Static Sites

If you aren’t familiar with the term “static site,” you may think of them as client-side only websites. A classic example would be a resume site or a portfolio site. In this case you only need to serve a frontend. There’s no database, no GET, no POST, no CRUD. You get the picture.

However, because of how Cyclic reads your repo to make sure it’s ready to go, currently you’ll still need to add a package.json file for Cyclic to deploy it. That means we still need Node.js baybeeee!

I'm going to run through this process with a fun little project I made a while back... a calculator called Sneaky Calc. It's just html, vanilla css, and a little JavaScript that makes the calculator calculate. Classic static site.

![](/content/calculator.png)

Now, that we have chosen a project to host, let's get our Node on. 

If we have Node installed already, this is a piece of cake. If not, I recommend heading to the Node.js website and starting with Node’s recommendation for how to install it on your operating system [https://nodejs.org/](https://nodejs.org/en/).

Once Node.js is on board, we can move on to the next step.

If our frontend website (html, css, and maybe some client-side javascript) is working properly in the local environment, we'll go ahead and run ```npm init``` in the root directory of the project (in the terminal). 

Node will run us through a brief setup of our package.json file. In most cases, we just have to hit enter until the file is added to our project root folder. You can always customize your package.json, but for a static site, it doesn’t really matter.

![](/content/packageJSONSetup.png)

The final piece of setup is to add the start script ```”start”: node index.js``` to scripts in our brand new package.json file. Cyclic specifically looks for the node start script to give us access to the screen with the ✨Advanced Build Options✨. 

![](/content/addNodeScript.png)

Yes, we know, we don’t specifically have an “index.js” file in this application. It’s ok. Just go with it.

Now we're going to push our brand new package.json file up to Github and get ready to deploy on Cyclic.

![](/content/ReadyToDeploy.png)

As soon as we get to the Connect screen we are going to hit “Advanced” and toggle “Static site” to the “on” position.

![](/content/ReadyToDeployAdvanced.png)
![](/content/ToggleON.png)

We'll hit the Connect button now and BINGO! That calculatin' static site is 🎉live🎉 and hosted on Cyclic. 

And just to hammer it home, if we head over to the dashboard, we can see the Static Site toggle is turned on there as well, nice:
![](/content/afterDeployToggle.png)

So there it is, the simplest use for Advanced Build Options and the first step on our journey towards understanding  how to use all the bells and whistles Cyclic has to offer. 

I'll have more on Build Options soon, but if you have questions in the meantime, come chat with us in Discord: [discord.cyclic.sh](https://discord.cyclic.sh).


_Want to see the cheat codes on my Sneaky Calc, [click here](https://sneakycalc.cyclic.app)._