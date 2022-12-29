---
title: 'Common Mistakes to Avoid in Your First Deploy on Cyclic'
slug: 'common-mistakes-for-first-time-deploy'
summary: 'Deploying on Cyclic is incredibly easy and fast, but three things tend to trip up first time users. We walk through three speed bumps and how to avoid them so you can deploy like the pro you truly are.'
colId: 60d0f077b69e2df6b324616c
id: 61a67f5af4e8e5298d0efcc4
createdAt: 'Thu Dec 29 2022 19:45:30 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Thu Dec 29 2022 19:45:30 GMT+0000 (Coordinated Universal Time)'
publishedOn: 'Thu Dec 29 2022 19:45:30 GMT+0000 (Coordinated Universal Time)'
author: rachel-schipull
category: Engineering
hidden: false
featured: false
public: 
image: /content/speedbump.bumps.jpg
thumbnail: /content/speedbump.bumps.jpg
---

### Here’s the scenario:  

You’ve heard amazing things about Cyclic. It’s so easy, fast, and simple to get your app hosted. You are ready to take the plunge.

You gather your Github and your Node.js full stack app and head over to [Cyclic.sh](https://www.cyclic.sh/). You sign in with Github and you are ready to hit deploy.

Yeah, go for it! We’re cheering you on. 🎉

However, depending on how your app is configured, there are a few speed bumps you might hit before your build is running smoothly. So, keep reading to be prepared.


### Speed bump #1: No more nodemon

If you are using the npm module [nodemon](https://www.npmjs.com/package/nodemon) to run your app locally, you’ll need to update the script that tells Cyclic how to run the application. 

Luckily for you, Cyclic will scan your repository before the build starts and provide you with a message to this effect. Look at that! Cyclic tells you exactly what to do.

![](/content/nodemonerror.bumps.png)

You can update your Github repo at this point and restart the build. 
Congratulations! Your build is complete!

![](/content/yourelive.bumps.png)


### Speed bump #2: Environment Variables

Sometimes users get caught up in the excitement of completing a build and forget to add their environment variables to Cyclic. You’ll be able to see under the “Logs” tab that your application isn’t communicating with your database or any other errors that missing vars would bring. Time to add those vars in the “Variables” tab. 

There are already some variables in there, like your pre-populated Cyclic URL. All you have to do is add any additional variables in using the key/value pairing at the bottom.

![](/content/varswithcircle.bumps.png)

Remember the key should match the key in your code, and if you want to copy/paste from your .env file, be sure to try out the bulk editor tab.

![](/content/bulkeditor.bumps.png)

Once the variables are all set, check your logs again. Oh yeah, now we’re cooking with gas.


### Speed bump #3: MongoDB

Builds using MondgoDB are very popular and run great on Cyclic, but there’s one catch… Because Cyclic is serverless, requests to MongdoDB need to be written in a certain order so they are heard correctly. 

Our docs have an excellent example of how to structure your MongoClient and mongoose, if you are using it. Check it out here: [https://docs.cyclic.sh/how-to/using-mongo-db](https://docs.cyclic.sh/how-to/using-mongo-db)

TLDR? You have to connect to MongoDB before your code starts to listen for requests, otherwise they may be missed entirely. 

Once you’ve updated your MongoClient code, you should be seeing all 200s in the logs. 
![](/content/allgreenlogs.bumps.png)

Speed bumps traversed! That site is live. Quick, share it with all your friends!

Are you finding other speedbumps? Let us know and we’ll do our best to help you over them. 

Check out our Discord community to ask questions and share your creations: [discord.cyclic.sh](https://discord.gg/RbX73p5P)
