---
Name: '6 Command line Tools All Experts Know'
Slug: '6-command-line-tools-all-experts-know'
Summary: ''
---

I work on Mac OSX and Linux command line environments. My tool kit is shaped by the needs I have. This is my tool box of tools that work with almost any command and help me go from just using the command line to being an expert.

  

Wow, your friends and colleagues. These tools make every other command at the command line more powerful.

  

**| (aka pipe)**
----------------

  

Pipe is awesome. It lets me connect the output of one command and &quot;pipe&quot; it into the input of another command. This is the universal glue that instantly lets me level up the effectiveness of my command line usage.

  

### **Gotchas**

  

There are two outputs from each command, standard out (stdout) and standard error (stderr). Pipe by default connects to stdout.  

  

**\- (aka dash)**
-----------------

  

Some commands take a file name as an argument. In cases where I want to use stdin or stdout. Dash is the answer.

I use this alot when I want to read a file from s3 and display it to the console or take the output from a command and write the file to s3.

Print file to console: \&#x60;aws s3 cp s3:&#x2F;&#x2F;some-bucket-name&#x2F;awesome-file.json -\&#x60;

  

**\&#x60;pbpaste\&#x60; and \&#x60;pbcopy\&#x60;**
------------------------------

  

These are technically commands as well. They interact with the paste buffer.

On mac you can access your paste buffer using the paste-buffer-paste (pbpaste) and paste-buffer-copy (pbcopy) commands. I love how they keep my console clean especially when I have trying to transform a large chunk of text&#x2F;json

Example:

\&#x60;aws s3 cp s3:&#x2F;&#x2F;some-bucket-name&#x2F;awesome-file.json - | pbcopy\&#x60;

‍

  

**xargs**
---------

  

This is technically a command. It is a command that executes commands.

It executes a command for every line of input it receives. The arguments you pass to xargs form the basis of the command to execute.

Hint: use \&#x60;-J{}\&#x60; to substitute \&#x60;{}\&#x60; (or some other character string) in the middle of the command to execute or multiple times for that matter.

Example: &lt;code&gt;pbpaste | xargs -J{} aws s3 cp {} -&lt;&#x2F;code&gt;

‍

**\&#x60;2&gt;\&#x60; and \&#x60;2&gt;&amp;1\&#x60;**
-----------------------

  

Sometimes I want to send stderr somewhere else other than the console. Using its number is the way.

Send to trash: \&#x60;2&gt;&#x2F;dev&#x2F;null\&#x60;

Send to error log: \&#x60;2&gt; error-log.txt\&#x60;

Combine with stdout: \&#x60;2&gt;&amp;1\&#x60;

  

**Ctl-z + fg**
--------------

  

Suspend the foreground process, run some other commands, then return the suspended process to the foreground.

  

**man + &#x2F; + n**
---------------

  

When I know the command but not the exact syntax my first source of information is the manual. Instead of searching google I search the manual.

Example: \&#x60;man xargs\&#x60; then \&#x60;&#x2F;utility\&#x60; advance to next found instance with \&#x60;n\&#x60;

‍  
  

‍
