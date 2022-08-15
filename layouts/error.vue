<template>
  <div>
    <div>
      <div v-if="error.statusCode === 404" class="utility-page-wrap">
        <div class="utility-page-content w-form">
          <h1> 404 | Page Not Found</h1>
          <p>The page you are looking for does not exist. If you need support we are here: <a href="https://discord.cyclic.sh/support">https://discord.cyclic.sh/support</a></p>
          <div class="spacer _16"></div>
          <NuxtLink to="/" class="button w-button">Back to Home</NuxtLink>
        </div>
      </div>

      <div v-else class="utility-page-wrap">
        <div class="utility-page-content w-form">
          <h1>{{ error.statusCode }} | An error occurred</h1>
          <p>Sorry. It is most likely our fault. If you need support we are here: <a href="https://discord.cyclic.sh/support">https://discord.cyclic.sh/support</a></p>
          <div class="spacer _16"></div>
          <NuxtLink to="/" class="button w-button">Back to Home</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>
