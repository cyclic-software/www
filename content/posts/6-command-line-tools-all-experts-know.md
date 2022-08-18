---
title: '6 Command line Tools All Experts Know'
slug: '6-command-line-tools-all-experts-know'
summary: 'Wow, your friends and colleagues. These tools make every other command at the command line more powerful.'
colId: 60d0f077b69e2df6b324616c
id: 62a74b9b2bbb3fdb87bc0a01
createdAt: 'Mon Jun 13 2022 14:37:15 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Mon Jun 13 2022 15:03:03 GMT+0000 (Coordinated Universal Time)'
publishedOn: 'Mon Jun 13 2022 15:03:06 GMT+0000 (Coordinated Universal Time)'
author: kam-lasater
category: Engineering
hidden: false
featured: false
public: 'Thu Jun 16 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
image: /content/62a74a26dc596b3c205de748_ryan-moreno-Lurw1nCIkLc-unsplash.jpg
thumbnail: /content/62a74a26dc596b3c205de748_ryan-moreno-Lurw1nCIkLc-unsplash.jpg
---
I work on Mac OSX and Linux command line environments. My tool kit is shaped by the needs I have. This is my tool box of tools that work with almost any command and help me go from just using the command line to being an expert.

  

Wow, your friends and colleagues. These tools make every other command at the command line more powerful.

  

**| (aka pipe)**
----------------

  

Pipe is awesome. It lets me connect the output of one command and "pipe" it into the input of another command. This is the universal glue that instantly lets me level up the effectiveness of my command line usage.

  

### **Gotchas**

  

There are two outputs from each command, standard out (stdout) and standard error (stderr). Pipe by default connects to stdout.  

  

**\- (aka dash)**
-----------------

  

Some commands take a file name as an argument. In cases where I want to use stdin or stdout. Dash is the answer.

I use this alot when I want to read a file from s3 and display it to the console or take the output from a command and write the file to s3.

Print file to console: `aws s3 cp s3://some-bucket-name/awesome-file.json -`

  

**`pbpaste` and `pbcopy`**
------------------------------

  

These are technically commands as well. They interact with the paste buffer.

On mac you can access your paste buffer using the paste-buffer-paste (pbpaste) and paste-buffer-copy (pbcopy) commands. I love how they keep my console clean especially when I have trying to transform a large chunk of text/json

Example:

`aws s3 cp s3://some-bucket-name/awesome-file.json - | pbcopy`

‍

  

**xargs**
---------

  

This is technically a command. It is a command that executes commands.

It executes a command for every line of input it receives. The arguments you pass to xargs form the basis of the command to execute.

Hint: use `-J{}` to substitute `{}` (or some other character string) in the middle of the command to execute or multiple times for that matter.

Example: <code>pbpaste | xargs -J{} aws s3 cp {} -</code>

‍

**`2>` and `2>&1`**
-----------------------

  

Sometimes I want to send stderr somewhere else other than the console. Using its number is the way.

Send to trash: `2>/dev/null`

Send to error log: `2> error-log.txt`

Combine with stdout: `2>&1`

  

**Ctl-z + fg**
--------------

  

Suspend the foreground process, run some other commands, then return the suspended process to the foreground.

  

**man + / + n**
---------------

  

When I know the command but not the exact syntax my first source of information is the manual. Instead of searching google I search the manual.

Example: `man xargs` then `/utility` advance to next found instance with `n`

‍  
  

‍
