<template>
  <section class="section common-section w-full gap-10">
    <div class="common-section pt-20">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="Get to know us" />
      
      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          the cyclic blog
        </h2>
    
        <p class="text-center text-neutral-300">
          Our journey, our story, and the lessons we've learned building a system for systems.
        </p>
      </div>
    </div>

    <!--************ POSTS ************-->
    <div role="list" class="mt-10 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
    sm:gap-8 lg:gap-10">
      <a role="listitem" class="col-span-1 group hover:no-underline" v-for="post of posts" :key="post.slug"
      :href="`/posts/${post.slug}`">
        <div class="flex flex-col gap-3">
          <!-- IMAGE & CONTENT -->
          <NuxtImg
            format="webp"
            :src="post.thumbnail"
            :alt="post.title"
            class="object-cover rounded-xl"
            width='350'
            height='240'
            sizes='100vw sm:380px lg:350px'
          />

          <div class="space-y-4">
            <div class="w-full flex items-center justify-between">
              <div class="text-xs px-2 py-1 border border-black rounded-full
              capitalize text-gray-300">
                {{ post.category || 'general' }}
              </div>

              <span class="text-xs text-sky-500 font-semibold capitalize">
                by {{ post.author.split('-').join(' ') }}
              </span>
            </div>

            <h2 class="text-3xl font-bold group-hover:underline">{{ post.title }}</h2>

            <p class="text-sm text-gray-400">{{ post.summary.slice(0, 100) }}...</p>
          </div>
        </div>
      </a>
    </div>


    <HubspotBlogForm />
  </section>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const posts = await $content("posts")
            // .only(['title', 'description', 'img', 'slug', 'author'])
            .where({ "hidden": { "$ne": true } })
            .sortBy("createdAt", 'desc')
            .fetch();

        return {
            posts
        };
    },
  }
</script>
