<template>
  <div class="w-full space-y-10 gradient-bg">
    <div class="px-10 py-20 max-w-screen-xl mx-auto space-y-10">
      <!--************ HEADER ************-->
      <div class="space-y-4 pb-10 border-b border-white/20">
        <h1 class="text-7xl font-black capitalize m-0 mb-4 tracking-tight">
          product updates
        </h1>

        <p class="text-neutral-300 text-lg">
          Stay up to date with the latest product updates.
        </p>
      </div>
      
      <!--************ CONTENT ************-->
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
        <!--************ SIDE ************-->
        <div class="col-span-1 sticky top-24 h-max py-2 px-4 border
        !border-neutral-800 bg-black/95 rounded-full xl:!border-0 xl:!p-0
        xl:bg-transparent">
          <span class="font-semibold capitalize">all</span>
        </div>
  
        <!--************ UPDATES ************-->
        <div class="col-span-1 xl:col-span-3 space-y-10">
          <div class="text-sm" v-if="loading">Loading updates...</div>
          <div
            v-for="update of updates"
            :key="update.key"
            class="space-y-6 border-b border-white/10 pb-6"
          >
            <div class="space-y-2">
              <div class="pb-2">
                <img
                  v-if="update.props.image.length"
                  :src="update.props.image"
                  :alt="update.props.title"
                  class="w-96 h-auto rounded-xl"
                >
              </div>
              <h3 class="text-3xl font-semibold">{{ update.props.title }}</h3>
              <p class="text-sky-500 text-sm">
                {{ new Date(update.props.published).toDateString() }}
              </p>
            </div>

            <div class="prose prose-lg prose-invert" v-html="$md.render(update.props.content || '')"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    this.loading = true
    const data = await fetch('https://rn.cyclic.app/api/posts')
      .then(res => res.json())
    
    this.updates = data
    this.loading = false
  },

  data() {
    return {
      updates: [],
      loading: false
    }
  }
}
</script>