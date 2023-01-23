<template>
  <div class="w-full space-y-10 gradient-bg">
    <div class="px-10 pt-20 max-w-screen-xl mx-auto space-y-10">
      <!--************ HEADER ************-->
      <div class="">
        <h1 class="text-7xl font-black capitalize m-0 mb-4 tracking-tight">
          cyclic blog
        </h1>

        <p class="text-gray-400 mb-10 text-lg">
          Our journey, our story, and the lessons we've learnt building a system for systems.
        </p>

        <!-- <form class="w-64">
          <input
            type="text"
            placeholder="Search posts..."
            class="h-full w-full rounded-[999px] py-2 px-3 bg-transparent border border-white/20
            focus:border-white"
          >
        </form> -->
      </div>

      <!--************ POSTS ************-->
      <div role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6
      sm:gap-8 lg:gap-10">
        <a role="listitem" class="col-span-1 group hover:no-underline" v-for="post of posts" :key="post.slug"
        :href="`/posts/${post.slug}`">
          <div class="flex flex-col gap-3">
            <!-- IMAGE & CONTENT -->
            <img
              :src="post.thumbnail"
              :alt="post.title"
              class="w-full h-60 object-cover rounded-xl"
            >

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

              <h2 class="text-4xl font-bold tracking-tight group-hover:underline">{{ post.title }}</h2>

              <p class="text-sm text-gray-400">{{ post.summary.slice(0, 100) }}...</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <HubspotBlogForm />
  </div>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const posts = await $content("posts")
            // .only(['title', 'description', 'img', 'slug', 'author'])
            .where({ "hidden": { "$ne": true } })
            .sortBy("createdAt", 'desc')
            .fetch();

        console.log(posts[0])
        return {
            posts
        };
    },
  }
</script>
