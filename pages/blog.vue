<template>
  <div>
    <div>
      <!-- <h1>Posts</h1> -->

        <div class="section hero blog wf-section">
          <div class="container w-container">
            <div>
              <h1 data-w-id="301e4b28-a4f7-97b8-61de-27ca493eee34" xstyle="opacity:0" class="header-large">Our Blog</h1>
            </div>
          </div>
        </div>

        <div class="container-2 blog-container">
          <div class="blog-list-wrapper w-dyn-list">
            <div role="list" class="blog-list w-dyn-items">
              <div role="listitem" class="blog-div w-dyn-item" v-for="post of posts" :key="post.slug">
                <a class="blog-item w-inline-block" :href="`/posts/${post.slug}`">
                  <div class="blog-content">
                    <div class="author-sideflex">
                      <div class="label small">{{post.author}}</div>
                    </div>
                    <h5 class="blog-title">{{post.title}}</h5>
                    <div class="link">Read more</div>
                    <div class="category-label">{{post.category}}</div>
                  </div>
                  <img :src="post.thumbnail" alt="" class="blog-item-image">
                </a>
              </div>
            </div>
            <div v-if="posts.length <= 0" class="w-dyn-empty">
              <div>No items found.</div>
            </div>
          </div>
        </div>

      <!-- <ul>
        <li v-for="post of posts" :key="post.slug">
          <nuxt-link :to="{name: 'blog-slug', params: {slug: post.slug}}">
            <img :src="post.thumbnail" />
            <div>
              <h2>{{post.title}}</h2>
              <p>{{post.author}}</p>
              <p>{{post.summary}}</p>
            </div>
          </nuxt-link>
        </li>
      </ul> -->
    </div>

    <LaunchHelloWorld></LaunchHelloWorld>
  </div>

</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const posts = await $content("posts")
            // .only(['title', 'description', 'img', 'slug', 'author'])
            .where({ "hidden": { "$ne": true } })
            .sortBy("publishedOn", "desc")
            .fetch();
        return {
            posts
        };
    },
  }
</script>
