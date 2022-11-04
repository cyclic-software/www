<template>
    <b-container class="hubble">
    <b-row>
      <b-col sm="6" class="text-right"></b-col>
    <b-col sm="6">
      <h2 class="">Precision Cron</h2>
      <p>
        Powerful API-native cron capability built into every app.
        <br>
        <strong>1 second precision</strong> triggering, automatically adjusted for timezone
      and daylight savings.
        <br>
        </p>
      </b-col>
      

    </b-row>

  </b-container>

</template>

<script>
export default {
  data: {
    scrollPosition: null
  },
  
  methods: {
    updateScroll() {
      // console.log(this.scrollPosition)
      console.log(this.$el.getBoundingClientRect().top)
      // this.scrollPosition = window.scrollY
    }
  },
  
  mounted() {
    // window.removeEventListener('scroll', this.updateScroll)
    // window.addEventListener('scroll', this.updateScroll);
  },
  destroy() {
    // window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>
<style scoped>
h2{
  font-size: 30px;
  font-weight: 100;
}
p {
  color: var(--h-white)
}
p strong {
  color: orange;;
}


.hubble {
  position: relative;
  padding: 100px;
  height: 400px;
  display: block;
  /* background-image: url('/images/hubble.jpg'); */
  background-size: cover;
  background-position: bottom;

  background-image: radial-gradient(circle at bottom,rgba(0,0,0,0) 1%,black),url(/images/cron_clock.png);

}


</style>