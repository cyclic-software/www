<template>
  <section class='section common-section'>
    <div class="common-section">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="Express API" />
      
      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          How to host an Express API on Cyclic.
        </h2>
    
        <p class="text-center text-neutral-300">
          A quick guide to help you get up and running with Express.
        </p>
      </div>
    </div>

    <div class='w-full md:max-w-screen-md mx-auto space-y-16'>
      <div class='w-full h-[400px] rounded-3xl flex items-center justify-center text-9xl bg-sky-500
      text-white'>
        <i class="ri-javascript-line"></i>
      </div>

      <article class='prose prose-invert prose-lg'>
        <h2>Prerequisites</h2>
        <ul>
          <li>You should have a Cyclic.sh account. If you don't have one, sign up for an account on their website.</li>
          <li>Make sure you have Node.js and npm installed on your local machine.</li>
          <li>You should have an Express API project ready to deploy.</li>
        </ul>

        <h2>Step 1: Set up Your Express API</h2>
        <p>If you don't have an Express API project yet, create one with Node.js and Express:</p>
        <pre>
          mkdir my-express-api
          cd my-express-api
          npm init
          npm install express
        </pre>
        <p>Build your API by creating routes, controllers, and defining endpoints.</p>

        <h2>Step 2: Create a Cyclic.sh app</h2>
        <ol>
          <li>Log in to your Cyclic.sh account.</li>
          <li>Click on "New App" and deploy a new app.</li>
          <li>On the 'Link Your Own' tab, search for your React app. If you don't see it, try refreshing the list.</li>
          <li>Once you select the repo, a Github popup will appear asking you to install Cyclic and give it access to the repo.</li>
        </ol>

        <h2>Step 3: Set Up Deployment Configuration</h2>
        <ol>
          <li>Specify the branch you want to deploy.</li>
          <li>Set up your deployment settings, including environment variables, if needed.</li>
          <li>Start the deployment process.</li>
        </ol>

        <h2>Step 4: Access Your Express API</h2>
        <p>After the deployment is complete, you can access your Express API through the provided URL. Test your API endpoints and ensure it's working correctly.</p>

        <p>That's it! You've successfully hosted your Express API on Cyclic.sh for free. Cyclic.sh offers a free tier that allows you to run small projects at no cost. If you have more complex requirements or need additional resources, you can explore their pricing plans.</p>
      </article>

      <!-- ********* CALL TO ACTION ********* -->
      <div class="flex flex-col gap-2 items-center border !border-neutral-700 bg-neutral-800/20 rounded-2xl p-10
      space-y-5 text-center">
        <h2 class="text-3xl font-semibold">Deploy an Express API now</h2>

        <hr class="border-primary w-10">

        <p class="text-neutral-300 w-full md:w-[50%] leading-[160%]">
          We have a starter template ready, all you have to do is press Deploy.
        </p>

        <div class="flex flex-col sm:flex-row sm:items-center gap-2">
          <a
            href="https://app.cyclic.sh/api/login"
            class="bg-primary text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:scale-105 transition w-full sm:w-[250px]"
          >
            Deploy
          </a>

          <a
            href="https://cyclic.typeform.com/to/HNNO8Bkp"
            class="border !border-neutral-500 text-white capitalize flex items-center justify-center rounded-xl px-4 py-3
            gap-2 hover:no-underline hover:!border-white transition w-full sm:w-[250px]"
            target="_blank"
          >
            Talk to an Engineer
            <i class="ri-arrow-right-up-line"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>