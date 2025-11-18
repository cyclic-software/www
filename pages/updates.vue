<template>
  <section class="section space-y-12">
    <div class="common-section pt-20">
      <!-- ********* PILL TEXT ********* -->
      <Pill text="Don't miss a thing" />
      
      <!-- ********* CTA TEXTS ********* -->
      <div class="space-y-6">
        <h2 class="font-extrabold text-4xl lg:text-5xl text-center capitalize">
          product updates
        </h2>
    
        <p class="text-center text-neutral-300">
          Stay up to date with the latest product updates.
        </p>
      </div>
    </div>

    <hr class="border-neutral-800">
      
    <!--************ CONTENT ************-->
    <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
      <!--************ SIDE ************-->
      <div class="col-span-1 sticky top-24 h-max py-2 px-4 border
      !border-neutral-700 bg-neutral-800/10 rounded-full xl:!border-0 xl:!p-0
      xl:bg-transparent">
        <span class="font-semibold capitalize">all</span>
      </div>

      <!--************ UPDATES ************-->
      <div class="col-span-1 xl:col-span-3 space-y-10">
        <div class="text-sm" v-if="loading">Loading updates...</div>
        <div class="text-sm text-neutral-400" v-else-if="!updates.length">
          No updates are available right now.
        </div>
        <template v-else>
          <div
            v-for="update of updates"
            :key="update.key"
            class="space-y-6 border-b border-white/10 pb-6"
          >
            <div class="space-y-2">
              <div class="pb-2">
                <NuxtImg
                  format="webp"
                  loading="lazy"
                  v-if="update.props.image"
                  :src="update.props.image"
                  :alt="update.props.title"
                  class="w-96 h-auto rounded-xl"
                />
              </div>
              <h3 class="text-3xl font-semibold">{{ update.props.title }}</h3>
              <p class="text-sky-500 text-sm">
                {{ new Date(update.props.published).toDateString() }}
              </p>
            </div>

            <div class="prose prose-lg prose-invert" v-html="$md.render(update.props.content || '')"></div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      updates: [],
      loading: false
    }
  }
}
</script>