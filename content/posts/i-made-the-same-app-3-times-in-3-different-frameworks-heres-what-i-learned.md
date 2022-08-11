---
Name: 'I Made The Same App 3 Times in 3 Different Frameworks… Here’s What I Learned.'
Slug: 'i-made-the-same-app-3-times-in-3-different-frameworks-heres-what-i-learned'
Summary: ''
---

Angular, Svelte, Solid, React, Vue — there are so many frameworks out there. And you probably dealt with [the "framework dilemma"](https:&#x2F;&#x2F;www.reddit.com&#x2F;r&#x2F;webdev&#x2F;comments&#x2F;ux2ov8&#x2F;how_do_you_guys_determine_which_frameworks_to_use&#x2F;) at some point in your career.

Some of us pursue React, the [most popular framework](https:&#x2F;&#x2F;insights.stackoverflow.com&#x2F;survey&#x2F;2021#most-loved-dreaded-and-wanted-webframe-want). And that’s completely understandable, because it being famous also implies that it’s the most demanded skill in the job market.

Next up is Vue, and its second position in the popularity spectrum. Some people prefer Vue for the fact that it’s so lightweight and yet so scalable, and others love its simplicity and similarity to other frameworks.

![](https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;62d6d1173d02703377a9cef3_top-liked-frameworks.png)

Let’s take a leap of faith and change our selection criteria from popularity to likability.

Svelte is the most loved framework, and for good reason. Svelte places strong emphasis on developer happiness because it&#39;s so easy to pick up and has a compiler that is more efficient than its peers.

I always wondered how different it would be to build the **same app** with the same features, but in **3 different frameworks**. For each one, I want to answer the following questions:

*   How many errors will I encounter?
*   How much code is there to write?
*   How long does it take to build?

We’ll be exploring each of the aforementioned frameworks in its own piece, as part of a four-article series.

We’ll build a [website for publicly sharing short-messages, called **"ithink"**](https:&#x2F;&#x2F;ithink.cyclic.app&#x2F;). It’s like Twitter, but with no accounts and you can’t delete what you post.

‍

But first, we need an API
-------------------------

If you play around with the CodePen above, you’ll quickly realize that the database is not fake.

We actually have a [back-end side of our application](https:&#x2F;&#x2F;github.com&#x2F;ithink-corp&#x2F;api): it handles the storing and retrieving of simple text data. It’s also built on [Amazon’s S3](https:&#x2F;&#x2F;docs.aws.amazon.com&#x2F;s3&#x2F;) object storage service.

A developer would normally spend hours and hours setting-up a database like this, and it’s not free either.

Luckily for us, we get a free instance of the AWS S3 Storage when we [use Cyclic](https:&#x2F;&#x2F;app.cyclic.sh&#x2F;). No credit card is required.

[

![https:&#x2F;&#x2F;deploy.cyclic.app&#x2F;button.svg](https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;62d6cf389192e7f60cbda7b0_button.svg)

](https:&#x2F;&#x2F;deploy.cyclic.sh&#x2F;ithink-corp&#x2F;api)

‍

Vue, the lightweight framework
------------------------------

Let’s start by exploring the wonders of Vue, the framework that [claims itself to be one of the most performant frontend frameworks](https:&#x2F;&#x2F;vuejs.org&#x2F;about&#x2F;faq.html#is-vue-fast).

### Creating a new project

It’s no secret that setup is one of the most important stages in a project’s lifecycle. It’s the very first step in the journey that transforms an idea into a real-life, working application that runs on a modern computer.

We can all agree that creating a boilerplate from scratch is exhausting. I mean, think about all the folders, files, and code that you’d need to keep repeating, forever. No one wants to do all that work!

Luckily, Vue does all the work for us when we run the following command:

[npm init vue@latest](http:&#x2F;&#x2F;code-inline)

It will ask you a bunch of questions so you can create the optimal setup that best fits your project. So go ahead, and accept&#x2F;reject the following questions:

*   Project name: **ithink**
*   TypeScript? **No**
*   JSX Support? **No**
*   Vue Router? **No**
*   Pinia? **Yes**
*   Vitest? **No**
*   Cypress? **No**
*   ESLint? **No**
*   Prettier? **No**

We’ll see what each of these means throughout this article.

Next up is installation. This time, you don’t have to do anything. Just kick-back, relax, and wait for [yarn](http:&#x2F;&#x2F;code-inline) to do its work! (of course, you can also use [npm](http:&#x2F;&#x2F;code-inline) if that’s your preference)

‍

‍

This command will create a dead-simple boilerplate which comes with some defaults. Go ahead and run [yarn dev](http:&#x2F;&#x2F;code-inline) or [npm run dev](http:&#x2F;&#x2F;code-inline) and open up [http:&#x2F;&#x2F;localhost:3000](http:&#x2F;&#x2F;code-inline) in your browser. It’s already looking great, isn’t it?

You’ll see a semi-usable application describing Vue, with the addition of some links to its inner-workings.

Unfortunately, most of this stuff is useless to us. Therefore, we’ll erase most of it so that we can continue along this guide:

Take some time to observe the folder structure. Notice the emphasis that it places on [decoupling](https:&#x2F;&#x2F;jamstack.org&#x2F;glossary&#x2F;decoupling&#x2F;). Everything is where it’s supposed to be, making it a very clean and elegant architecture to work on.

Don’t worry if this looks intimidating. We’ll cover _all of it_ throughout this document.

### Configuring SEO

You might have noticed that the title of our document is _"Vite App"_, with no immediately obvious way of changing it.

It turns out that this is a great opportunity for us to delve into the first element: [index.html](http:&#x2F;&#x2F;code-inline). You’ve undoubtedly already seen this filename in a billion other places, but probably not in the context of Vue.

So let’s dive into [index.html](http:&#x2F;&#x2F;code-inline), and update some defaults:

We changed the title and added a description. Hence, quite simply, index.html is the entry-point to our application. It’s where you modify the [&lt;head&gt;](http:&#x2F;&#x2F;code-inline) meta-tags, add class-names to the top-most elements such as [&lt;body&gt;](http:&#x2F;&#x2F;code-inline) and [&lt;html&gt;](http:&#x2F;&#x2F;code-inline), and change the language of your website from English (&quot;en&quot;) to say, French (&quot;fr&quot;).

It’s also impossible to avoid speaking about [&lt;div id&#x3D;&quot;app&quot;&gt;&lt;&#x2F;div&gt;](http:&#x2F;&#x2F;code-inline). As we’ll see in an upcoming section, this is where all-things-Vue are injected. So let’s keep on exploring!

### Changing the body color

‍

‍

The website we’re building has an overall dark theme, meaning that the [&lt;body&gt;](http:&#x2F;&#x2F;code-inline) color should be changed from white to dark.

After [configuring TailwindCSS](https:&#x2F;&#x2F;tailwindcss.com&#x2F;docs&#x2F;guides&#x2F;vite), we’ll start adding these changes to our document.

You must’ve already created a [src&#x2F;index.css](http:&#x2F;&#x2F;code-inline) file during your Tailwind configuration, and imported it from [src&#x2F;main.js](http:&#x2F;&#x2F;code-inline). So, let’s add our custom styles:

‍

As you can see, we’re using the [@apply](http:&#x2F;&#x2F;code-inline) directive to _apply_ the [bg-stone-900](http:&#x2F;&#x2F;code-inline) utility to the body. If you’re not very Tailwind-savvy, [bg-stone-900](http:&#x2F;&#x2F;code-inline) is equivalent to the following CSS declaration:

‍

‍

### Adding a header

‍

It’s time to delve into our second-most element: App.vue. It’s the top-most component of our application.

Whatever you put inside this file will go straight into [&lt;div id&#x3D;&quot;app&quot;&gt;&lt;&#x2F;div&gt;](http:&#x2F;&#x2F;code-inline). Remember it? We mentioned it in the last paragraph of the section that covered [index.html](http:&#x2F;&#x2F;code-inline). See how it all fits together? Magical!

![](https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;62e02ea8cb6f0b99cc5ba095_hierarchy.png)

And with all that said, let’s implement our overly-simplistic header:

As you can see, we kept it pretty simply.

Hey! I hid the Tailwind class-names from the code snipped above. Browse our code repository to see the full code.

**_Ahem_**_,_ let’s address the elephant in the room. What the heck is [&lt;template&gt;](http:&#x2F;&#x2F;code-inline)?

*   Before we get into that, let me explain a fundamental concept to you.. **Web components!**
*   Web components give developers the ability to create their own tags:
*   [&lt;profile-card&gt;](http:&#x2F;&#x2F;code-inline), [&lt;emoji&gt;](http:&#x2F;&#x2F;code-inline), [&lt;close-button&gt;](http:&#x2F;&#x2F;code-inline), [&lt;code-editor&gt;](http:&#x2F;&#x2F;code-inline)
*   **_It’s like magic!_** You get to encapsulate your own HTML, CSS, and JavaScript. Web components are an elegant way to create user-interfaces that resemble native apps. They’re the future of the web.
*   If this sounds cool to you, you’re probably wondering how to create these things.

So let me introduce… **Single File Components!** (SFCs)

‍

‍

‍

As you can see, SFCs split a component’s design into three logical parts, and they can come in any order:

*   **JavaScript logic:** ([&lt;script setup&gt;](http:&#x2F;&#x2F;code-inline)) The brains of your component. Handles state, events, networking, etc…
*   **HTML document:** ([&lt;template&gt;](http:&#x2F;&#x2F;code-inline)) The semantics of your component.
*   **CSS declarations:** ([&lt;style scoped&gt;](http:&#x2F;&#x2F;code-inline)) The style of your component.

Pretty neat, huh?

### Listening to click events

As it currently stands, the "new" button doesn’t do anything, and no one wants a useless button.

So let’s change that! We must listen to a click event, and [in Vue, events](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;components&#x2F;events.html) work like this:

‍

We’ll come back to the openModal function later, when we actually create the modal!

### Creating a modal component

It’s time to put the src&#x2F;components folder to good use. This is where we’ll be housing all our custom components.[‍](https:&#x2F;&#x2F;codepen.io&#x2F;eludadev&#x2F;pen&#x2F;VwXaRbb)

What you can see in the image above is the "New Modal" component, written into the NewModal.vue file.

Create a new file at [src&#x2F;components&#x2F;NewModal.vue](http:&#x2F;&#x2F;code-inline). Fill it up with the usual SFC boilerplate:

‍

Let’s get the markup out of the way: (remember to use [the right semantics](https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Glossary&#x2F;Semantics))

‍

Markup alone is not very useful without the JavaScript logic. Let’s attach event handlers to our button elements:

‍

‍

Okay, this is great! But notice that when you click on "post", the page reloads. This is the default [behavior of HTML forms](https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;HTML&#x2F;Element&#x2F;form).

Normally, we’d change that by calling [e.preventDefault](http:&#x2F;&#x2F;code-inline). But Vue focuses so much on simplicity that there’s a super-convenient shortcut:

‍

‍

Would you look at that! We’re able to shorten e.preventDefault() to @submit.prevent. Now, we don’t even need to consider [the Event object](https:&#x2F;&#x2F;developer.mozilla.org&#x2F;en-US&#x2F;docs&#x2F;Web&#x2F;API&#x2F;Event) anymore!

### Tracking a loading state

The user should know when their application is loading, whether it’s posting new text to the server or just retrieving it.

Let’s create a variable that tracks when our component is sending&#x2F;receiving data to&#x2F;from the server. We’re gonna be using [reactive variables](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;reactivity-fundamentals.html).

‍

What is a **reactive variable**?

*   Consider the following scenario:

‍  

*   Say that we updated the value in a to 5. One thing we know for sure is that the [&lt;p&gt;](http:&#x2F;&#x2F;code-inline) element won’t change. It will always say "4", unless we explicitly change it.
*   Well, we don’t have to! With [reactivity](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;reactivity-fundamentals.html), the DOM is automatically updated once the related variable is mutated.
*   In Vue, reactive variables are created with ref, a function that takes any value and makes it reactive.

‍  

*   Notice the addition of .value. It’s important, because if we did a &#x3D; 5 we’d completely taking away the reactivity of the variable.
*   Also, it doesn’t matter that a is a constant variable, because we’re only assigning to its .value property.
*   Now look at the HTML:

‍  

*   Vue will replace {{ a }} with its value: a.value, and the double-brackets are _not_ optional.

‍

Okay, let’s head right back into the submit logic. We’ll create a new isLoading reactive variable, which will indicate when our app is in-contact with the server.

‍

### Getting user input from form elements

Our "new modal" component can’t exist without the [&lt;textarea&gt;](http:&#x2F;&#x2F;code-inline) form element. But this raises an important question: _how do we keep the javascript code in-sync with the DOM content?_

In a nutshell, Vue has a shortcut way of dealing with form elements. And it’s quite convenient!

‍

As you can see, message is a reactive variable, so whenever the user types something into textarea, message will be instantly updated. That’s the magic of v-model!

Hey! You may be getting tired from typing .value all the time. Thankfully, Vue has plans to change that.

### Making the modal inert while loading

When our app is loading (which is tracked by the isLoading variable that we saw in a previous section), we should disable interaction with it.

This requires us getting access to a DOM element in JavaScript. The pure way of doing that is with body.querySelector(), but this approach is non-reactive. Plus, there’s a simpler alternative offered by Vue:

‍

These are called [template refs](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;template-refs.html)! And although it says null, Vue will fill container with the DOM element &lt;div ref&#x3D;&quot;container&quot;&gt; when it’s created. It will also go back to null when it disappears.

With this in hand, we can make our component inert while it’s loading:

Hey! While there’s a simpler way to achieve the above ([&lt;div :inert&#x3D;&quot;isLoading&quot;&gt;](http:&#x2F;&#x2F;code-inline)), I just had to create an opportunity to teach you about template refs, which are a pretty important feature in VueJS.

### Automatically focusing the &lt;textarea&gt;

When the user opens the NewModal component, we know that their objective is to input into the [&lt;textarea&gt;](http:&#x2F;&#x2F;code-inline). So, wouldn’t it be convenient to save them the hassle of moving the cursor towards that form element?

Let’s implement this feature! Counter-intuitively, we can’t do this:

‍

‍

The above code won’t work, because it’s the same as saying null.focus().

So, how do we tell Vue to only focus the textarea once it’s available? The answer lies in [**lifecycle hooks**](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;lifecycle.html).

![](https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;62e02ecd52420b19a8e6d301_lifecycle.png)

We want to utilize the "mounted" hook, which is called right after the component is added to the DOM. That’s when the &lt;textarea&gt; is shown, meaning that it’s not null:

‍

‍

There are many more lifecycle hooks, and we usually use most of them. However, in our application, the "mounted" hook was more than enough. But just keep one thing in mind, you’ll see this concept again and again in every framework.

### Closing the modal when clicked outside

It’s a pretty common behavior in every modal to close it once the user clicks outside.

In this step, we’ll take a HUGE shortcut. Instead of manually implementing this behavior, we shall use another library to do it for us.

The Vue community is humongous and infinitely helpful, so it’s not a surprise to find a library like [@vueuse](https:&#x2F;&#x2F;vueuse.org&#x2F;functions): over 200 useful methods that cover almost every possible use–case.

Our interest lies in the \[onClickOutside event\]([https:&#x2F;&#x2F;vueuse.org&#x2F;core&#x2F;onClickOutside&#x2F;](https:&#x2F;&#x2F;vueuse.org&#x2F;core&#x2F;onClickOutside&#x2F;)), which is triggered every time the user clicks outside a certain DOM element.

After [setting up @vueuse](https:&#x2F;&#x2F;vueuse.org&#x2F;guide&#x2F;), let’s add it to our component:

‍

Fascinating how in one line of code, we’re able to implement such a seemingly complicating feature!

### Closing the modal

The modal has no way of telling whether its opened or closed, as only its parent — App.vue — knows such information.

But there’s one thing we know to be true, and it’s that the modal knows _when_ it should be closed:

*   user clicked outside,
*   user submitted,
*   user canceled.

Therefore, we need a way for the child — NewModal — to communicate with its parent, App. And the solution is quite simple: [Events](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;components&#x2F;events.html)!

With Vue, it’s super-simple to define our own events, while dictating when they should be emitted, using _our_ own rules.

Henceforth, whenever the modal needs to be closed, we emit the event "close" up into its parent.

Hey! Notice how we didn’t import defineEmits. That’s because it’s a compiler macro, so it’s always there by default.

### Using our custom component

Up until now, you couldn’t see NewModal, because it hasn’t been added to App.vue yet. So, let’s change that:

With the code snippet above, the modal will always be open. So, let’s add some toggle magic:

We took advantage of [v-if](http:&#x2F;&#x2F;code-inline) to show&#x2F;hide the modal.

And now we’re done with the NewModal component. Pretty simple, huh?

### Creating a dynamic list of DOM elements

It’s time to delve into a new component, ThoughtList. This one will display a list of items, and we don’t know the length of that list before-hand.

Let’s create a new file at [src&#x2F;ThoughtList.vue](http:&#x2F;&#x2F;code-inline). In Vue, here’s how we repeat an element:

Surprisingly simple! It might be useful to split this component into two: [ThoughtList.vue](http:&#x2F;&#x2F;code-inline) and [ThoughtItem.vue](http:&#x2F;&#x2F;code-inline).

So, we’ll change [src&#x2F;ThoughtList.vue](http:&#x2F;&#x2F;code-inline) to:

and the new [ThoughtItem.vue](http:&#x2F;&#x2F;code-inline) will contain:

And of course, don’t forget to add it to [App.vue](http:&#x2F;&#x2F;code-inline):

### Passing text from parent to child

We’ve seen how to trigger events from child to parent, and now, it’s time to _flip_ that formula around.

Currently, our [ThoughtItem](http:&#x2F;&#x2F;code-inline) displays the same text: "Hello world!"

But we want to show real data, which is held by the parent — [ThoughtList](http:&#x2F;&#x2F;code-inline) — in the [items](http:&#x2F;&#x2F;code-inline) reactive variable.

The solution to this problem is called **Props** (properties). They’re like HTML attributes, if they could contain _anything_! (arrays, objects, and even functions!)

So let’s make a little change to [ThoughtList.vue](http:&#x2F;&#x2F;code-inline):

Hey! It’s important to add the colon : before the prop name. It tells Vue to treat the content between &quot;...&quot; as JavaScript code (the item variable), instead of a String (the text &quot;item&quot;).

And now, we can access the text message in [ThoughtItem](http:&#x2F;&#x2F;code-inline) effortlessly:

‍

Hey! Just like defineEmits, defineProps is a compiler macro and doesn’t require importing.

### Loading data from the server

Up until now, we only used mock data. So, let’s change that! We’ll be getting data from an external API.

But first, notice that we’ll need to access our API from two separate components: ThoughtList for retrieving all items, and NewModal for adding new items to the [l](https:&#x2F;&#x2F;docs.cyclic.sh&#x2F;docs&#x2F;concepts&#x2F;database)ist.

This is called a [shared-state](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;scaling-up&#x2F;state-management.html#what-is-state-management) between multiple components. There’s no immediately obvious way of solving this issue, but thankfully, there’s an entire library designed just for that, and it’s called [Pinia](https:&#x2F;&#x2F;pinia.vuejs.org&#x2F;).

This is where we’ll start working with the stores&#x2F; folder. So let’s create the src&#x2F;stores&#x2F;thoughts.js file.

‍

![](https:&#x2F;&#x2F;uploads-ssl.webflow.com&#x2F;60d0f077b69e2d8f2d246168&#x2F;62e02ef269d01d02c0b009f1_pinia.png)

‍

A store should always resemble this boilerplate, so use it as a starting-point:

‍

We created a store with the &quot;thoughts&quot; ID name.

But _what_ is a store, you may ask? It’s simply a collection of reactive variables and methods that act on them:

‍

Notice how we don’t have to use .value here. Awesome!

Now, let’s create an actually useful store:

All we did here is declare an items reactive variable that will contain our most important data. We then defined the load method that should be called to load data from the server and assign it to items.

We also defined the add action, which asynchronously sends data to the server and adds it to the items list.

### Using real data in our application

Let’s connect our thoughts store with our application! We’ll start with NewModal:

‍

We extracted the add function from the store by calling it as a function. Here, we called it getThoughtsStore, which is a convention when using Pinia.

Would you believe me if I told you that was it? Well, I never lie.

Let’s move into ThoughtList, which will load data from the server in order to display it.

And we also have to access the items reactive variable straight from the store. So let’s follow the same pattern here:

But counter-intuitively, this breaks the reactivity of the variable. Here’s the right way of doing this:

Perfect!

Notice how in our previous code example, we’re using a top-level await to load the data in ThoughtList:

‍

Components with [top-level awaits](https:&#x2F;&#x2F;stackoverflow.com&#x2F;questions&#x2F;46515764&#x2F;how-can-i-use-async-await-at-the-top-level) are called **async components**.

If we leave it like this, we’re gonna get the following error: (check your devtools console)

Component [&lt;Anonymous&gt;](http:&#x2F;&#x2F;code-inline): setup function returned a promise, but no [&lt;Suspense&gt;](http:&#x2F;&#x2F;code-inline) boundary was found in the parent component tree. A component with async setup() must be nested in a [&lt;Suspense&gt;](http:&#x2F;&#x2F;code-inline) in order to be rendered.

It’s telling us that we should use a component called [&lt;Suspense&gt;](http:&#x2F;&#x2F;code-inline) as a parent to the [async component](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;components&#x2F;async.html). [&lt;Suspense&gt;](http:&#x2F;&#x2F;code-inline) (see: https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;built-ins&#x2F;suspense.html) is a built-in Vue component, so we can use it anywhere in our app. Let’s use it in App.vue:

It now works _perfectly_! Yay!

### Adding a loading state to our list

Currently, our ThoughtList component will be invisible until data is loaded. That’s inconvenient, and makes a great example of [bad UX](https:&#x2F;&#x2F;pencilandpaper.io&#x2F;articles&#x2F;ux-pattern-analysis-loading-feedback&#x2F;).

Thankfully, since we’re already using [&lt;Suspense&gt;](http:&#x2F;&#x2F;code-inline), we can directly tell it to show something else while its child is loading. Add this to App.vue:

‍

‍

As you can see, anything within [&lt;template #fallback&gt;](http:&#x2F;&#x2F;code-inline) will be shown when ThoughtList is loading. Awesome!

But we can get even awesome-r than that. Let’s show a [loading skeleton](https:&#x2F;&#x2F;uxdesign.cc&#x2F;what-you-should-know-about-skeleton-screens-a820c45a571a)!

You should know that i in 15 is a shortcut that Vue offers us to loop over the range \[1, …, 15\]. Super!

And with that done, our app is now **complete!** Now that wasn’t so hard, was it?

### Conclusion

We covered a handy amount of Vue features:

*   [Suspense](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;built-ins&#x2F;suspense.html) and [async components](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;components&#x2F;async.html),
*   [the @vueuse library](https:&#x2F;&#x2F;vueuse.org&#x2F;functions),
*   [reactive variables](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;reactivity-fundamentals.html),
*   [skeleton loading](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;built-ins&#x2F;suspense.html),
*   [custom events](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;components&#x2F;events.html),
*   [lifecycle hooks](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;lifecycle.html),
*   [template refs](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;template-refs.html),
*   [v-for](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;list.html) and [v-if](https:&#x2F;&#x2F;vuejs.org&#x2F;guide&#x2F;essentials&#x2F;conditional.html),
*   [pinia](https:&#x2F;&#x2F;pinia.vuejs.org&#x2F;).

Some of these are common to all web frameworks, while some aren’t. We’ll compare Vue with the rest of its peers at the end of this series, so I suggest you keep on reading! Trust me, there’s a whole lot more to learn! 😄

‍
