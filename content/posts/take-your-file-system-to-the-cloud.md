---
title: 'Take Your File System to The Cloud with the S3fs Module from Cyclic'
slug: 'take-your-file-system-to-the-cloud'
summary: 'A quick overview of the Node.js file system module and how to swap it out for the Cyclic S3fs npm module. You can use the same methods as the fs module and enjoy the convenience of S3 buckets without the hassle of AWS.'
colId: 60d0f077b69e2df6b324616c
id: 626002160aff6f33232d263h
createdAt: 'Fri Feb 17 2022 10:35:38 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Fri Feb 17 2022 10:35:38 GMT+0000 (Coordinated Universal Time)'
publishedOn: 'Fri Feb 17 2022 10:35:38 GMT+0000 (Coordinated Universal Time)'
author: rachel-schipull
category: Engineering
hidden: false
featured: false
public: 'Fri Feb 17 2022 10:35:38 GMT+0000 (Coordinated Universal Time)'
image: /content/digital-cloud.jpg
thumbnail: /content/digital-cloud.jpg
---

## Node knows files, let's make it better

We all know Node.js is an amazing tool and has many fantastic built-in modules. One of those modules is the files system module or `fs`.

The `fs` module is incredibly helpful because it allows you to write, read, update, delete (and more!) files in your local system. Furthermore, you can do any of these actions synchronously or async, which gives you (the developer) a lot of freedom in how files are accessed and stored.

As powerful as the `fs` module is, it loses its functionality when you move to production. You aren’t accessing the local system anymore. So long, and thanks for all the fish.

But what if that wasn’t how it was? What if you could use cloud storage instead? And what if you didn’t have to learn everything about AWS to make it work?

That’s what we’re here to discuss. Read on for a quick tutorial on how to swap out your Node.js `fs` module for S3 buckets and access your files no matter where they are.

### Let's review the File System module

If you are brand new to the Node file system module, I would suggest familiarizing yourself with the different methods and how to use it locally before you jump into the Cyclic.sh s3fs npm module.

Here’s a few tips: 
* The `fs` module supports sync and async methods, which is great! But it can also be confusing if you don’t have a strong handle on the event loop and the order your requests will enter and exit. It’s important to do some testing!
*  Some `fs` methods are straightforward, however some are unconventional, for example: 
    - The method most commonly used for “delete” is “unlink”. 
    - The method for “update” is “appendFile”. 
* There are dozens of methods included in the `fs` module. I would recommend learning more about it directly from Node.js in their documentation: [https://nodejs.org/api/fs.html#file-system](https://nodejs.org/api/fs.html#file-system)
* If it’s your first time trying out the file system in Node.js, it might be a good idea to try a couple short tutorials to learn the ropes. These two are clear and easy to follow: 
   - [Fs Module Node.js](https://youtu.be/a6dRdtOy4Bg)
   - [A Beginner's Guide To The File System Module In Node.js](https://youtu.be/QkwHP4d01xA)
---  
### Moving from `fs` to `s3fs`

Once you have a simple application using the `fs` in your local environment, you can deploy the application to Cyclic. 

However, you’ll notice if you try to use any of the methods you were using locally, you may receive a `EROFS` error. This is expected because once your application is deployed to production it no longer has access to the local file system. 

If only there were a way to use the same methods in production!

*Cyclic’s S3fs npm module enters the chat*

This is the moment we’ve been waiting for, so how do we set this up?

Well first things first, we need to install the module.

```npm install @cyclic.sh/s3fs```

Then where you are requiring the `fs` module:

```const fs = require(‘fs’)```

Change it to:

```const fs = require(‘@cyclic.sh/s3fs’)```

The module allows you to write to an AWS S3 bucket that is automatically connected to your application when you first deploy it to Cyclic. There are a couple things we need to do to give you access to that bucket.

The bucket name is already populated in Cyclic when you deploy, you can find it under the variables tab. The key is always “CYCLIC_BUCKET_NAME” and the value follows the pattern of “cyclic-randomly-generated-app-name-aws-region-0#”.

If you would like to write to the bucket while you are in your local, you will need to validate your AWS connection. (If you do not do this, your app will default to your local `fs`, and you will receive a warning.)

Grab the temporary AWS credentials from your Cyclic dashboard (Under Data/Storage > Local Development) and paste it into your terminal.

![](/content/local-cred.png)

Now you should be validated to write to the bucket. Bear in mind this validation is temporary (as these credentials are meant for testing) and will refresh every 60 minutes.

Set it up as a variable in a .env file, and adjust your `fs` const as follows:
![](/content/add-bucket-env.png)

Run your application locally and see what happens!

### S3fs in Production

Your application is already on Cyclic, but if you push an update you should notice those `EROFS` errors have disappeared.

In the example of this (very) [simple sample application](https://github.com/rachelschipull/s3fs-okay), when you visit the root route, it writes the date to a file when it is called, as well as prints “Hello World!” to the DOM.

![](/content/s3fs-root.png)

When you visit the ‘/contents’ route, you can see the date.

![](/content/s3fs-contents.png)

But that only scratches the surface of what you can do with S3 buckets storage. 

Again as a reminder, depending on which methods from the `fs` module you are using, you may need to configure your code differently. 

Be sure to reference the README from the `s3fs` module for more information: [https://github.com/cyclic-software/s3fs](https://github.com/cyclic-software/s3fs)

What are you going to do with S3fs? Have more questions about S3 buckets or how to set up your project? Join us in [Discord] to continue the conversation.(https://discord.cyclic.sh)
