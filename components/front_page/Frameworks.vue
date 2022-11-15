<template>
    <b-container class="">
        <div class="feature-container">
        <b-row>
            <b-col  align-self="center" sm="2">
                <div class="f-header">Build Anything</div>
            </b-col>
            <b-col align-self="center">
                <div class="build-things">
                    <div class="build-thing">
                      <a href="https://docs.cyclic.sh/overview/starters#frontends" @click="trackClick('frontends', $event)" >
                        <i class="fas fa-window-maximize"></i> Frontends
                      </a>
                    </div>
                    <div class="build-thing">
                      <a href="https://docs.cyclic.sh/overview/starters#apis" @click="trackClick('backends', $event)" >
                        <i class="fas fa-server"></i> Backends
                      </a>
                    </div>
                    <div class="build-thing">
                      <a href="https://docs.cyclic.sh/overview/starters#apis" @click="trackClick('apis', $event)" >
                        <i class="fas fa-code"></i> APIs
                      </a>
                    </div>
                    <div class="build-thing">
                      <a href="https://docs.cyclic.sh/overview/starters#data" @click="trackClick('data', $event)" >
                        <i class="fas fa-cube"></i> Data
                      </a>
                    </div>
                    <div class="build-thing">
                      <a href="https://docs.cyclic.sh/overview/starters#bots" @click="trackClick('bots', $event)" >
                        <i class="fas fa-robot"></i> Bots
                      </a>
                    </div>
                    <div class="build-thing">
                      <a href="https://docs.cyclic.sh/serverless/on-demand#cron-tasks" @click="trackClick('cron', $event)" >
                        <i class="fas fa-stopwatch"></i> Cron
                      </a>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
  </b-container>

</template>

<script>
export default {
  methods: {
    async trackClick(text, e) {
      try {
        let session_seconds = parseInt(e.timeStamp / 1000)
        await gtag('event', 'build_things', {
          'event_label': window.location.href,
          'event_category': text,
          'value': session_seconds,
          'page': window.location,
          'session_seconds': session_seconds,
          'event_callback': function () { }
        });
      } catch (e) {
      }
    },
  }
}
</script>

<style scoped>
.f-header{
    font-size:20px;
    font-weight:500;
    text-align: center;;
    color: var(--h-white);
    border-right: 2px solid var(--h-white);
}
h4 {
    color: var(--h-white);
    font-size: 20px;
}
.feature-container{
    /* border: 1px solid #152553; */
    padding: 20px;
    border-radius: 8px;;
    box-shadow: 0px 0px 60px 4px #162859;
    margin-bottom: 100px;
}

/* @keyframes glow{
  to {
    box-shadow: 0px 0px 30px 20px #535FED;
  }
} */
.build-things{
    display: flex
}
.build-thing{
    width: 20%;
    /* height: 30px; */
    text-align: center;;
    font-size: 20px;
    font-weight: 100;
}

.build-thing i{
        margin-right: 5px;
    }

@media screen and (max-width: 991px) {
    .feature-container{
        margin: 15px auto;
        padding: 30px;
        margin-bottom: 60px;
        box-shadow: 0px 0px 120px 4px #101e44;
    }
    .f-header{
        border-right: none;
        margin-bottom: 40px;;
        font-size: 25px;
    }
    .build-things{
        display: grid;
        text-align:left;
        grid-template-columns: 1fr 1fr;
        row-gap: 15px;
    }
    .build-thing{
        text-align: left;
        width: 100%;
        color: var(--h-white)
    }
    .build-thing i{
        margin-right: 5px;
    }
  }

</style>
