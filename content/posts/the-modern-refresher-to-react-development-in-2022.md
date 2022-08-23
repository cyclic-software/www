---
title: "The Modern Refresher to React Development in 2022"
slug: 'the-modern-refresher-to-react-development-in-2022'
summary: 'Angular, Svelte, Solid, React, Vue - there are so many frameworks out there. And you probably dealt with the "framework dilemma" at some point in your career. Here is my experience with building the same app on 3 different frameworks.'
colId: 60d0f077b69e2df6b324616c
id: 62d6cf8e5a94f13651e1b8cb
createdAt: 'Wed Aug 24 2022 15:36:46 GMT+0000 (Coordinated Universal Time)'
updatedAt: 'Wed Aug 24 2022 19:52:40 GMT+0000 (Coordinated Universal Time)'
publishedOn: 'Wed Aug 24 2022 19:52:40 GMT+0000 (Coordinated Universal Time)'
author: eluda
category: Engineering
hidden: false
featured: false
public: Wed Aug 24 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
image: /content/react-dev-2022/React_Guide.png
thumbnail: /content/react-dev-2022/React_Guide.png
---


# The Modern Refresher to React Development in 2022

There’s no denying that React is the most popular web framework out there. This fact is even proven by StackOverFlow’s recent survey polling hundreds of thousands of developers. 

![top-wanted-frameworks.png](/content/react-dev-2022/top-wanted-frameworks.png)

Having already covered [Vue development in our prior article in this series](https://www.cyclic.sh/posts/i-made-the-same-app-3-times-in-3-different-frameworks-heres-what-i-learned) comparing web frameworks, it’s only fair to give React an equal chance of showing-off its features and community-made treasures.

And while React is backed by multi-trillion dollar company, Meta (or Facebook), it’s [open-source community](https://github.com/facebook/react) is still one of the key factors of its large success. In this article, we’ll go through the React development process for beginners and developers who just need a quick refresher.

We’ll build a [website for publicly sharing short-messages, called](https://ithink-react.cyclic.app/) **[“ithink”](https://ithink.cyclic.app/)**. It’s like Twitter, but with no accounts and you can’t delete what you post.

[https://github.com/ithink-corp/react](https://github.com/ithink-corp/react)

## First, we need an API

If you play around with the CodePen above, you’ll quickly realize that the database is not fake.

We actually have a [back-end side of our application](https://github.com/ithink-corp/api): it handles the storing and retrieving of simple text data. It’s also built on [Amazon’s S3](https://docs.aws.amazon.com/s3/) object storage service.

[https://github.com/ithink-corp/api](https://github.com/ithink-corp/api)

A developer would normally spend hours and hours setting-up a database like this, and it’s not free either. Luckily for us, we get a free instance of the AWS S3 Storage when we [use Cyclic](https://app.cyclic.sh/#/). No credit card is required.

![https://deploy.cyclic.app/button.svg](https://deploy.cyclic.app/button.svg)

## How do we create a new React project?

A beginner shouldn’t have to create *anything* from scratch. 

That’s a fact, and the React community recognizes it so much that they built a completely interactive program that helps newcomers setup their projects without much hassle.

![create-react-app.svg](/content/react-dev-2022/create-react-app.svg)

It’s called `create-react-app`, and it uses [Babel](https://babeljs.io/) and [webpack](https://webpack.js.org/) under the hood, but you don’t need to know anything about them. But I’d be irresponsible if I told you that you’ll never encounter these two programs, so I recommend saving these articles [about webpack](https://dev.to/anitaparmar26/webpack-5-guide-for-beginners-314c) and [Babel](https://www.sitepoint.com/babel-beginners-guide/). Read them when you’re ready.

It’s finally time to use this magical software. Make sure that you [have NodeJS and NPM installed on your machine](https://nodejs.org/en/), then launch your terminal and run the following command in your preferred directory:

```bash
npx create-react-app my-app
cd my-app
npm start
```

If you’re not using Linux or MacOS for programming, check out this [cheat-sheet covering our commands’ counter-parts in Windows](https://www.geeksforgeeks.org/linux-vs-windows-commands/).

Don’t worry if it takes unusually long for these commands to execute. They may take longer to run if you have a slower internet connection. Please give it some time, as you only need to run it once per project.


<br><br>
<video src="/content/react-dev-2022/Scroll_Capture_2022-08-10_at_8.34.52_PM.webm" playsinline autoplay muted loop style="max-width: 730px;"></video>
<br><br>



When these commands finally cease to run, a new tab will automatically open in your current web browser. While not much, the source-code behind it is critical to the development that we’re gonna do in this article.

Regardless of what starter is given to us when we run `create-react-app`, the first step is to actually erase all of it. Yes, you heard me correctly; we’re gonna erase *almost* all of what this magical program does.

But don’t fret, the part that we’re gonna delete is not the useful part of the React template, so go ahead and run this command:

```bash
rm src/* -r # erase all files in the src/ folder
touch src/index.js # create a new file called "index.js" in the src/ folder
```

We already did too much change, but we can go a step further and craft our own folders. A good folder structure is key to a well-organized and future-proof project. There are many [not-so-well-agreed-on candidates](https://reactjs.org/docs/faq-structure.html) out there, but we’re gonna go simple and create only two new directories:

```bash
mkdir src/components src/utils # create two directories in the src/ folder
```

As their name suggests, [components](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (like the pop-up modal) will go into the `components/` folder, and useful functions (like a function to post data to the server) will go into the `utils/` sibling.

Another step that we would do in this stage is to set-up [TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app) and [FontAwesome](https://fontawesome.com/docs/web/use-with/react/) as they’re used in this project. These packages both contain *detailed* guides that will help you set them up for yourself. This is just another consequence of the wide popularity of React.

No beginner tutorial covers this, but there’s a little secret in programming that you should start practicing as soon as possible. It’s the use of [linters](https://en.wikipedia.org/wiki/Lint_(software)), programs that enforce [style-guides in your code](https://airbnb.io/javascript/react/) and catch bugs before they happen. I recommend using [`eslint`](https://eslint.org/docs/latest/user-guide/getting-started), the most popular linter in the JavaScript world. Setting-it up is easy, as covering in the linked guide.

## How do we create a component in React?

[https://codepen.io/eludapens/pen/zYWJENQ?editors=1010](https://codepen.io/eludapens/pen/zYWJENQ?editors=1010)

As it currently stands, our app is not functional. This stems from the fact that the `index.js` script is still empty, and that’s because we just created it.

Let’s learn a new fact about React: each application must have *one* **main component**. It’s like the `<body>` element, where all the content is held. React places the insides of the main component inside a top-level `#root` element, as you can see in the following image:

![Screenshot from 2022-08-10 22-42-22.png](/content/react-dev-2022/Screenshot_from_2022-08-10_22-42-22.png)

As you might have guessed, we create this main component inside the `index.js` file. It might sound scary to create something from scratch… But it’s not, because it always resembles the following template:

```jsx
// The imports
import React from 'react'
import ReactDOM from 'react-dom/client'

// The component
class App extends React.Component {
		// The JavaScript Logic
		constructor(props) {
			super(props)
		}

		// The HTML Markup
		// Notice how we use className instead of class; this is important!
		// read this: https://reactjs.org/docs/dom-elements.html
    render() {
				return (
					<div>
						<header className="...">
							<h1>ithink</h1>
							<button>
								New
							</button>
						</header>
					</div>
				)
		}
}

// Injecting the component inside the #root element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

Hold on! Those are a lot of new things that you may have never seen before. First of all, there’s the presence of [imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). Please make sure that your understanding of these two concepts is rock-solid before continuing with this article.

But there’s one other thing that still stands out, and it’s surely new to all beginner React developers. It’s the “weird” mix of JavaScript code and HTML markup. This odd format is called [JSX](https://reactjs.org/docs/introducing-jsx.html), the **J**ava**S**cript E**x**tension. All you need to know about it for now is that it makes the inclusion of HTML markup inside JavaScript code okay.

- **It doesn’t always work!**
    
    With JSX, this is **not** okay:
    
    ```jsx
    render() {
    	<article>...</article>
    	<article>...</article>
    }
    ```
    
    But *this* is:
    
    ```jsx
    render() {
    	<div>
    		<article>...</article>
    		<article>...</article>
    	</div>
    }
    ```
    
    **Lesson learned:** always wrap your HTML markup around *one* and *only one* element.
    

## How do we listen to click events in React?

We all know how to attach buttons to logic using pure JavaScript code, but the same task is done quite differently (and quite more simply as you’ll see) in React. We’re gonna be using the `onClick` attribute, and while it’s already available in pure JavaScript, its usage is quite more common in React.

```jsx
class App extends React.Component {
	...
	render() {
		return (
			<div>
				...
				<button onClick="this.toggleModal">New</button>
			</div>
		)
	}
}
```

With one simple attribute, we’re able to call any method defined on the component. It’s recommended to define component methods in the following manner:

```jsx
class App extends React.Component {
	...
	// Bad! :(
	toggleModal() {
		// do stuff...
	}

	// Okay :)
	toggleModal = () => {
		// do stuff...
	}
	...
}
```

Long story short, the first style would prohibit your method from accessing the `[this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this), which you would need to alter other parts of the component. On the other hand, the second method is fine and you should make it a habit to define class methods in that style.

## How do we create a toggle in React?

Almost every user-interface component has one or more toggles in it, and our pop-up modal is no different. With a Boolean toggle, we can dictate if the modal is either open or closed. Thankfully, creating toggles is no hassle at all.

Variables that control the UI are all collectively called the **state**, and our modal toggle is clearly one of them. The state is anything from data displayed in the application to user input to toggles that can do pretty much everything. When a state variable changes, the component is quickly and efficiently refreshed. Creating stateful variables is also the easiest thing in the world:

```jsx
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
        }
    }
		...
}
```

Toggles wouldn’t be very interesting if we couldn’t actually *toggle* them. This logic falls into the component method that we created earlier. Unfortunately, mutating stateful variables is quite counter-intuitive:

```jsx
toggleModal = () => {
	// Wrong! :(
	this.state.isModalOpen = true

	// Correct! :)
	this.setState({
		isModalOpen: true
	})
}
```

## How do we create multiple components in React?

[https://codepen.io/eludapens/pen/XWEPeaw?editors=1010](https://codepen.io/eludapens/pen/XWEPeaw?editors=1010)

Aside from the main component, applications are composed of a ton of UI parts that must all be organized in an effective fashion. We created the `components/` folder for *this* reason; it’s time to finally put it to use!

I’m also gonna introduce to you a new template for creating components in React, and it’s the simplest one. Instead of classes, which we may not all be comfortable with, we’re gonna use functions, which we definitely all have used enough times before that we could even write them with our eyes closed. Please make sure that you’re fluent with [JavaScript exports](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) before following with this article:

```jsx
// components/modal.js

export function NewModal(props) {
  // notice the use of 'htmlFor' instead of 'for'
  // read this to understand why: https://reactjs.org/docs/dom-elements.html
  return (
    <div>
      <dialog open>
        <main>
          <form method="dialog">
            <label htmlFor="content">Content</label>
            <textarea id="content" autoFocus></textarea>

            <div>
              <button value="cancel">Cancel</button>
              <button value="default">Post</button>
            </div>
          </form>
        </main>
        <footer>
          <p>Whatever you write will become public.</p>
        </footer>
      </dialog>
    </div>
  );
}
```

And while our component is now *almost* done, it won’t magically appear in our application. One more step that we must take is to import the modal into the main component. It’s easy to do and very similar to native HTML elements:

```jsx
import { Modal } from './components/modal'

class App extends React.Component {
	...
	render() {
		return (
			<div>
				...
				<Modal />
			</div>
		)
	}
}
```

We also can’t forget about the toggle logic that we just implemented in the last section of this article, so we must put it to use. It’s easy to tell React to *conditionally* show an element based on a Boolean **state variable**. The syntax that I’m about to introduce is quite new, and it’s special to **JSX**:

```jsx
{ this.state.isModalOpen && <Modal/> }
```

The double brackets are key to combining JavaScript logic with HTML markup. They can contain *almost* anything from calculations to String manipulations and even lists of HTML elements as we’ll soon see in this guide:

```jsx
{ 'Hello' }
{ 5 + 5 }
{ 'Hello' + ' World' }
```

This neat feature of JSX is called **[interpolation](https://egghead.io/lessons/react-understand-and-use-interpolation-in-jsx),** and we can even combine it with JavaScript’s [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) (&&) to conditionally display HTML markup depending on a variety of possibilities:

```jsx
{ false && <div></div> /* will NEVER display */ }
{ true && <div></div> /* will ALWAYS display */ }
{ condition && <div></div> /* will ONLY display if condition is TRUE */ }
```

## How do we submit data to the server with a React component?

After having already covered the process of listening to click events, it’s no surprise that form submission won’t be much of a hassle at all. I will therefore quickly cover it right now. And please notice how we don’t have to use the `this` keyword anymore with function-based components.

```jsx
export function NewModal(props) {
  async function onSubmit(e) {
    e.preventDefault()
    // TODO: submit data to the server
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        ...
      </form>
    </div>
  )
}
```

But while this is all fun and games for us, it’s still critical to pose the following question: *how do we get the input’s value in React?* To answer this seemingly easy question, I have to introduce you to **[React Hooks](https://reactjs.org/docs/hooks-intro.html),** the *most* important concepts in modern development. And while they’re a bit beyond the scope of this tutorial, we’re gonna use a handy hook to create **state variables** for function-based components.

```jsx
import { useState } from 'react'

export function NewModal(props) {
  const [message, setMessage] = useState('')
  ...

  return (
    ...
    <textarea
      value={message}
      onChange={(event) => setMessage(event.target.value)}
    />
  )
}
```

That’s surprising simply! With the `useState` hook, we’re able to both *access* the stateful variable `message` and *mutate* it using its `setMessage` sibling. With these two gems, we used JSX interpolation to set the value of the text-area and respond to change events by updating the state. Expect to see this pattern again-and-again in React applications.

```jsx
import { postMessage } from '../utils/server'

// it's now easy to post data to the server!
async function onSubmit(e) {
	e.preventDefault()
	await postMessage(message)
}
```

We still can’t *actually* submit data to our server without writing a script to do that job. As a utility function, we’re gonna put this logic inside a new file named `server.js` in the `utils/` directory. There’s nothing new here, just an ordinary data `[fetch()` function](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to communicate with our server.

```jsx
// utils/server.js

export async function postMessage(message) {
    await fetch('https://ithink-api.cyclic.app/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: message,
        }),
    })
}
```

## How do we close a modal when clicked outside in React?

[https://codepen.io/eludapens/pen/RwMYLjp?editors=0010](https://codepen.io/eludapens/pen/RwMYLjp?editors=0010)

One feature that we see again and again in websites is the ability to close pop-ups by tapping anywhere outside their area. This is clearly positive for the user-experience of our application, so it’s not crazy that we’re gonna be adding it, even in this high-level tutorial. 

Thankfully, we don’t have to do much code ourselves thanks to the great React community. Being such an important feature, experienced developers have already implemented it and shipped it along-with dozens of other small utilities as **hooks**. (yes, hooks are marking their presence once again; I told you that they’re very important concepts!) It’s all packaged in a nifty [library called react-use](https://github.com/streamich/react-use).

```jsx
import { useRef } from 'react'
import { useClickAway } from 'react-use'

export function NewModal(props) {
		...

    const containerRef = useRef(null)
    useClickAway(containerRef, () => props.onClose())

		return (
			<div>
				<dialog ref={ containerRef }>...</dialog>
			</div>
		)
}
```

Notice how we’re also making-use of yet another hook, `useRef`. It’s one of the most popular hooks out there, because its function is one that’s very important. The `useRef` hook gives us access to the DOM; using it is as simple as adding a `ref` attribute to the desired HTML element as you can see in the code snippet above.

## How do we display a list of items in React?

[https://codepen.io/eludapens/pen/KKoxXrJ?editors=0010](https://codepen.io/eludapens/pen/KKoxXrJ?editors=0010)

Good news! We’re done with the modal component! But we’re still missing one major part of our application: the list of messages. Not much is new here, so let’s just create a new component file named `message-list.js` in the `components/` directory as usual.

```jsx
// index.js
import { MessageList } from './components/message-list'

render() {
	return (
		<div>
			...
			<main><MessageList /></main>
		</div>
	)
}

// components/message-list.js

export function MessageList(props) {
	if (props.messages) {
		// Display list of messages
		return (
			<div></div>
		)
	} else {
		// Display loading skeleton
		return (
			<div></div>
		)
	}
}
```

As you can see, we’re using an if-condition to decide which UI to display. If data is loaded, we’re gonna return a list showing all of it. Otherwise, we’re gonna show a [loading skeleton](https://www.freecodecamp.org/news/how-to-build-skeleton-screens-using-css-for-better-user-experience/). Of course, none of these things is currently being shown. That’s because I have to introduce you to a new concept in React.

Remember JSX interpolation? There’s something very interesting we can do with this magical feature. It’s possible to use the [Array map() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to return a *dynamic* list of HTML elements!

```jsx
<div>
	{ props.messages.map(({ message }) => <p key={message}>{ message }</p>) }
</div>
```

Isn’t that so amazing? We can do the same thing to display the loading skeleton.

```jsx
<div>
	{ Array.from(Array(20).keys()).map((number) => <div key={number}></div>) }
</div>
```

Notice the use of the `key` property in both examples. It’s important to include it when using this interpolation feature, as it helps React keep track of the list of elements. It’s critical that these keys are all *unique*!

## How do we load a list of data from the server with a React component?

While we already built the messages listing component, it still doesn’t display any data and it’s stuck in the loading state. Obviously, we haven’t made any effort to actually load messages from the server yet. Thankfully, this is not very different from former server function that we just implemented.

```jsx
class App extends React.Component {
    constructor(props) {
			super(props)
			this.state = {
				...,
				messages: null
			}
		}
}
```

As soon as the main component is created, we wish to load data from the server. There’s no immediately obvious way of implementing this logic, because you still don’t know about **[lifecycle hooks](https://reactjs.org/docs/state-and-lifecycle.html)**. With these magical devices, we’re able to run whatever logic we want at important times in a component’s “lifecycle”.

```jsx
class App extends React.Component {
    ...
    componentDidMount() {
        // load items
    }
}
```

With the `compnentDidMount` lifecycle hook, we’re able to run whatever we want when the component is finally rendered, which is exactly what we were looking for. With that done, we’re left with the task of filling the `messages` **stateful variable** with data from the server.

```jsx
import { getMessages } from './utils/server'

class App extends React.Component {
    ...
    componentDidMount() {
        const messages = await getMessages()

				this.setState({
					messages: messages,
				})
    }
}
```

Of course, we cannot dismiss the logic that actually retrieves data from the server.

```jsx
// utils/server.js

export async function getMessages() {
    const res = await fetch('https://ithink-api.cyclic.app/', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const items = await res.json()
    return items.map((item) => ({
        message: item,
    }))
}
```

## How do we deploy a React project to the Internet?

It’s hard-enough to create an entire application in one’s local computer, it’s its own industry with the name: “**Frontend Development**”. A frontend developer should not have to worry about the intricacies behind servers and deployment.

Lucky for us, Cyclic gives us the ability to deploy React applications to the cloud for free, by just clicking one button and adding one script to our application. With [Cyclic’s React starter](https://github.com/cyclic-software/starter-react-app), we know to add the following script to the root of our project:

```jsx
// /server.js

const express = require('express')
const path = require("path");
const app = express()

// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use(express.static('build', options))

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`React app listening at http://localhost:${port}`)
})
```

It’s also important to add the following changes to the `package.json` file:

```json
{
	"scripts": {
		- "start": "react-scripts start",
		+ "start": "node server.js",
    + "dev": "react-scripts start",
	}
}
```
<br><br>
<video src="/content/react-dev-2022/output.mp4" controls="controls" style="max-width: 730px;"></video>
<br><br>

With that done, all it takes to launch our app to the world-wide-web is creating a Cyclic account and clicking the **DEPLOY** button. Trust me, it’s so satisfying seeing it do all the work *for you!* And you can even choose your own free subdomain afterwards! 😃

![https://deploy.cyclic.app/button.svg](https://deploy.cyclic.app/button.svg)

## Conclusion

And voila, our application is done, just like that! The React development process is definitely a unique one, and you can immediately tell many differences from the [VueJS process that we covered in our last article](https://www.cyclic.sh/posts/i-made-the-same-app-3-times-in-3-different-frameworks-heres-what-i-learned).

We covered many features of React:

- Creating new projects with `create-react-app`,
- listening to and handling events,
- hooks and the react-use library,
- custom components,
- JSX interpolation,
- stateful variables,
- dynamic lists.
- DOM refs.

And while we just scraped the surface of what React is capable of, we still got a good idea of what the React development process is like and that’s enough to help us choose the best framework for our purposes.
