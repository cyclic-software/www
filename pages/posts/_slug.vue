<template>
  <div>
    <div class="section half-padding wf-section">
      <div class="container w-container">
        <div class="blog-image-header">
          <img :src="post.image" alt="" class="image-cover">
        </div>
      </div>
    </div>
    <div class="section small-padding wf-section">
      <div data-w-id="cb94c0a0-2bab-b0c9-9da8-d93e4ab951f6" xstyle="opacity:0" class="blog-container w-container">
        <h1>{{ post.title }}</h1>
        <div class="byline">
          <div class="text-block-6">By:</div>
          <div>
            <a href="#" class="link-3">{{post.author}}</a>
            <a href="#" class="link-2">@author-twitter</a>
          </div>
          <div class="div-block"></div>
          <div class="text-block-5">Posted: {{ formatDate(post.publishedOn) }}</div>
        </div>
        <div class="div-block-2">
          <a href="#" class="link-block w-inline-block w-clearfix">
            <div class="html-embed share-button w-embed">
              <a onclick="window.open(this.href, 'twitter-share','width=580,height=296');return false;"
    class="share-button" target="_blank" href="http://twitter.com/share?url=https://www.cyclic.sh/posts/&text=%20by%20" >
              </a>
              <!--
  Reddit <i class="icon"></i>
  Envelope <i class="icon"></i>
  Slack <i class="icon"></i>
  Hacker News <i class="icon"></i>
  -->
            </div>
            <div class="html-embed share-button w-embed">
              <a onclick="window.open(this.href, 'linkedin-share','width=530,height=600');return false;"
    class="share-button" target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.cyclic.sh/posts/">
              </a>
              <!--
  Twitter <i class="icon"></i>
  Reddit <i class="icon"></i>
  Envelope <i class="icon"></i>
  Slack <i class="icon"></i>
  Hacker News <i class="icon"></i>
  -->
            </div>
          </a>
        </div>
        <div class="spacer _32"></div>
        <div class="rich-text w-richtext">
          <nuxt-content :document="post"></nuxt-content>
        </div>
      </div>
    </div>

    <HubspotBlogForm />


    <!-- <div class="section small-padding wf-section">
      <div class="container w-container">
        <h2>Related Posts</h2>
        <div class="spacer _24"></div>
        <div class="w-dyn-list">
          <div role="list" class="_12-columns align-stretch w-dyn-items">
            <div role="listitem" class="column desk-4 w-dyn-item">
              <a href="#" class="blog-card w-inline-block"><img src="" alt="" class="card-thumbnail">
                <div class="card-text-container">
                  <div class="card-tag"></div>
                  <h4 class="card-title"></h4>
                  <p class="card-summary"></p>
                </div>
              </a>
            </div>
          </div>
          <div class="w-dyn-empty">
            <div>No items found.</div>
          </div>
        </div>
      </div>
    </div> -->

    <CtaLaunchHelloWorld></CtaLaunchHelloWorld>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const post = await $content('posts', params.slug).fetch()

      console.log(JSON.stringify(params.slug,null,2))
      return { post }
    },
    methods: {
        formatDate(date) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' }
          return new Date(date).toLocaleDateString('en', options)
        }
    }
  }
</script>
