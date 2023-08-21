<template>
  <div :class="getBorder" class="!border-neutral-700 p-4 space-y-3">
    <!-- ********* ICON ********* -->
    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-neutral-800">
      <i :class="`${icon}`"></i>
    </div>

    <!-- ********* TITLE ********* -->
    <h4 class="text-xl">{{ title }}</h4>

    <hr class="border-primary w-8">

    <p class="text-neutral-300 leading-[150%] text-sm">{{ text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'BenefitCard',
    computed: {
      getBorder() {
        if (!this.no_border) return 'border'
        if (this.no_border === 'top') return 'border-l border-b border-r'
        if (this.no_border === 'bottom') return 'border-l border-t border-r'
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },

      text: {
        type: String,
        required: true
      },

      icon: {
        type: String,
      },

      no_border: {
        type: String
      }
    }
  }
</script>