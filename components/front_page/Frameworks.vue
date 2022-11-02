<template>
    <b-container class=" feature-container">
        <b-row>
            <b-col  align-self="center" sm="2">
                <div class="f-header">Build Anything</div>
            </b-col>
            <b-col class="build-things" align-self="center">
                <div class="build-thing">
                    <i class="fas fa-window-maximize"></i> 
                        Frontends
                </div>
                <div class="build-thing">
                    <i class="fas fa-server"></i> Backends
                </div>
                <div class="build-thing">
                    <i class="fas fa-code"></i> APIs
                </div>
                <div class="build-thing">
                    <i class="fas fa-cube"></i> Data
                </div>
                <div class="build-thing">
                    <i class="fas fa-robot"></i> Bots
                </div>
                <div class="build-thing">
                    <i class="fas fa-stopwatch"></i> Cron
                </div>
            </b-col>
        </b-row>
  </b-container>

</template>

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
</style>