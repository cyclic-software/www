<template>
  <div class="section wf-section">
    <div class="container w-container">
      <div class="_12-columns tablet-center">
        <div v-if="left" class="column desk-6">
          <slot name="img"></slot>
        </div>
        <div class="column desk-1 tab-0"></div>
        <div class="column desk-5">
          <div class="text-box">
            <h2>
              <slot name="title"></slot>
            </h2>
            <p>
              <slot name="text"></slot>
            </p>
          </div>
        </div>
        <div v-if="!left" class="column desk-6">
          <slot name="img"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    left: Boolean
  }
}
</script>
