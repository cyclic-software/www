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
          <div v-for="update of updates" :key="update.slug" class="space-y-4">
            <div class="space-y-2">
              <h3 class="text-3xl font-semibold">{{ update.name }}</h3>
              <p class="text-sky-500 text-sm">
                {{ new Date(update['release-date']).toDateString() }}
              </p>
            </div>

            <div class="prose prose-lg prose-invert" v-html="update['post-body']"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData() {
    const data = await fetch('https://app.cyclic.sh/api/cms')
      .then(res => res.json())
      
    return {
      updates: data
    }
  }
}
</script>